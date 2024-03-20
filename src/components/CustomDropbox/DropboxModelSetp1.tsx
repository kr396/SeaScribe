import React, {FC, useState} from 'react';
import {View, Text, Modal, StyleSheet} from 'react-native';
import {ThemeButton} from '../../components';
import {colors} from '../../constants';
import DropboxModelStep2 from '../../components/CustomDropbox/DropboxModelStep2';

interface DropboxModelStep1 {
  visible: boolean;
  titleStyle?: any;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const DropboxModelStep1: React.FC<DropboxModelStep1> = ({
  visible,
  onCancel,
  titleStyle,
}) => {
  const [step2Visible, setStep2Visible] = useState(false);

  const handleNextPress = () => {
    setStep2Visible(true);
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onCancel}>
      <View style={styles.container}>
        <View style={styles.contentParent}>
          <Text style={[styles.title, titleStyle]}>
            Detach from Dropbox, Step 1 of 2
          </Text>
          <View>
            <Text style={styles.label}>
              The first step must be performed in a web browser.
            </Text>
            <Text style={styles.text}>
              Connect to your Dropbox account, go to your "Settings - Connected
              apps" tab, and look for this application ("BOEMSeascribe") in the
              list under "Linked apps." Click the "X" for this application, then
              confirm by clicking "Uninstall."
            </Text>
            <Text style={styles.text}>
              When this is completed, return to this app and click "Next."
            </Text>
          </View>
          <View style={styles.buttonParent}>
            <ThemeButton
              title="Cancel"
              style={styles.themeButtonCancel}
              titleStyle={styles.buttonTitleStyle}
              onPress={onCancel}
            />
            <ThemeButton
              title="Next"
              style={styles.buttonUseSelected}
              onPress={handleNextPress}
            />
          </View>
        </View>
      </View>
      {step2Visible && (
        <DropboxModelStep2
          onCancel={() => setStep2Visible(false)}
          visible={true}
        />
      )}
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.rgba,
  },
  themeButtonCancel: {
    backgroundColor: colors.offWhite,
    borderRadius: 0,
    height: 45,
    width: 100,
    marginRight: 10,
  },
  buttonTitleStyle: {
    color: colors.black,
  },
  buttonUseSelected: {
    borderRadius: 0,
    height: 45,
    width: 150,
  },
  contentParent: {
    backgroundColor: colors.white,
    padding: 10,
    alignItems: 'center',
    width: 300,
    height: 400,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.black,
    marginBottom: 10,
  },
  label: {
    marginTop: 20,
    marginLeft: 8,
    color: colors.black,
  },
  text: {
    marginTop: 10,
    color: colors.black,
    marginLeft: 8,
  },
  buttonParent: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 25,
  },
});

export default DropboxModelStep1;
