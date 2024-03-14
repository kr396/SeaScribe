import {View, Text} from 'react-native';
import styles from './styles';
import {ThemeButton, Table} from '../../components';

const EditMethodologies = () => {
  const editobserversheader = [
    {label: 'Del?', value: 'Del', width: '5%'},
    {label: 'Methodology Name', value: 'MethodologyName', width: '12%'},
    {label: 'TransectType', value: 'TransectType', width: '13%'},
    {label: 'Counting Methodology', value: 'CountingMethodology', width: '20%'},
    {
      label: 'Counting Performed On',
      value: 'CountingPerformedOn',
      width: '21%',
    },
    {label: 'Ancillary Fields', value: 'AncillaryFields', width: '15%'},
    {label: 'Hotkey Groups', value: 'HotkeyGroups', width: '14%'},
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
    <View style={styles.container}>
      <Text style={styles.text}>
        Note that changing methodology ancillary fields will not change the
        ancillary fields associated with any existing survey,even if the survey
        uses the methodology in question.
      </Text>
      <View style={styles.buttonParent}>
        <ThemeButton title="Process Deletes" style={styles.deleteButton} />
      </View>
      <Table
        headers={editobserversheader}
        data={editancillaryfieldsdata.map((item, index) => ({
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
  );
};
export default EditMethodologies;
