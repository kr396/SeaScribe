import React, { useState } from 'react';
import { Button, Modal, StyleSheet, View } from 'react-native';
import ColorPicker, { Panel1, Swatches, Preview, OpacitySlider, HueSlider } from 'reanimated-color-picker';

export default function App() {
  const [showModal, setShowModal] = useState(false);

  // Define onSelectColor as a worklet function
  const onSelectColor = (color) => {
    'worklet';
    // Extract hex color from the color object
    const hex = color.hex();
    // do something with the selected color.
    console.log(hex);
  };

  return (
    <View style={styles.container}>
      <Button title='Color Picker' onPress={() => setShowModal(true)} />

      <Modal visible={showModal} animationType='slide'>
        <ColorPicker style={{ width: '70%' }} value='red' onComplete={onSelectColor}>
          <Preview />
          <Panel1 />
          <HueSlider />
          <OpacitySlider />
          <Swatches />
        </ColorPicker>

        <Button title='Ok' onPress={() => setShowModal(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
