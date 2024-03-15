import {Modal, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ThemeButton} from '..';
import ColorPicker, {
  Preview,
  Swatches,
  returnedResults,
} from 'reanimated-color-picker';

type Props = {
  visible: boolean;
  value: string;
  onRequestClose: () => void;
  onSelectColor?: (color: string) => void;
};

const ColorPickerModal = ({
  visible,
  value,
  onRequestClose,
  onSelectColor,
}: Props) => {
  const palette = [
    'black',
    'blue',
    'fuchsia',
    'gray',
    'green',
    'lime',
    'maroon',
    'olive',
    'orange',
    'purple',
    'red',
    'silver',
    'teal',
    'white',
    'yellow',
  ];
  const [selectedColor, setSelectedColor] = useState(value);

  const onChangeColor = ({hex}: returnedResults) => {
    setSelectedColor(hex);
  };

  const onComplete = () => {
    onSelectColor?.(selectedColor);
    onRequestClose();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <ColorPicker
            value={selectedColor}
            style={styles.colorPicker}
            onComplete={onChangeColor}>
            <Swatches colors={palette} swatchStyle={styles.swatchStyle} />
            <Preview hideInitialColor style={styles.preview} />
          </ColorPicker>
          <View style={styles.row}>
            <ThemeButton
              title="Cancel"
              mode="outlined"
              style={styles.button}
              onPress={onRequestClose}
            />
            <ThemeButton
              title="Select"
              style={styles.button}
              onPress={onComplete}
            />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default ColorPickerModal;

const styles = StyleSheet.create({
  safeArea: {flex: 1},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorPicker: {width: '60%'},
  preview: {
    marginTop: 20,
    height: 40,
  },
  swatchStyle: {
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    gap: 16,
    marginVertical: 24,
  },
  button: {
    borderRadius: 4,
  },
});
