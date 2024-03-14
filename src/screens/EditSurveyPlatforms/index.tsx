import {View, ScrollView} from 'react-native';
import styles from './styles';
import {Table, ThemeButton} from '../../components';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
const EditSurveyPlatforms = () => {
  const [outputDeg, setOutputDeg] = useState([]);
  const editsurveyplatformsheader = [
    {label: 'Del?', value: 'Del', width: '20%'},
    {label: 'Name', value: 'name', width: '30%'},
    {label: 'Type', value: 'type', width: '50%'},
  ];

  const editancillaryfieldsdata = [
    {
      Del: '',
      Name: 'Association ',
      Type: 'Each Observation ',
    },
    {
      Del: '',
      Name: 'Association ',
      Type: 'Each Observation ',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <ThemeButton title="Process Deletes" style={styles.deletesButton} />
        <Table
          headers={editsurveyplatformsheader}
          data={editancillaryfieldsdata.map((item, index) => ({
            Del: item.Del,
            name: item.Name,
            type: item.Type,
          }))}
        />
      </ScrollView>
    </View>
  );
};

export default EditSurveyPlatforms;
