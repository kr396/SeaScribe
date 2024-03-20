import React, {FC, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import ColorPickerModal from './ColorPickerModal';
import {colors} from '../../constants';

type Props = {
  value: string | null;
  title: string;
  onSelectColor: (colors: string) => void;
  style: any;
};

export const CustomColorPicker: FC<Props> = ({
  value,
  title,
  onSelectColor,
  style,
}) => {
  const [showModal, setShowModal] = useState(false);
  const defaultColor = '#FFFFFF';
  return (
    <>
      <Pressable
        style={[styles.container, style]}
        onPress={() => setShowModal(true)}>
        <Text style={styles.titleStyle}>{title}</Text>
        <View
          style={[
            styles.colorBox,
            {backgroundColor: value || defaultColor},
          ]}></View>
      </Pressable>
      {showModal && (
        <ColorPickerModal
          visible={showModal}
          value={value || defaultColor}
          onRequestClose={() => setShowModal(false)}
          onSelectColor={color => {
            setShowModal(false);
            onSelectColor(color);
          }}
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
