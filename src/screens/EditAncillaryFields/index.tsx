import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Table} from '../../components';
import {ThemeButton} from '../../components';
import {useSelector} from 'react-redux';
import {getAncillaryFields} from '../../store/slices/ancillaryFieldsSlice';

const EditAncillaryFields = () => {
  const ancillaryFields = useSelector(getAncillaryFields) || [];

  const editancillaryfieldsheader = [
    {label: 'Del?', value: 'id', width: '10%'},
    {label: 'Name', value: 'name', width: '12%'},
    {label: 'Frequency', value: 'Frequency', width: '11%'},
    {label: 'Sort Order', value: 'SortOrder', width: '11%'},
    {label: 'Input Control', value: 'InputControl', width: '12%'},
    {
      label: 'Input Control Choice List',
      value: 'InputControlChoiceList',
      width: '15%',
    },
    {label: 'Min Value', value: 'MinValue', width: '10%'},
    {label: 'Max Value', value: 'MaxValue', width: '10%'},
    {label: 'Max Leng...', value: 'MaxLeng', width: '10%'},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <ThemeButton title="New" style={styles.newButton} />
        <ThemeButton title="Process Deletes" style={styles.deletesButton} />
      </View>
      <View style={styles.table}>
        <Table
          headers={editancillaryfieldsheader}
          data={ancillaryFields.map((item, index) => ({
            id: index.toString(),
            name: item.name || '',
            Frequency: item.frequency_id || '',
            SortOrder: item.sort_order || '',
            InputControl: item.input_control_id || '',
            InputControlChoiceList: item.InputControlChoiceList || '',
            MinValue: item.min_value || '',
            MaxValue: item.max_value || '',
            MaxLeng: item.MaxLeng || '',
          }))}
        />
      </View>
    </View>
  );
};

export default EditAncillaryFields;
