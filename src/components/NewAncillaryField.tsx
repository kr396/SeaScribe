import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {DropDown, InputText, ThemeButton} from '.';
import {
  ANCILLARY_FIELD_FREQUENCIES,
  ANCILLARY_FIELD_INPUT_CONTROLS,
} from '../data';
import {useAppDispatch} from '../store';
import {addAncillaryField} from '../store/slices/ancillaryFieldsSlice';

export const NewAncillaryField = () => {
  const dispatch = useAppDispatch();
  const [fieldName, setFieldName] = useState('');
  const [frequency, setFrequency] = useState(null);
  const [sortOrder, setSortOrder] = useState('');
  const [inputControl, setInputControl] = useState(null);

  const saveDisabled = !fieldName || !frequency || !sortOrder || !inputControl;

  /**
   * Handles `Save` button press event
   * Saves Ancillary Field to local DB
   */
  const onSavePress = () => {
    dispatch(
      addAncillaryField({
        id: Date.now(),
        created: new Date(),
        name: fieldName,
        frequency_id: frequency!,
        sort_order: Number(sortOrder),
        input_control_id: inputControl!,
        max_length: null,
        max_value: null,
        min_value: null,
        required: 0,
      }),
    );
  };

  /**
   * Handles `Clear` button press event
   * Resets form
   */
  const onClearPress = () => {
    setFieldName('');
    setFrequency(null);
    setSortOrder('');
    setInputControl(null);
  };

  return (
    <View style={styles.container}>
      <InputText
        lable="Field Name"
        inputProps={{value: fieldName, onChangeText: setFieldName}}
        isRequired
      />
      <DropDown
        lable="Frequency"
        items={ANCILLARY_FIELD_FREQUENCIES}
        value={frequency}
        setValue={setFrequency}
        isRequired
        zIndex={999}
      />
      <InputText
        lable="Sort Order"
        inputProps={{
          value: sortOrder,
          onChangeText: setSortOrder,
          keyboardType: 'number-pad',
          returnKeyType: 'done',
        }}
        isRequired
      />
      <DropDown
        lable="Input Control"
        items={ANCILLARY_FIELD_INPUT_CONTROLS}
        value={inputControl}
        setValue={setInputControl}
        isRequired
        zIndex={998}
      />
      <View style={styles.ctaContainer}>
        <ThemeButton
          title="Save"
          disabled={saveDisabled}
          style={styles.button}
          onPress={onSavePress}
        />
        <ThemeButton
          title="Clear"
          mode="outlined"
          style={styles.button}
          onPress={onClearPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    gap: 8,
  },
  button: {
    borderRadius: 4,
  },
  ctaContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 16,
    marginVertical: 16,
  },
});
