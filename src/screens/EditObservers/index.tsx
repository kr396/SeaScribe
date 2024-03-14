import {View, Text} from 'react-native';
import styles from './styles';
import {ThemeButton, Table} from '../../components';

const EditObservers = () => {
  const editobserversheader = [
    {label: 'Del?', value: 'Del', width: '9%'},
    {label: 'First Name', value: 'FirstName', width: '9%'},
    {label: 'Last Name', value: 'LastName', width: '9%'},
    {label: 'Affiliation', value: 'Affiliation', width: '10%'},
    {label: 'Address1', value: 'Address1', width: '9%'},
    {label: 'Address2', value: 'Address2', width: '9%'},
    {label: 'City', value: 'City', width: '9%'},
    {label: 'State', value: 'State', width: '9%'},
    {label: 'Zip', value: 'Zip', width: '9%'},
    {label: 'Phone', value: 'Phone', width: '9%'},
    {label: 'Email', value: 'Email', width: '9%'},
  ];
  const editancillaryfieldsdata = [
    {
      Del: '',
      FirstName: 'Association ',
      LastName: 'Each Observation ',
      Affiliation: '1',
      Address1: 'Select (from a list of choices) 1',
      Address2: 'data ',
      City: '',
      State: '',
      Zip: '',
      Phone: '',
      Email: '',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <ThemeButton title="Process Deletes" style={styles.deletesButton} />
        <Table
          headers={editobserversheader}
          data={editancillaryfieldsdata.map((item, index) => ({
            Del: item.Del,
            FirstName: item.FirstName,
            LastName: item.LastName,
          }))}
        />
      </View>
    </View>
  );
};
export default EditObservers;
