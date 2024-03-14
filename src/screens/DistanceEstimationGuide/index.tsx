import React, {FC, useState} from 'react';
import {View, Text, TextInput, FlatList, ScrollView} from 'react-native';
import styles from './styles';
import {Table, ThemeButton} from '../../components';
import {RootStackScreenProps} from '../../navigation/types';

const DistanceEstimationGuide: FC<
  RootStackScreenProps<'DistanceEstimationGuide'>
> = () => {
  const [inputDeg, setInputDeg] = useState({
    a: '0.73',
    h: '12.5',
    d: '50,100,200,300',
  });
  const [outputDeg, setOutputDeg] = useState([]);
  const tableHeaders = [
    {label: 'Distance To Be Estimated (m)', value: 'distanceToBeEstimated',width:'50%'},
    {label: 'Distance Below Horizon (mm)', value: 'distanceBelowHorizon',width:'50%'},
  ];

  const handleChangeA = (text: string) => {
    setInputDeg({...inputDeg, a: text.trim()});
  };

  const handleChangeH = (text: string) => {
    setInputDeg({...inputDeg, h: text.trim()});
  };

  const handleChangeD = (text: string) => {
    setInputDeg({...inputDeg, d: text.trim()});
  };

  const calculateDistanceEstimates = () => {
    const retval = [];

    const a = parseFloat(inputDeg.a);
    const h = parseFloat(inputDeg.h);
    const strDistanceArray = inputDeg.d
      .split(',')
      .map(str => parseInt(str.trim()));

    for (let i = 0; i < strDistanceArray.length; i++) {
      const d = strDistanceArray[i];

      const numeratorFactor1 = a * h * 3838 * Math.sqrt(h);
      const numeratorFactor2 = a * h * d;
      const denominatorFactor1 = h * h;
      const denominatorFactor2 = 3838 * d * Math.sqrt(h);

      const numerator = numeratorFactor1 - numeratorFactor2;
      const denominator = denominatorFactor1 + denominatorFactor2;

      const final = 1000 * (numerator / denominator);
      const rounded = Math.round(final);

      retval.push({
        distanceToBeEstimated: d,
        distanceBelowHorizon: rounded,
      });
    }

    // Sort by distanceBelowHorizon
    retval.sort((a, b) => a.distanceBelowHorizon - b.distanceBelowHorizon);

    setOutputDeg(retval);
  };

  const clearDistanceEstimates = () => {
    setInputDeg({a: '', h: '', d: ''});
    setOutputDeg([]);
  };


  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={[
            styles.parents,
            inputDeg.a.trim() ? styles.parents : styles.parentsInvalidInput,
          ]}>
          <Text style={styles.parentsText}>
            Distance between observer's eye and ruler when observer's arm is
            fully outstretched (m)
          </Text>
          <TextInput
            style={styles.inputText}
            value={inputDeg.a}
            onChangeText={handleChangeA}
          />
        </View>
        <View
          style={[
            styles.parents,
            inputDeg.h.trim() ? styles.parents : styles.parentsInvalidInput,
          ]}>
          <Text style={styles.parentsText}>
            Height of observer's eye above water at observation point (m)
          </Text>
          <TextInput
            style={styles.inputText}
            value={inputDeg.h}
            onChangeText={handleChangeH}
          />
        </View>
        <View
          style={[
            styles.parents,
            inputDeg.d ? styles.parents : styles.parentsInvalidInput,
          ]}>
          <Text style={styles.parentsText}>
            Distance to be estimated (m, can be a comma-delimited list)
          </Text>
          <TextInput
            style={styles.inputText}
            value={inputDeg.d}
            onChangeText={handleChangeD}
          />
        </View>
        <View style={styles.buttonParent}>
          <ThemeButton
            title="Calculate"
            style={styles.buttonCalculate}
            onPress={calculateDistanceEstimates}
          />
          <ThemeButton
            mode={'outlined'}
            title="Clear"
            style={styles.buttonClear}
            onPress={clearDistanceEstimates}
          />
        </View>
        <Table headers={tableHeaders} data={outputDeg}/>
      </ScrollView>
    </View>
  );
};

export default DistanceEstimationGuide;
