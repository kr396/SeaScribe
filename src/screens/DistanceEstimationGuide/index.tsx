import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';
import {ThemeButton} from '../../components';

const DistanceEstimationGuide = () => {
  return (
    <View style={styles.container}>
      <View style={styles.parents}>
        <Text style={styles.parentsText}>
          Distance between observer's eye and ruler when observer's arm is fully
          outstretched (m)
        </Text>
        <TextInput style={styles.inputText} />
      </View>
      <View style={styles.parents}>
        <Text style={styles.parentsText}>
          Height of observer's eye above water at observation point (m)
        </Text>
        <TextInput style={styles.inputText} />
      </View>
      <View style={styles.parents}>
        <Text style={styles.parentsText}>
          Distance to be estimated (m, can be a comma-delimited list)
        </Text>
        <TextInput style={styles.inputText} />
      </View>
      <View style={styles.buttonParent}>
        <ThemeButton title="Calculate" style={styles.buttonCalculate} />
        <ThemeButton
          mode={'outlined'}
          title="Clear"
          style={styles.buttonClear}
        />
      </View>
    </View>
  );
};

export default DistanceEstimationGuide;
