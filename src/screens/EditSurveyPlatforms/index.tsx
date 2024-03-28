import React from 'react';
import {SafeAreaView, View} from 'react-native';
import styles from './styles';
import {Table, TableHeaderItem, ThemeButton} from '../../components';
import {useSelector} from 'react-redux';
import {getSurveyPlatforms} from '../../store/slices/appSlice';
import {scale} from '../../utils';

const EditSurveyPlatforms = () => {
  const surveyPlatforms = useSelector(getSurveyPlatforms) || [];
  const editsurveyplatformsheader: TableHeaderItem[] = [
    {label: 'Del?', value: 'del', type: 'checkbox', width: scale(50)},
    {label: 'Name', value: 'label', width: scale(100)},
    {label: 'Type', value: 'surveyPlatformTypeId', width: scale(50)},
  ];
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ThemeButton title="Process Deletes" style={styles.deletesButton} />
        <Table headers={editsurveyplatformsheader} data={surveyPlatforms} />
      </View>
    </SafeAreaView>
  );
};

export default EditSurveyPlatforms;
