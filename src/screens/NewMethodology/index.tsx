import {View, ScrollView} from 'react-native';
import React, {FC, useMemo, useState} from 'react';

import styles from './styles';
import {DropDown, InputText, ThemeButton} from '../../components';
import {TRANSACT_TYPES} from '../../data/transectType';
import {COUNTING_METHODOLOGIES, COUNTING_PERFORMED_ON} from '../../data';
import AncillaryFieldsView from '../../components/AncillaryFieldsView';
import {RootStackScreenProps} from '../../navigation/types';
import {useAppDispatch, useAppSelector} from '../../store';
import {getSelectedAncillaryFields} from '../../store/slices/surveySlice';
import {addNewMethodology} from '../../store/slices/appSlice';
import {Methodology} from '../../types';

const NewMethodology: FC<RootStackScreenProps<'NewMethodology'>> = ({
  navigation,
}) => {
  const dispatch = useAppDispatch();
  const selectedAncillaryFields = useAppSelector(getSelectedAncillaryFields);
  const [methodologyName, setMethodologyName] = useState('');
  const [transectType, setTransectType] = useState(null);
  const [countingMethodology, setCountingMethodology] = useState(null);
  const [countingPerformedOn, setCountingPerformedOn] = useState(null);
  const saveDisabled = useMemo(
    () =>
      !methodologyName ||
      transectType === null ||
      countingMethodology === null ||
      countingPerformedOn === null,
    [methodologyName, transectType, countingMethodology, countingPerformedOn],
  );

  const onClearPress = () => {
    setMethodologyName('');
    setTransectType(null);
    setCountingMethodology(null);
    setCountingPerformedOn(null);
  };

  const onAncillaryFieldsPress = () => {
    navigation.navigate('AncillaryFileds');
  };

  const onSavePress = () => {
    const methodology: Methodology = {
      id: Date.now(),
      created: new Date(),
      label: methodologyName,
      transectTypeId: transectType!,
      countingMethodologyId: countingMethodology!,
      countingPerformedOnId: countingPerformedOn!,
    };
    dispatch(addNewMethodology(methodology));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <InputText
            lable="Methodology Name"
            inputProps={{
              value: methodologyName,
              onChangeText: setMethodologyName,
              maxLength: 100,
            }}
            isRequired={true}
          />
          <DropDown
            lable="Transect Type"
            value={transectType}
            setValue={setTransectType}
            items={TRANSACT_TYPES}
            isRequired={true}
            zIndex={999}
          />
          <DropDown
            lable="Counting Methodology"
            value={countingMethodology}
            setValue={setCountingMethodology}
            items={COUNTING_METHODOLOGIES}
            isRequired={true}
            zIndex={998}
          />
          <DropDown
            lable="Counting Performed On"
            value={countingPerformedOn}
            setValue={setCountingPerformedOn}
            items={COUNTING_PERFORMED_ON}
            isRequired={true}
            zIndex={997}
          />
          <AncillaryFieldsView
            items={selectedAncillaryFields}
            onPress={onAncillaryFieldsPress}
          />
        </View>

        <View style={styles.buttonContainer}>
          <ThemeButton
            title="Save"
            style={styles.buttonStyle}
            disabled={saveDisabled}
            onPress={onSavePress}
          />
          <ThemeButton
            title="Clear"
            mode="outlined"
            style={styles.buttonStyle}
            onPress={onClearPress}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default NewMethodology;
