import React, {FC, useState} from 'react';
import {Button, Pressable, StyleSheet, Text, View} from 'react-native';

import ColorPickerModal from './ColorPickerModal';
import {colorKit} from 'reanimated-color-picker';
import {colors} from '../../constants';

type Props = {
  value: string;
  title: string;
  onSelectColor: (colors: string) => void;
};

export const CustomColorPicker: FC<Props> = ({value, title, onSelectColor}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Pressable style={styles.container} onPress={() => setShowModal(true)}>
        <Text style={styles.titleStyle}>{title}</Text>
        <View style={[styles.colorBox, {backgroundColor: value}]}></View>
      </Pressable>
      {showModal && (
        <ColorPickerModal
          visible={showModal}
          value={value}
          onRequestClose={() => setShowModal(false)}
          onSelectColor={onSelectColor}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    padding: 8,
  },
  colorBox: {
    height: 24,
    width: 36,
  },
  titleStyle: {
    flex: 1,
    color: colors.black,
  },
});
