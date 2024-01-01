import {View, Alert} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {DropDown, InputText} from '../../components';
import {OBSERVERS, SURVEY_MODES} from '../../data';

const NewSurvey = () => {
  const [surveyName, setsurveyName] = useState('');
  const [mode, setMode] = useState(1);
  const [numObservers, setNumObservers] = useState(1);
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
          onAddPress={() => {
            Alert.alert('Define route to add');
          }}
        />
      </View>
    </View>
  );
};

export default NewSurvey;
