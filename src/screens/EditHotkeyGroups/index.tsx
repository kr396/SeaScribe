import React from 'react';
import {SafeAreaView, View} from 'react-native';
import styles from './styles';
import {ThemeButton, Table, TableHeaderItem} from '../../components';

const EditHotkeyGroups = () => {
  const edithotkeygroupsheader: TableHeaderItem[] = [
    {label: 'Del?', value: 'del', type: 'checkbox', width: '10%'},
    {label: 'Name', value: 'MethodologyName', width: '20%'},
    {label: 'Applies To Field', value: 'TransectType', width: '17%'},
    {label: 'Contains [N] Hotkeys', value: 'CountingMethodology', width: '20%'},
    {label: 'Color', value: 'CountingPerformedOn', width: '19%'},
    {label: 'Sort Oder', value: 'AncillaryFields', width: '14%'},
  ];
  const editancillaryfieldsdata = [
    {
      Del: '',
      MethodologyName: 'Association ',
      TransectType: 'Each Observation ',
      CountingMethodology: '1',
      CountingPerformedOn: 'Select (from a list of choices) 1',
      AncillaryFields: 'data ',
      HotkeyGroups: '',
    },
  ];
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.buttons}>
          <ThemeButton title="New" />
          <ThemeButton title="Process Deletes" style={styles.deletesButton} />
        </View>
        <Table
          headers={edithotkeygroupsheader}
          data={editancillaryfieldsdata.map(item => ({
            Del: item.Del,
            MethodologyName: item.MethodologyName,
            TransectType: item.TransectType,
            CountingMethodology: item.CountingMethodology,
            CountingPerformedOn: item.CountingPerformedOn,
            AncillaryFields: item.AncillaryFields,
            HotkeyGroups: item.HotkeyGroups,
          }))}
        />
      </View>
    </SafeAreaView>
  );
};
export default EditHotkeyGroups;
