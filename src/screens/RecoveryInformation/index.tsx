import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import styles from './styles';
import {images} from '../../constants/images';

const RecoveryInformation = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.textParent} />
        <View style={styles.textDecoration}>
          <Text style={styles.text}>
            When backing up on an Android device,you will be prompted whether to
            perform the backup to local storage or an SD card (if one is
            installed in your device).
          </Text>
        </View>
        <View style={styles.textParent} />
        <View style={styles.textDecoration}>
          <Text style={styles.text}>
            Regardless of your choice, you can access the backup files via a
            connected Windows computer using Explorer. To see your device in
            Explorer, you may have to complete a few steps first.
          </Text>
          <Text style={styles.text}>
            If you drag down the notifications bar on your device, you should
            see something like the following:
          </Text>
          <View style={styles.imageParent}>
            <Image
              source={images.recoveryandroidnotificationsbarsmall}
              style={styles.images}
            />
          </View>
          <Text style={styles.text}>
            Tap "USB charging this device," which should display a set of
            choices like the following:
          </Text>
          <View style={styles.imageParent}>
            <Image source={images.recoveryandroiduseusbtosmall} />
          </View>
          <Text style={styles.text}>
            Tap "Transfer files." On the connected Windows system, you should
            see a dialog like this:
          </Text>
          <View style={styles.imageParent}>
            <Image source={images.recoveryandroidautoplay} />
          </View>
          <Text style={styles.text}>
            Click "Open device to view files." An Explorer window should open,
            showing your device's file system. From here, you can navigate to
            the destination you selected for backups, and copy them between your
            device and your Windows system.
          </Text>
          <View style={styles.imageParent}>
            <Image source={images.recoveryandroidwindowsexplorer}/>
          </View>
        </View>
        <View style={styles.textParent} />
        <View style={styles.textDecoration}>
          <Text style={styles.text}>
            When you complete a backup operation, you'll be informed of the
            directory on the device where your backup is stored. Use this
            information to navigate in Explorer to either copy your backup off
            the device to your system, or copy a backup from your system to the
            device (to use with an eventual restore operation).
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
export default RecoveryInformation;
