import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {ThemeButton, Table} from '../../components';
import {useSelector} from 'react-redux';
import {getMethodologies} from '../../store/slices/appSlice';

const EditMethodologies = () => {
  const methodologies = useSelector(getMethodologies) || [];
  const editMethodologiesHeaders = [
    {label: 'Del?', value: 'del', width: '5%'},
    {label: 'Methodology Name', value: 'label', width: '12%'},
    {label: 'TransectType', value: 'transectTypeId', width: '13%'},
    {
      label: 'Counting Methodology',
      value: 'countingMethodologyId',
      width: '20%',
    },
    {
      label: 'Counting Performed On',
      value: 'countingPerformedOnId',
      width: '21%',
    },
    {label: 'Ancillary Fields', value: 'ancillaryFields', width: '15%'},
    {label: 'Hotkey Groups', value: 'HotkeyGroups', width: '14%'}, //TODO
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Note that changing methodology ancillary fields will not change the
        ancillary fields associated with any existing survey,even if the survey
        uses the methodology in question.
      </Text>
      <ThemeButton title="Process Deletes" style={styles.deleteButton} />
      <Table headers={editMethodologiesHeaders} data={methodologies} />
    </View>
  );
};
export default EditMethodologies;
