import {View} from 'react-native';
import React, {FC} from 'react';
import DualListBox from '../../components/DualListBox';
import {RootStackScreenProps} from '../../navigation/types';
import styles from './styles';
import {useAppSelector} from '../../store';
import {getAncillaryFields} from '../../store/slices/ancillaryFieldsSlice';
import {ThemeButton} from '../../components';

const AncillaryFields: FC<RootStackScreenProps<'AncillaryFileds'>> = () => {
  const ancillaryFields = useAppSelector(getAncillaryFields);
  return (
    <View style={styles.container}>
      <View>
        <DualListBox items={ancillaryFields} />
      </View>
      <ThemeButton title="Save" />
    </View>
  );
};

export default AncillaryFields;
