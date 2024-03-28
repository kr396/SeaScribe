import React from 'react';
import {SafeAreaView, View} from 'react-native';
import styles from './styles';
import {Table, TableHeaderItem} from '../../components';
import {ThemeButton} from '../../components';
import {useSelector} from 'react-redux';
import {getAncillaryFields} from '../../store/slices/ancillaryFieldsSlice';
import {scale} from '../../utils';

const EditAncillaryFields = () => {
  const ancillaryFields = useSelector(getAncillaryFields) || [];

  const editancillaryfieldsheader: TableHeaderItem[] = [
    {label: 'Del?', value: 'del', type: 'checkbox', width: scale(50)},
    {label: 'Name', value: 'name', width: scale(150)},
    {label: 'Frequency', value: 'frequency_id', width: scale(80)},
    {label: 'Sort Order', value: 'sort_order', width: scale(50)},
    {label: 'Input Control', value: 'input_control_id', width: scale(80)},
    {
      label: 'Input Control Choice List',
      value: 'InputControlChoiceList', //TODO
      width: scale(150),
    },
    {label: 'Min Value', value: 'min_value', width: scale(60)},
    {label: 'Max Value', value: 'max_value', width: scale(60)},
    {label: 'Max Length', value: 'max_length', width: scale(60)},
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.buttons}>
          <ThemeButton title="New" style={styles.newButton} />
          <ThemeButton title="Process Deletes" style={styles.deletesButton} />
        </View>
        <View style={styles.table}>
          <Table headers={editancillaryfieldsheader} data={ancillaryFields} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditAncillaryFields;
