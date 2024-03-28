import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import {ThemeButton, Table, TableHeaderItem} from '../../components';
import {useSelector} from 'react-redux';
import {getMethodologies} from '../../store/slices/appSlice';
import {scale} from '../../utils';

const EditMethodologies = () => {
  const methodologies = useSelector(getMethodologies) || [];
  const editMethodologiesHeaders: TableHeaderItem[] = [
    {label: 'Del?', value: 'del', type: 'checkbox', width: scale(50)},
    {label: 'Methodology Name', value: 'label', width: scale(120)},
    {label: 'TransectType', value: 'transectTypeId', width: scale(100)},
    {
      label: 'Counting Methodology',
      value: 'countingMethodologyId',
      width: scale(150),
    },
    {
      label: 'Counting Performed On',
      value: 'countingPerformedOnId',
      width: scale(150),
    },
    {label: 'Ancillary Fields', value: 'ancillaryFields', width: scale(150)},
    {label: 'Hotkey Groups', value: 'HotkeyGroups', width: scale(150)}, //TODO
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.text}>
          Note that changing methodology ancillary fields will not change the
          ancillary fields associated with any existing survey,even if the
          survey uses the methodology in question.
        </Text>
        <ThemeButton title="Process Deletes" style={styles.deleteButton} />
        <Table headers={editMethodologiesHeaders} data={methodologies} />
      </View>
    </SafeAreaView>
  );
};
export default EditMethodologies;
