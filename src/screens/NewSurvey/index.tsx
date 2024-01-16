import {View, Alert, Button} from 'react-native';
import React, {FC, useState} from 'react';
import styles from './styles';
import {
  DropDown,
  InputText,
  NewAncillaryField,
  NewObserver,
} from '../../components';
import {OBSERVERS, REGIONS, SURVEY_MODES} from '../../data';
import Popup from '../../components/Popup';
import {RootStackScreenProps} from '../../navigation/types';

const NewSurvey: FC<RootStackScreenProps<'NewSurvey'>> = ({navigation}) => {
  const [surveyName, setsurveyName] = useState('');
  const [mode, setMode] = useState(1);
  const [numObservers, setNumObservers] = useState(1);
  const [region, setRegion] = useState(null);
  const [newObserverPopupVisible, setNewObserverPopupVisible] = useState(false);
  const [showNewAncillaryModal, setShowNewAncillaryModal] = useState(false);
  return (
    <View style={styles.container}>
      <Button onPress={() => setShowNewAncillaryModal(true)} title="show" />
      <View style={styles.content}>
        <InputText
          lable="Survey Name"
          isRequired={true}
          inputProps={{value: surveyName, onChangeText: setsurveyName}}
        />
        <DropDown
          lable="Mode"
          items={SURVEY_MODES}
          value={mode}
          setValue={setMode}
          zIndex={999}
        />
        <DropDown
          lable="Methodology"
          items={[]}
          value={null}
          setValue={setMode}
          showAddButton={true}
          zIndex={998}
          onAddPress={() => {
            navigation.navigate('NewMethodology');
          }}
        />
        <DropDown
          lable="# Observers"
          items={OBSERVERS}
          value={numObservers}
          setValue={setNumObservers}
          zIndex={997}
        />
        <DropDown
          lable="Survey Platform"
          items={OBSERVERS}
          value={numObservers}
          isRequired={true}
          showAddButton={true}
          setValue={setNumObservers}
          zIndex={996}
          onAddPress={() => {
            Alert.alert('Define route to add');
          }}
        />
        <DropDown
          lable="Region"
          items={REGIONS}
          value={region}
          isRequired={true}
          setValue={setRegion}
          zIndex={995}
        />
        <DropDown
          lable="Sub-region"
          items={OBSERVERS}
          value={numObservers}
          setValue={setNumObservers}
          zIndex={994}
        />
        <DropDown
          lable="Species List"
          items={OBSERVERS}
          value={numObservers}
          isRequired={true}
          setValue={setNumObservers}
          zIndex={993}
        />
      </View>
      <Popup
        visible={newObserverPopupVisible}
        onRequestClose={() => setNewObserverPopupVisible(false)}
        title="New Observer">
        <NewObserver />
      </Popup>
      <Popup
        visible={showNewAncillaryModal}
        onRequestClose={() => setShowNewAncillaryModal(false)}
        title="New Ancillary Field">
        <NewAncillaryField />
      </Popup>
    </View>
  );
};

export default NewSurvey;
