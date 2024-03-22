import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC, useState} from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-crop-picker';

import {ThemeButton} from '../../../components';
import {colors} from '../../../constants';
import {scale} from '../../../utils';
import {useNavigation} from '@react-navigation/native';
import Popup from '../../../components/CustomPopup';

type Props = {
  onSavePress: () => void;
  onClearPress: () => void;
};

export const ActionContainer: FC<Props> = () => {
  const navigation = useNavigation();
  const [showRecordingPopup, setShowRecordingPopup] = useState(false);

  const onCameraPress = () => {
    ImagePicker.openCamera({
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };

  const onMicPress = () => {
    setShowRecordingPopup(true);
  };

  const closeRecordingModel = () => {
    setShowRecordingPopup(false);
  };

  return (
    <View style={styles.container}>
      <ThemeButton title="Save" style={styles.buttonStyle} />
      <ThemeButton mode="outlined" title="Clear" style={styles.buttonStyle} />
      <Pressable style={styles.cameraButton} onPress={onCameraPress}>
        <Icon name="camera" size={20} color={colors.davyGrey} />
      </Pressable>
      <Pressable style={styles.micButton} onPress={onMicPress}>
        <FontAwesomeIcon name="microphone" size={20} color={colors.white} />
      </Pressable>
      <ThemeButton
        title="Stop"
        style={[styles.buttonStyle, {backgroundColor: colors.red}]}
      />
      <Modal
        visible={showRecordingPopup}
        onRequestClose={closeRecordingModel}
        transparent>
        <View style={styles.recordingPopup}>
          <View style={styles.recordingContent}>
            <Text
              style={{
                alignSelf: 'center',
                color: colors.black,
                fontSize: 16,
                fontWeight: 'bold',
                marginBottom: 16,
              }}>
              Recording
            </Text>
            <Text style={styles.description}>Audio recording in progress.</Text>
            <View style={styles.audioButtonRow}>
              <ThemeButton
                title="Cancel"
                mode="outlined"
                onPress={closeRecordingModel}
                style={styles.audioButtons}
              />
              <ThemeButton title="Stop" style={styles.audioButtons} />
              <ThemeButton
                title="Stop & Save Audio Obs"
                style={[styles.audioButtons, {backgroundColor: colors.yellow}]}
                titleStyle={{textAlign: 'center'}}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  buttonStyle: {
    borderRadius: 4,
  },
  cameraButton: {
    height: scale(40),
    width: scale(42),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 4,
  },
  micButton: {
    height: scale(40),
    width: scale(42),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
  },
  audioButtons: {
    flex: 1,
    height: undefined,
    borderRadius: 4,
  },
  recordingPopup: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.black05,
  },
  recordingContent: {
    backgroundColor: colors.white,
    margin: '10%',
    padding: 16,
  },
  audioButtonRow: {
    flexDirection: 'row',
    gap: 4,
    marginTop: 16,
  },
  description: {
    color: colors.black,
  },
});
