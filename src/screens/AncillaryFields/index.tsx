import {ScrollView, View} from 'react-native';
import React, {FC, useState} from 'react';

import DualListBox from '../../components/DualListBox';
import {RootStackScreenProps} from '../../navigation/types';
import styles from './styles';
import {useAppDispatch, useAppSelector} from '../../store';
import {getAncillaryFields} from '../../store/slices/ancillaryFieldsSlice';
import {NewAncillaryField, ThemeButton} from '../../components';
import {setSelectedAncillaryFields} from '../../store/slices/surveySlice';
import Popup from '../../components/Popup';

const AncillaryFields: FC<RootStackScreenProps<'AncillaryFileds'>> = ({
  navigation,
}) => {
  const dispatch = useAppDispatch();
  const ancillaryFields = useAppSelector(getAncillaryFields);
  const [selectedFields, setSelectedFields] = useState<any>([]);
  const [showNewAncillaryModal, setShowNewAncillaryModal] = useState(false);

  /**
   * Handles `Save` button press event
   */
  const onSavePress = () => {
    dispatch(setSelectedAncillaryFields(selectedFields));
    navigation.goBack();
  };

  /**
   * Handles `+` ancillary button press
   */
  const onAddPress = () => {
    setShowNewAncillaryModal(true);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <DualListBox
            items={ancillaryFields}
            onSelecedItemsChange={setSelectedFields}
            onAddPress={onAddPress}
          />
        </View>
        <ThemeButton
          title="Save"
          onPress={onSavePress}
          style={styles.actionButton}
        />
      </ScrollView>
      <Popup
        visible={showNewAncillaryModal}
        onRequestClose={() => setShowNewAncillaryModal(false)}
        title="New Ancillary Field">
        <NewAncillaryField />
      </Popup>
    </View>
  );
};

export default AncillaryFields;
