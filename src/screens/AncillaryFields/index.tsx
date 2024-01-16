import {View} from 'react-native';
import React, {FC} from 'react';
import DualListBox from '../../components/DualListBox';
import {RootStackScreenProps} from '../../navigation/types';
import styles from './styles';

const AncillaryFields: FC<RootStackScreenProps<'AncillaryFileds'>> = () => {
  return (
    <View style={styles.container}>
      <DualListBox />
    </View>
  );
};

export default AncillaryFields;
