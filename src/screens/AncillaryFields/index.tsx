import {View} from 'react-native';
import React, {FC, useState} from 'react';

import DualListBox from '../../components/DualListBox';
import {RootStackScreenProps} from '../../navigation/types';
import styles from './styles';
import {useAppDispatch, useAppSelector} from '../../store';
import {getAncillaryFields} from '../../store/slices/ancillaryFieldsSlice';
import {ThemeButton} from '../../components';
import {setSelectedAncillaryFields} from '../../store/slices/surveySlice';

const AncillaryFields: FC<RootStackScreenProps<'AncillaryFileds'>> = ({
  navigation,
}) => {
  const dispatch = useAppDispatch();
  const ancillaryFields = useAppSelector(getAncillaryFields);
  const [selectedFields, setSelectedFields] = useState<any>([]);

  const onSavePress = () => {
    dispatch(setSelectedAncillaryFields(selectedFields));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View>
        <DualListBox
          items={ancillaryFields}
          onSelecedItemsChange={setSelectedFields}
        />
      </View>
      <ThemeButton title="Save" onPress={onSavePress} />
    </View>
  );
};

export default AncillaryFields;
