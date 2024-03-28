import {View, Text} from 'react-native';
import React from 'react';
import {Table, TableHeaderItem, ThemeButton} from '../../components';
import styles from './styles';
import {useAppSelector} from '../../store';
import {getSurveys} from '../../store/slices/surveySlice';
import {scale} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';

const ExistingSurveys = () => {
  const surveys = useAppSelector(getSurveys);
  const tableHeaders: TableHeaderItem[] = [
    {
      label: 'ID',
      value: 'id',
      width: scale(100),
    },
    {
      label: 'Survey',
      value: 'name',
      width: scale(100),
    },
    {
      label: 'Methodology',
      value: 'methodologyId',
      width: scale(100),
    },
  ];
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* <Text style={styles.boldText}>Select a Survey:</Text> */}
        <View>
          <Table headers={tableHeaders} data={surveys} />
        </View>
        <View style={styles.buttonParent}>
          <ThemeButton title="Start New Transect" />
          <ThemeButton title="Resume Most Recent Transect" />
          <ThemeButton title="Generate Report" />
          <ThemeButton title="Submit" />
          <ThemeButton title="Delete" style={styles.deleteButton} />
        </View>
        <View style={styles.buttonParent}>
          <Text style={styles.boldText}>
            or Select a Transect from the Chosen Survey:
          </Text>
          <View style={styles.buttonParent}>
            <ThemeButton title="Resume Selected Transect" />
            <ThemeButton title="Generate Report" />
            <ThemeButton title="Open Data Editor" />
            <ThemeButton title="Delete" style={styles.deleteButton} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ExistingSurveys;
