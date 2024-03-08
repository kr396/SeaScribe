import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Table from '../../components/Table';
import {ThemeButton} from '../../components';

const EditAncillaryFields = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <ThemeButton title="new" style={styles.newButton} />
        <ThemeButton title="Process Deletes" style={styles.deletesButton} />
      </View>
      <View style={styles.table}>
        <Table navigation={undefined} route={undefined} />
      </View>
    </View>
  );
};
export default EditAncillaryFields;
