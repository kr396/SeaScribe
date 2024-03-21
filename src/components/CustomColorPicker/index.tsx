import React, {FC, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import ColorPickerModal from './ColorPickerModal';
import {colors} from '../../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
        <View style={styles.colorBoxParent}>
          <View
            style={[
              styles.colorBox,
              {backgroundColor: value || defaultColor},
            ]}></View>
          <Icon
            name="arrow-drop-down"
            size={24}
            color="black"
            style={styles.arrowDown}
          />
        </View>
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
    alignSelf: 'center',
    height: 22,
    width: 36,
    borderWidth: 1,
  },
  titleStyle: {
    flex: 1,
    color: colors.black,
  },
  arrowDown: {
    marginTop: 5,
  },
  colorBoxParent: {
    height: 34,
    width: 66,
    backgroundColor: colors.offWhite,
    borderWidth: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 5,
    flexDirection: 'row',
    borderColor: colors.lightgrey,
  },
});
