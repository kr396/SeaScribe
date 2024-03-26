import React from 'React';
import {View} from 'react-native';
import styles from './styles';
import {Table, ThemeButton} from '../../components';
import {useSelector} from 'react-redux';
import {getSurveyPlatforms} from '../../store/slices/appSlice';

const EditSurveyPlatforms = () => {
  const surveyPlatforms = useSelector(getSurveyPlatforms) || [];
  const editsurveyplatformsheader = [
    {label: 'Del?', value: 'del', width: '30%'},
    {label: 'Name', value: 'label', width: '38%'},
    {label: 'Type', value: 'surveyPlatformTypeId', width: '32%'},
  ];
  return (
    <View style={styles.container}>
      <ThemeButton title="Process Deletes" style={styles.deletesButton} />
      <Table headers={editsurveyplatformsheader} data={surveyPlatforms} />
    </View>
  );
};

export default EditSurveyPlatforms;
