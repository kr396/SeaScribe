import {View, Text, SafeAreaView, Alert} from 'react-native';
import React, {FC, useEffect, useMemo, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';

import styles from './styles';
import {DropDown, InputText, NewObserver, ThemeButton} from '../../components';
import {
  OBSERVERS_NUM,
  OBSERVER_EXPERIENCE_LEVELS,
  REGIONS,
  SPECIES_LISTS,
  SUB_REGIONS,
  SURVEY_MODES,
} from '../../data';
import Popup from '../../components/Popup';
import {RootStackScreenProps} from '../../navigation/types';
import {useAppDispatch, useAppSelector} from '../../store';
import {
  getMethodologies,
  getObservers,
  getSurveyPlatforms,
} from '../../store/slices/appSlice';
import NewSurveyPlatform from '../../components/NewSurveyPlatform';
import AncillaryFieldsView from '../../components/AncillaryFieldsView';
import {colors} from '../../constants';
import {AncillaryField, Survey} from '../../types';
import {
  addNewSurvey,
  setSelectedAncillaryFields,
} from '../../store/slices/surveySlice';

const NewSurvey: FC<RootStackScreenProps<'NewSurvey'>> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const methodologies = useAppSelector(getMethodologies);
  const observers = useAppSelector(getObservers);
  const surveyPlatforms = useAppSelector(getSurveyPlatforms);

  const [surveyName, setsurveyName] = useState('');
  const [surveyMode, setSurveyMode] = useState(1);
  const [methodology, setMethodology] = useState<number | null>(null);
  const [numObservers, setNumObservers] = useState(1);
  const [surveyPlatform, setSurveyPlatform] = useState<number | null>(null);
  const [region, setRegion] = useState(null);
  const [subRegion, setSubRegion] = useState(null);
  const [speciesList, setSpeciesList] = useState(null);

  const observersList = Array.from({length: 10}, (_, idx) => {
    return {
      id: idx,
      observerId: 0,
      observerExperienceLevelId: 0,
      notes: '',
    };
  });
  const [observersForSurvey, setObserversForSurvey] = useState(observersList);
  const [showSurveyPlatformPopup, setShowSurveyPlatformPopup] = useState(false);

  const [showNewObserverPopup, setShowNewObserverPopup] = useState(false);
  const [gpsButtonStatus, setGpsButtonStatus] = useState<
    'pending' | 'success' | 'error'
  >('pending');
  const [position, setPosition] = useState<GeolocationResponse | null>(null);
  const [checkingGPS, setCheckingGPS] = useState(false);
  const [selectedAncillaryFieldsList, setSelectedAncillaryFieldsList] =
    useState<AncillaryField[]>([]);

  const regionsList = useMemo(
    () => SUB_REGIONS.filter(subR => subR.regionId === region),
    [region],
  );

  const startTransectDisabled = useMemo(
    () => {
      return (
        !surveyName ||
        !methodology ||
        !surveyPlatform ||
        !region ||
        !speciesList
      );
    },
    //TODO: OBSERVERS
    [surveyName, methodology, surveyPlatform, region, speciesList],
  );

  useEffect(() => {
    Geolocation.requestAuthorization(
      () => {
        console.log('permission granted');
      },
      error => {
        console.log(error);
      },
    );
  }, []);

  useEffect(() => {
    const selectedAncillaryFields =
      methodologies.find(method => method.id === methodology)
        ?.ancillaryFields || [];

    setSelectedAncillaryFieldsList(selectedAncillaryFields);

    return () => {};
  }, [methodology]);

  const onSelectObserver = (
    value: number | string,
    index: number,
    type: 'observer' | 'experiance' | 'notes',
  ) => {
    let updatedObservers = [...observersForSurvey];
    if (type === 'observer') {
      updatedObservers[index].observerId = value as number;
    } else if (type === 'experiance') {
      updatedObservers[index].observerExperienceLevelId = value as number;
    } else {
      updatedObservers[index].notes = value as string;
    }
    setObserversForSurvey(updatedObservers);
  };

  const onGPSButtonPress = async () => {
    setCheckingGPS(true);
    Geolocation.getCurrentPosition(
      pos => {
        setPosition(pos);
        setGpsButtonStatus('success');
        setCheckingGPS(false);
      },
      error => {
        console.log('gps error', error);
        setGpsButtonStatus('error');
        setCheckingGPS(false);
      },
      {enableHighAccuracy: true},
    );
  };

  const onClearPress = () => {
    navigation.navigate('RecordObservations');
    setsurveyName('');
    setSurveyMode(1);
    setMethodology(null);
    setNumObservers(1);
    setSurveyPlatform(null);
    setRegion(null);
    setSubRegion(null);
    setSpeciesList(null);
  };

  const onStartTransectPress = () => {
    if (!startTransectDisabled) {
      const id = Date.now();
      let survey: Survey = {
        id,
        created: new Date(),
        name: surveyName,
        surveyModeId: surveyMode,
        methodologyId: methodology!,
        numObservers: numObservers,
        surveyPlatformId: surveyPlatform!,
        regionId: region!,
        speciesListId: speciesList!,
      };
      if (subRegion) {
        survey.subregionId = subRegion;
      }
      dispatch(addNewSurvey(survey));
      navigation.navigate('StartTransect', {surveyId: id});
    }
  };

  const onAncillaryFiedsPress = () => {
    if (methodology) {
      dispatch(setSelectedAncillaryFields(selectedAncillaryFieldsList));
      navigation.navigate('AncillaryFields', {
        returnTo: 'start-new-survey',
        selectedMethodologyId: methodology,
      });
    } else {
      Alert.alert(
        'Select Methodology First',
        'Please select a methodology first, as that selection provides the set of Ancillary Fields for this survey.',
      );
    }
  };

  const getObserversList = useMemo(() => {
    return observersList.slice(10 - numObservers).map((obs, index) => {
      const observer = observersForSurvey[index];
      return (
        <View key={observer.id}>
          <Text style={styles.observerText}>Observer {index + 1}</Text>
          <View style={[styles.observerContainer, {zIndex: 995 - index}]}>
            <DropDown
              lable="Observer"
              items={observers}
              value={observer.observerId}
              isRequired={true}
              showAddButton={true}
              zIndex={2}
              dropdownProps={{
                schema: {value: 'id'},
                onSelectItem: (item: any) =>
                  onSelectObserver(item.id, index, 'observer'),
              }}
              onAddPress={() => setShowNewObserverPopup(true)}
            />
            <DropDown
              lable="Experiance"
              items={OBSERVER_EXPERIENCE_LEVELS}
              value={observer.observerExperienceLevelId}
              setValue={setNumObservers}
              zIndex={1}
              dropdownProps={{
                onSelectItem: (item: any) =>
                  onSelectObserver(item.value, index, 'experiance'),
              }}
            />
            <InputText
              lable="Notes"
              inputProps={{
                value: observer.notes,
                onChangeText: text => onSelectObserver(text, index, 'notes'),
              }}
            />
          </View>
        </View>
      );
    });
  }, [observersList]);

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <KeyboardAwareScrollView bounces={false}>
          <View style={styles.content}>
            <InputText
              lable="Survey Name"
              isRequired={true}
              inputProps={{value: surveyName, onChangeText: setsurveyName}}
            />
            <DropDown
              lable="Mode"
              items={SURVEY_MODES}
              value={surveyMode}
              setValue={setSurveyMode}
              zIndex={999}
            />
            <DropDown
              lable="Methodology"
              items={methodologies}
              value={methodology}
              isRequired={true}
              setValue={setMethodology}
              showAddButton={true}
              zIndex={998}
              dropdownProps={{schema: {value: 'id'}}}
              onAddPress={() => {
                navigation.navigate('NewMethodology', {
                  setMethodology,
                });
              }}
            />
            <DropDown
              lable="# Observers"
              items={OBSERVERS_NUM}
              value={numObservers}
              setValue={setNumObservers}
              zIndex={997}
            />
            <View style={styles.observers}>{getObserversList}</View>
            <DropDown
              lable="Survey Platform"
              items={surveyPlatforms}
              value={surveyPlatform}
              isRequired={true}
              showAddButton={true}
              setValue={setSurveyPlatform}
              zIndex={976}
              onAddPress={() => setShowSurveyPlatformPopup(true)}
              zIndexInverse={996}
            />
            <DropDown
              lable="Region"
              items={REGIONS}
              value={region}
              isRequired={true}
              setValue={setRegion}
              zIndex={975}
              zIndexInverse={997}
            />
            <DropDown
              lable="Sub-region"
              items={regionsList}
              value={subRegion}
              setValue={setSubRegion}
              zIndex={974}
              zIndexInverse={998}
            />
            <DropDown
              lable="Species List"
              items={SPECIES_LISTS}
              value={speciesList}
              isRequired={true}
              setValue={setSpeciesList}
              zIndex={973}
              zIndexInverse={999}
            />
            <AncillaryFieldsView
              items={selectedAncillaryFieldsList}
              onPress={onAncillaryFiedsPress}
            />
          </View>
          <ThemeButton
            title="Check GPS"
            style={[
              styles.gpsButton,
              {
                backgroundColor:
                  gpsButtonStatus === 'pending'
                    ? colors.yellow
                    : gpsButtonStatus === 'error'
                    ? colors.red
                    : colors.green,
              },
            ]}
            onPress={onGPSButtonPress}
          />
          <View style={styles.buttonContaimer}>
            <ThemeButton
              title="Start Transect"
              disabled={startTransectDisabled}
              style={styles.gpsButton}
              onPress={onStartTransectPress}
            />
            <ThemeButton
              mode={'outlined'}
              title="Clear"
              style={styles.gpsButton}
              onPress={onClearPress}
            />
          </View>
        </KeyboardAwareScrollView>
        <Popup
          visible={showNewObserverPopup}
          onRequestClose={() => setShowNewObserverPopup(false)}
          title="New Observer">
          <NewObserver onRequestClose={() => setShowNewObserverPopup(false)} />
        </Popup>
        <Popup
          visible={showSurveyPlatformPopup}
          onRequestClose={() => setShowSurveyPlatformPopup(false)}
          title="New Survey Platform">
          <NewSurveyPlatform
            onRequestClose={() => setShowSurveyPlatformPopup(false)}
            onSaveSurveryPlatform={setSurveyPlatform}
          />
        </Popup>
      </View>
      {checkingGPS ? (
        <View style={styles.gpsLoadingOverlay}>
          <View style={styles.testingGPSContainer}>
            <Text style={styles.testingGPSText}>Testing GPS...</Text>
          </View>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default NewSurvey;
