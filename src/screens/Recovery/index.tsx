import React, {FC} from 'react';
import {View, Text, Alert} from 'react-native';
import styles from './styles';
import {RootStackScreenProps} from '../../navigation/types';

const Recovery: FC<RootStackScreenProps<'Recovery'>> = ({navigation}) => {
  const handleBackupPress = () => {
    Alert.alert(
      'Confirmation Required',
      'Performing a full application backup may take some time.are you sure?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {},
        },
      ],
      {cancelable: false},
    );
  };

  const handleRestorePress = () => {
    Alert.alert(
      'Select Location Where Backup Was Performed',
      '',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {},
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.textDecoration}>
        <Text style={styles.text}>
          Please note that SeaScribe's recovery features backup to and restore
          from the local device only. If you wish to copy backups from or to
          this device, further steps may be required. These steps vary by
          operating system on the device.
        </Text>
        <View style={styles.textParent}>
          <Text style={styles.texts}>
            Further information relevant to the operating system on this device
            can be found{' '}
            <Text
              style={styles.textHere}
              onPress={() => navigation.navigate('RecoveryInformation')}>
              here.
            </Text>
          </Text>
        </View>
      </View>
      <View style={styles.parents}>
        <View style={[styles.backupRestoreParent, styles.margeBorder]}>
          <Text style={styles.backupRestore} onPress={handleBackupPress}>
            Backup
          </Text>
        </View>
        <View style={styles.backupRestoreParent}>
          <Text style={styles.backupRestore} onPress={handleRestorePress}>
            Restore
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Recovery;
