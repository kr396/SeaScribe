import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {FC} from 'react';
import styles from './styles';
import {images} from '../../constants/images';
import {RootStackScreenProps} from '../../navigation/types';

const Tools: FC<RootStackScreenProps<'Tools'>> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.parent}>
        <View style={[styles.parentView, styles.parents]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('IllustratedBeaufortScale')}>
            <Text style={styles.content}>Illustrated Beaufort Scale</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.parentView, styles.parents]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('DistanceEstimationGuide')}>
            <Text style={styles.content}>Distance Estimation Guide</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.parentView, styles.parents]}>
          <TouchableOpacity onPress={() => navigation.navigate('ManageData')}>
            <Text style={styles.content}>Manage Data</Text>
            <View style={styles.rightArrowParent}>
              <Image source={images.rightArrow} style={styles.rightArrow} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.parentView, styles.parents]}>
          <Text style={styles.content}>Offline Maps</Text>
        </View>
        <View style={styles.parentView}>
          <Text style={styles.content}>GPS Tests</Text>
        </View>
      </View>
    </View>
  );
};

export default Tools;
