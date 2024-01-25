import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {FC, useState} from 'react';

import {DropDown, InputText, ThemeButton} from '.';
import {SURVEY_PLATFORM_TYPES} from '../data';
import {useAppDispatch, useAppSelector} from '../store';
import {
  addNewSurveyPlatform,
  getSurveyPlatforms,
} from '../store/slices/appSlice';

type Props = {
  onRequestClose: () => void;
};

const NewSurveyPlatform: FC<Props> = ({onRequestClose}) => {
  const dispatch = useAppDispatch();
  const surveyPlatforms = useAppSelector(getSurveyPlatforms);
  const [platformName, setPlatformName] = useState('');
  const [platformType, setPlatformType] = useState(null);

  const disabled = !platformName || !platformType;

  const onClearPress = () => {
    setPlatformName('');
    setPlatformType(null);
  };

  const onSavePress = () => {
    const exists = surveyPlatforms.some(
      platform => platform.label === platformName,
    );
    if (exists) {
      Alert.alert(
        'Validation Error',
        'The Survey Platform name must be unique.',
      );
    } else {
      dispatch(
        addNewSurveyPlatform({
          value: Date.now(),
          label: platformName,
          surveyPlatformTypeId: platformType!,
        }),
      );
      onRequestClose();
    }
  };

  return (
    <View style={styles.container}>
      <InputText
        lable="Platform Name"
        isRequired={true}
        inputProps={{value: platformName, onChangeText: setPlatformName}}
      />
      <DropDown
        items={SURVEY_PLATFORM_TYPES}
        lable="Type"
        value={platformType}
        setValue={setPlatformType}
        isRequired={true}
        zIndex={999}
      />
      <View style={styles.buttonContainer}>
        <ThemeButton title="Save" disabled={disabled} onPress={onSavePress} />
        <ThemeButton title="Clear" mode="outlined" onPress={onClearPress} />
      </View>
    </View>
  );
};

export default NewSurveyPlatform;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
    marginVertical: 8,
    gap: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 8,
    marginTop: 10,
  },
});
