import {Modal, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {FC, useState} from 'react';
import {colors} from '../constants';
import {ThemeButton} from '.';

type Props = {
  visible: boolean;
  title: string;
  description: string;
  onRequestClose: () => void;
  onSavePress?: (text: string) => void;
};

export const Prompt: FC<Props> = ({
  visible,
  title,
  onRequestClose,
  onSavePress,
}) => {
  const [methodologyName, setMethodologyName] = useState('');

  const onPressSave = () => {
    onSavePress?.(methodologyName);
  };

  return (
    <Modal
      visible={visible}
      onRequestClose={onRequestClose}
      transparent={true}
      animationType="slide">
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Enter New Methodology Name</Text>
          <Text style={styles.desc}>
            Because you've changed the ancillary fields for a methodology, a new
            methodology must be created.
          </Text>
          <TextInput
            value={methodologyName}
            onChangeText={setMethodologyName}
            style={styles.input}
          />
          <View style={styles.row}>
            <ThemeButton
              title="Save"
              onPress={onPressSave}
              style={styles.button}
            />
            <ThemeButton
              mode="clear"
              title="Cancel"
              onPress={onRequestClose}
              style={styles.button}
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
    backgroundColor: colors.black05,
  },
  content: {
    margin: '10%',
    padding: 16,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  desc: {
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    gap: 16,
  },
  button: {
    flex: 1,
    borderRadius: 0,
  },
  input: {
    height: 40,
    backgroundColor: colors.offWhite,
    marginBottom: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
});
