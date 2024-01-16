import {StyleSheet, View} from 'react-native';
import React from 'react';
import {DropDown, InputText} from '.';

export const NewAncillaryField = () => {
  return (
    <View style={styles.container}>
      <InputText lable="Field Name" isRequired />
      <DropDown lable="Frequency" isRequired items={[]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    gap: 8,
  },
});
