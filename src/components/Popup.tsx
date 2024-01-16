import {
  Modal,
  NativeSyntheticEvent,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {ReactNode} from 'react';
import {colors} from '../constants';

type Props = {
  visible: boolean;
  title: string;
  children: ReactNode;
  onRequestClose?: (event: NativeSyntheticEvent<any>) => void;
};

const Popup = ({visible, title, children, onRequestClose}: Props) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onRequestClose}
      transparent={true}>
      <SafeAreaView style={styles.safearea}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.padder} />
            <Text style={styles.title}>{title}</Text>
            <Pressable onPress={onRequestClose} style={styles.cancelBtn}>
              <Text style={styles.cancel}>Cancel</Text>
            </Pressable>
          </View>
          <View style={styles.main}>{children}</View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default Popup;

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.black05,
  },
  container: {
    margin: '10%',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingVertical: 16,
  },
  title: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  cancelBtn: {
    width: 70,
  },
  padder: {
    width: 70,
  },
  cancel: {
    color: colors.white,
    fontSize: 20,
  },
  main: {
    backgroundColor: colors.white,
  },
});
