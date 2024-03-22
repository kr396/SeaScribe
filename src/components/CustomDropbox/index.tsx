import React, {FC, useState} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  StyleProp,
  TextStyle,
} from 'react-native';
import {ThemeButton} from '../../components';
import {colors} from '../../constants';
import DropboxModelStep1 from './DropboxModelSetp1';
interface DropboxModel {
  visible: boolean;
  titleStyle?: StyleProp<TextStyle>;
  onConfirm: () => void;
  onCancel: () => void;
}

const DropboxModel: React.FC<DropboxModel> = ({
  visible,
  onCancel,
  titleStyle,
}) => {
  const [step1Visible, setStep1Visible] = useState(false);

  const handleNextPress = () => {
    setStep1Visible(true);
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onCancel}>
      <View style={styles.container}>
        <View style={styles.contentParent}>
          <Text style={[styles.title, titleStyle]}>Detach from Dropbox</Text>
          <View>
            <Text style={styles.label}>
              Detaching this device from Dropbox is a 2-step process. The steps
              are:
            </Text>
            <Text style={styles.text}>
              1 Disassociating this application from the Dropbox account via a
              web browser.
            </Text>
            <Text style={styles.text}>
              2 Logging out of Dropbox via this application.
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
      {step1Visible && (
        <DropboxModelStep1
          visible={true}
          onCancel={() => setStep1Visible(false)}
          title="Step 1"
          message="Step 1 message"
          onConfirm={() => {}}
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
    backgroundColor: colors.black05,
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
    height: 300,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.black,
    marginBottom: 10,
  },
  content: {
    marginTop: 10,
    borderWidth: 1,
    height: 45,
    width: 280,
    borderColor: colors.offWhite,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
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

export default DropboxModel;
