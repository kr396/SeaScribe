import React from 'react';
import {ScrollView, View} from 'react-native';
import styles from './styles';
import {Table} from '../../components';
import {ThemeButton} from '../../components';
import {useSelector} from 'react-redux';
import {getAncillaryFields} from '../../store/slices/ancillaryFieldsSlice';

const EditAncillaryFields = () => {
  const ancillaryFields = useSelector(getAncillaryFields) || [];

  const editancillaryfieldsheader = [
    {label: 'Del?', value: 'del', width: '10%'},
    {label: 'Name', value: 'name', width: '12%'},
    {label: 'Frequency', value: 'frequency_id', width: '11%'},
    {label: 'Sort Order', value: 'sort_order', width: '11%'},
    {label: 'Input Control', value: 'input_control_id', width: '12%'},
    {
      label: 'Input Control Choice List',
      value: 'InputControlChoiceList', //TODO
      width: '15%',
    },
    {label: 'Min Value', value: 'min_value', width: '10%'},
    {label: 'Max Value', value: 'max_value', width: '10%'},
    {label: 'Max Length', value: 'max_length', width: '10%'},
  ];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.buttons}>
          <ThemeButton title="New" style={styles.newButton} />
          <ThemeButton title="Process Deletes" style={styles.deletesButton} />
        </View>
        <View style={styles.table}>
          <Table headers={editancillaryfieldsheader} data={ancillaryFields} />
        </View>
      </ScrollView>
    </View>
  );
};

export default EditAncillaryFields;
