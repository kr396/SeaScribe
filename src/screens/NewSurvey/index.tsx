import {View, Alert} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {DropDown, InputText} from '../../components';
import {OBSERVERS, REGIONS, SURVEY_MODES} from '../../data';

const NewSurvey = () => {
  const [surveyName, setsurveyName] = useState('');
  const [mode, setMode] = useState(1);
  const [numObservers, setNumObservers] = useState(1);
  const [region, setRegion] = useState(null);
  return (
    <View style={styles.container}>
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
            Alert.alert('Define route to add');
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
    </View>
  );
};

export default NewSurvey;
