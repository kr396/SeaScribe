import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {ThemeButton, Table} from '../../components';
import {useSelector} from 'react-redux';
import {getObservers} from '../../store/slices/appSlice';

const EditObservers = () => {
  const observers = useSelector(getObservers) || [];
  const editObserversHeader = [
    {label: 'Del?', value: 'del', width: '9%'},
    {label: 'First Name', value: 'firstName', width: '9%'},
    {label: 'Last Name', value: 'lastName', width: '9%'},
    {label: 'Affiliation', value: 'affiliation', width: '10%'},
    {label: 'Address1', value: 'address1', width: '9%'},
    {label: 'Address2', value: 'address2', width: '9%'},
    {label: 'City', value: 'city', width: '9%'},
    {label: 'State', value: 'state', width: '9%'},
    {label: 'Zip', value: 'zip', width: '9%'},
    {label: 'Phone', value: 'phone', width: '9%'},
    {label: 'Email', value: 'email', width: '9%'},
  ];
  return (
    <View style={styles.container}>
      <ThemeButton title="Process Deletes" style={styles.deletesButton} />
      <Table headers={editObserversHeader} data={observers} />
    </View>
  );
};
export default EditObservers;
