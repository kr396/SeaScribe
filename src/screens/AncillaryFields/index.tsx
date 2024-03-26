import {Alert, ScrollView, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';

import DualListBox from '../../components/DualListBox';
import {RootStackScreenProps} from '../../navigation/types';
import styles from './styles';
import {useAppDispatch, useAppSelector} from '../../store';
import {getAncillaryFields} from '../../store/slices/ancillaryFieldsSlice';
import {NewAncillaryField, Prompt, ThemeButton} from '../../components';
import {
  getSelectedAncillaryFields,
  setSelectedAncillaryFields,
} from '../../store/slices/surveySlice';
import Popup from '../../components/Popup';
import {addNewMethodology, getMethodologies} from '../../store/slices/appSlice';

const AncillaryFields: FC<RootStackScreenProps<'AncillaryFields'>> = ({
  navigation,
  route,
}) => {
  const selectedMethodologyId = route.params?.selectedMethodologyId;

  const dispatch = useAppDispatch();
  const ancillaryFields = useAppSelector(getAncillaryFields);
  const selectedAncillaryFields = useAppSelector(getSelectedAncillaryFields);
  const methodologies = useAppSelector(getMethodologies);
  const [selectedFields, setSelectedFields] = useState<any>(
    selectedAncillaryFields,
  );

  const [showNewAncillaryModal, setShowNewAncillaryModal] = useState(false);
  const [showMethodNamePropmt, setShowMethodNamePropmt] = useState(false);

  useEffect(() => {
    if (route.params?.returnTo === 'start-new-survey') {
      Alert.alert(
        'Changes Will Produce New Methodology',
        'Ancillary fields are considered intrinsic properties of a methodology.  Therefore, if you make any changes to the selections on this screen, you will be prompted for a new methodology name, and your new survey will automatically be assigned your new methodology.',
      );
    }
    return () => {};
  }, []);

  /**
   * Handles `Save` button press event
   */
  const onSavePress = () => {
    var alreadySelected = JSON.stringify(selectedAncillaryFields);
    var selectedNow = JSON.stringify(selectedFields);
    if (
      route.params?.returnTo === 'start-new-survey' &&
      alreadySelected !== selectedNow
    ) {
      // User has changed what was selected.
      setShowMethodNamePropmt(true);
    } else {
      dispatch(setSelectedAncillaryFields(selectedFields));
      navigation.goBack();
    }
  };

  /**
   * Handles `+` ancillary button press
   */
  const onAddPress = () => {
    setShowNewAncillaryModal(true);
  };

  /**
   * Handles save Methodology Name from prompt press
   * Saves updated Ancillary fields with new method
   */
  const onSaveMethodologyNamePress = (newMethodologyName: string) => {
    if (newMethodologyName) {
      // Verify entered name is unique.
      const foundExisting = methodologies.some(
        method =>
          method.label.toLocaleLowerCase() ===
          newMethodologyName.toLocaleLowerCase(),
      );

      if (foundExisting) {
        Alert.alert('Validation Error', 'The Methodology Name must be unique.');
      } else {
        let currentMethodology = methodologies.find(
          method => method.id === selectedMethodologyId,
        );

        if (currentMethodology) {
          const id = Date.now();
          dispatch(
            addNewMethodology({
              ...currentMethodology,
              label: newMethodologyName,
              id,
              created: new Date(),
              ancillaryFields: selectedFields,
            }),
          );
          setShowMethodNamePropmt(false);
          navigation.goBack();
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <DualListBox
            items={ancillaryFields}
            selectedItems={selectedAncillaryFields}
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
        <NewAncillaryField
          onRequestClose={() => setShowNewAncillaryModal(false)}
        />
      </Popup>
      {showMethodNamePropmt && (
        <Prompt
          visible={showMethodNamePropmt}
          title="Enter New Methodology Name"
          description="Because you've changed the ancillary fields for a methodology, a new methodology must be created."
          onSavePress={onSaveMethodologyNamePress}
          onRequestClose={() => setShowMethodNamePropmt(false)}
        />
      )}
    </View>
  );
};

export default AncillaryFields;
