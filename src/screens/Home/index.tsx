import {Image, View} from 'react-native';
import React, {FC} from 'react';

import {ThemeButton} from '../../components';
import {images} from '../../constants/images';
import {RootStackScreenProps} from '../../navigation/types';
import {useStyles} from 'react-native-unistyles';
import stylesheet from './styles';
import DeviceInfo from 'react-native-device-info';

const Home: FC<RootStackScreenProps<'Home'>> = ({navigation}) => {
  const {styles} = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <ThemeButton
          title="Start New Survey"
          onPress={() => {
            navigation.navigate('NewSurvey');
          }}
          style={styles.buttonStyle}
        />
        <ThemeButton
          title="Existing Surveys"
          onPress={() => {
            navigation.navigate('ExistingSurveys');
          }}
          style={styles.buttonStyle}
        />
        <ThemeButton
          title="Settings"
          onPress={() => {
            navigation.navigate('Settings');
          }}
          style={styles.buttonStyle}
        />
        <ThemeButton
          title="Tools"
          onPress={() => {
            navigation.navigate('Tools');
          }}
          style={styles.buttonStyle}
        />
      </View>
      {DeviceInfo.getDeviceType() === 'Tablet' && (
        <Image source={images.main} style={styles.image} />
      )}
    </View>
  );
};

export default Home;
