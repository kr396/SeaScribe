import React, {FC, useState} from 'react';
import {View, Text, Modal, StyleSheet} from 'react-native';
import {ThemeButton} from '../components';
import {colors} from '../constants';
import CheckBox from '@react-native-community/checkbox';

interface CustomPopupProps {
  visible: boolean;
  onCancel: () => void;
  titleStyle?: any;
  title: string;
  message: string;
  onConfirm: () => void;
}

export const CustomPopup: React.FC<CustomPopupProps> = ({
  visible,
  onCancel,
  titleStyle,
  title,
  message,
  onConfirm,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onCancel}>
      <View style={styles.container}>
        <View style={styles.contentParent}>
          <Text style={[styles.title, titleStyle]}>{title}</Text>
          <View style={styles.content}>
            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isSelected}
                onValueChange={setIsSelected}
                tintColors={{true: 'blue'}}
                style={styles.checkbox}
              />
              <Text style={styles.label}>{message}</Text>
            </View>
          </View>
          <View style={styles.buttonParent}>
            <ThemeButton
              title="Cancel"
              style={styles.themeButtonCancel}
              titleStyle={styles.buttonTitleStyle}
              onPress={onCancel}
            />
            <ThemeButton
              title="Use Selected"
              style={styles.buttonUseSelected}
              onPress={onConfirm}
            />
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
    backgroundColor: 'rgba(0,0,0,0.5)',
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
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.black,
    marginBottom: 10, // Add margin bottom for spacing
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
  },
  buttonParent: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 25,
  },
});
