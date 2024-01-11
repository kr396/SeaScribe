import {View, Text} from 'react-native';
import React, {useMemo, useState} from 'react';
import styles from './styles';
import {DropDown, InputText, ThemeButton} from '../../components';
import {TRANSACT_TYPES} from '../../data/transectType';
import {COUNTING_METHODOLOGIES} from '../../data';
import DualListBox from '../../components/DualListBox';

type Props = {};

const NewMethodology = (props: Props) => {
  const [methodologyName, setMethodologyName] = useState('');
  const [transectType, setTransectType] = useState(null);
  const [countingMethodology, setCountingMethodology] = useState(null);
  const [countingPerformedOn, setCountingPerformedOn] = useState(null);
  const saveDisabled = useMemo(
    () =>
      !methodologyName ||
      transectType === null ||
      countingMethodology === null ||
      countingPerformedOn === null,
    [methodologyName, transectType, countingMethodology, countingPerformedOn],
  );

  const onClearPress = () => {
    setMethodologyName('');
    setTransectType(null);
    setCountingMethodology(null);
    setCountingPerformedOn(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <InputText
          lable="Methodology Name"
          inputProps={{
            value: methodologyName,
            onChangeText: setMethodologyName,
          }}
          isRequired={true}
        />
        <DropDown
          lable="Transect Type"
          value={transectType}
          setValue={setTransectType}
          items={TRANSACT_TYPES}
          isRequired={true}
          zIndex={999}
        />
        <DropDown
          lable="Counting Methodology"
          value={countingMethodology}
          setValue={setCountingMethodology}
          items={COUNTING_METHODOLOGIES}
          isRequired={true}
          zIndex={998}
        />
        <DropDown
          lable="Counting Performed On"
          value={countingMethodology}
          setValue={setCountingMethodology}
          items={COUNTING_METHODOLOGIES}
          isRequired={true}
          zIndex={997}
        />
        <DualListBox />
      </View>
      <View style={styles.buttonContainer}>
        <ThemeButton
          title="Save"
          style={styles.buttonStyle}
          disabled={saveDisabled}
        />
        <ThemeButton
          title="Clear"
          mode="outlined"
          style={styles.buttonStyle}
          onPress={onClearPress}
        />
      </View>
    </View>
  );
};

export default NewMethodology;
