import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
const RecoveryInformation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textParent} />
      <View style={styles.textDecoration}>
        <Text style={styles.text}>
          When backing up on an Android device,you will be prompted whether to
          perform the backup to local storage or an SD card (if one is installed
          in your device).
        </Text>
      </View>
      <View style={styles.textParent} />
      <View style={styles.textDecoration}>
        <Text style={styles.text}>
          Regardless of your choice, you can access the backup files via a
          connected Windows computer using Explorer,To see your device in
          Explorer you may have to complete a few steps first.
          {/* todo */}
        </Text>
      </View>
      <View style={styles.textParent} />
      <View style={styles.textDecoration}>
        <Text style={styles.text}>
          {/* todo */}
        </Text>
      </View>
    </View>
  );
};
export default RecoveryInformation;
