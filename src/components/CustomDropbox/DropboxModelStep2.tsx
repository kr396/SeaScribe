import React, {FC, useState} from 'react';
import {View, Text, Modal, StyleSheet} from 'react-native';
import {ThemeButton} from '../../components';
import {colors} from '../../constants';

interface DropboxModelStep2 {
  visible: boolean;
  titleStyle?: any;
  onCancel: () => void;
}

const DropboxModelStep2: React.FC<DropboxModelStep2> = ({
  visible,
  onCancel,
  titleStyle,
}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onCancel}>
      <View style={styles.container}>
        <View style={styles.contentParent}>
          <Text style={[styles.title, titleStyle]}>
            Detach from Dropbox, Step 2 of 2
          </Text>
          <View>
            <Text style={styles.label}>
              Now that you\'ve detached the application from your Dropbox
              account, click the "Next" button, below, to bring up the Dropbox
              authorization screen.
            </Text>
            <Text style={styles.text}>
              In the upper-right, touch your name, then select "Sign out" from
              the menu.
            </Text>
            <Text style={styles.text}>
              Finally, click the "X" in the upper-right to close the Dropbox
              authorization screen and complete this process.
            </Text>
          </View>
          <View style={styles.buttonParent}>
            <ThemeButton
              title="Cancel"
              style={styles.themeButtonCancel}
              titleStyle={styles.buttonTitleStyle}
              onPress={onCancel}
            />
            <ThemeButton title="Next" style={styles.buttonUseSelected} />
          </View>
        </View>
      </View>
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
export default DropboxModelStep2;
