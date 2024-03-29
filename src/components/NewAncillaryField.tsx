import {StyleSheet, Text, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import {DropDown, InputText, ThemeButton} from '.';
import {
  ANCILLARY_FIELD_FREQUENCIES,
  ANCILLARY_FIELD_INPUT_CONTROLS,
} from '../data';
import {useAppDispatch} from '../store';
import {addAncillaryField} from '../store/slices/ancillaryFieldsSlice';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export const NewAncillaryField = () => {
  const dispatch = useAppDispatch();
  const [fieldName, setFieldName] = useState('');
  const [frequency, setFrequency] = useState(null);
  const [sortOrder, setSortOrder] = useState('');
  const [inputControl, setInputControl] = useState<number | null>(null);
  const [minimumIntegerValue, setMinimumIntegerValue] = useState('');
  const [maximumIntegerValue, setMaximumIntegerValue] = useState('');
  const [minimumDecimalValue, setMinimumDecimalValue] = useState('');
  const [maximumDecimalValue, setMaximumDecimalValue] = useState('');
  const [selectedOptions, setSelectedOptions] = useState(2);
  const [maximumLenght, setMaximumLenght] = useState('');

  const numSelectValuesOptions = useMemo(
    () =>
      Array.from({length: 30}, (v, i) => ({
        value: i + 1,
        label: String(i + 1),
      })),
    [],
  );
  const selectVals = useMemo(() => {
    const selectValue = [];
    for (var i = 0; i < numSelectValuesOptions.length; i++) {
      selectValue.push({
        index: i,
        id: '',
        text: '',
      });
    }
    return selectValue;
  }, [numSelectValuesOptions]);

  const [selectVal, setSelectVal] = useState(selectVals);

  /**
   * Accepts below params and returns validation error type
   * @param value string, user input
   * @param min minimum value
   * @param max maximum value
   * @param pattern regex pattern
   * @returns error type
   */
  const getErrorType = (
    value: string,
    min: number,
    max: number,
    pattern?: RegExp,
  ) => {
    if (!value) {
      return null;
    }
    const number = Number(value);
    if (isNaN(number)) {
      return 'number';
    }
    if (!pattern?.test(value)) {
      return 'pattern';
    }
    if (number < min) {
      return 'min';
    }
    if (number > max) {
      return 'max';
    }
    return null;
  };

  /**
   * Returns error message for `Sort Order` input
   */
  const errorMessageForSortOrder = useMemo(() => {
    const error = getErrorType(sortOrder, 1, 999, /^\d+$/);
    switch (error) {
      case 'min':
        return '* Must be >= 1';
      case 'max':
        return '* Must be <= 999';
      case 'number':
      case 'pattern':
        return '* Must be integer';
      default:
        return '';
    }
  }, [sortOrder]);

  /**
   * Returns error message for `Integer` Input control `Minimum Value`
   */
  const errorMessageForMinIntValue = useMemo(() => {
    const error = getErrorType(
      minimumIntegerValue,
      -1000000000,
      1000000000,
      /^\-?\d+$/,
    );
    switch (error) {
      case 'min':
        return '* Must be >= -1000000000';
      case 'max':
        return '* Must be <= 1000000000';
      case 'number':
      case 'pattern':
        return '* Must be integer';
      default:
        return '';
    }
  }, [minimumIntegerValue]);

  /**
   * Returns error message for `Integer` Input control `Maximum Value`
   */
  const errorMessageForMaxIntValue = useMemo(() => {
    const error = getErrorType(
      maximumIntegerValue,
      -1000000000,
      1000000000,
      /^\-?\d+$/,
    );
    switch (error) {
      case 'min':
        return '* Must be >= -1000000000';
      case 'max':
        return '* Must be <= 1000000000';
      case 'number':
      case 'pattern':
        return '* Must be integer';
      default:
        return '';
    }
  }, [maximumIntegerValue]);

  /**
   * Returns error message for `Alphanumeric` Input control `Maximum Length`
   */
  const errorMessageForMaxLength = useMemo(() => {
    const error = getErrorType(maximumLenght, 1, 500, /^\d+$/);
    switch (error) {
      case 'min':
        return '* Must be >= 1';
      case 'max':
        return '* Must be <= 500';
      case 'number':
      case 'pattern':
        return '* Must be positive integer';
      default:
        return '';
    }
  }, [maximumLenght]);

  /**
   * Returns error message for `Decimal` Input control `Minimum Value`
   */
  const errorMessageForMinDecimal = useMemo(() => {
    const error = getErrorType(
      minimumDecimalValue,
      -1000000000,
      1000000000,
      /^\-?\d*\.?\d+$/,
    );
    switch (error) {
      case 'min':
        return '* Must be >= -1000000000';
      case 'max':
        return '* Must be >= -1000000000';
      case 'number':
      case 'pattern':
        return '* Must be decimal';
      default:
        return '';
    }
  }, [minimumDecimalValue]);

  /**
   * Returns error message for `Decimal` Input control `Minimum Value`
   */
  const errorMessageForMaxDecimal = useMemo(() => {
    const error = getErrorType(
      maximumDecimalValue,
      -1000000000,
      1000000000,
      /^\-?\d*\.?\d+$/,
    );
    switch (error) {
      case 'min':
        return '* Must be >= -1000000000';
      case 'max':
        return '* Must be >= -1000000000';
      case 'number':
      case 'pattern':
        return '* Must be decimal';
      default:
        return '';
    }
  }, [maximumDecimalValue]);

  const saveDisabled = !fieldName || !frequency || !sortOrder || !inputControl;

  const onChangeSelectOptions = (
    type: 'id' | 'text',
    index: number,
    value: string,
  ) => {
    let newArray = [...selectVal];
    if (type === 'id') {
      newArray[index].id = value;
    } else {
      newArray[index].text = value;
    }
    setSelectVal(newArray);
  };

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
    setMinimumIntegerValue('');
    setMaximumIntegerValue('');
    setMinimumDecimalValue('');
    setMaximumDecimalValue('');
    setMaximumLenght('');
    setSelectVal(selectVals);
  };

  const getDynamicInputs = () => {
    switch (inputControl) {
      case 1: //Integer
        return (
          <>
            <InputText
              lable="Minimum Value"
              isRequired={true}
              errorMessage={errorMessageForMinIntValue}
              inputProps={{
                value: minimumIntegerValue,
                onChangeText: setMinimumIntegerValue,
                keyboardType: 'number-pad',
                returnKeyType: 'done',
              }}
            />
            <InputText
              lable="Maximum Value"
              isRequired={true}
              errorMessage={errorMessageForMaxIntValue}
              inputProps={{
                value: maximumIntegerValue,
                onChangeText: setMaximumIntegerValue,
                keyboardType: 'number-pad',
                returnKeyType: 'done',
              }}
            />
          </>
        );
      case 2: //Decimal
        return (
          <>
            <InputText
              lable="Minimum Value"
              errorMessage={errorMessageForMinDecimal}
              isRequired={true}
              inputProps={{
                value: minimumDecimalValue,
                onChangeText: setMinimumDecimalValue,
                keyboardType: 'numeric',
                returnKeyType: 'done',
                maxLength: 11,
              }}
            />
            <InputText
              lable="Maximum Value"
              errorMessage={errorMessageForMaxDecimal}
              isRequired={true}
              inputProps={{
                value: maximumDecimalValue,
                onChangeText: setMaximumDecimalValue,
                keyboardType: 'numeric',
                returnKeyType: 'done',
                maxLength: 11,
              }}
            />
          </>
        );

      case 3 /* Alphanumeric */:
        return (
          <InputText
            lable="Maximum Length"
            isRequired={true}
            errorMessage={errorMessageForMaxLength}
            inputProps={{
              value: maximumLenght,
              onChangeText: setMaximumLenght,
              keyboardType: 'number-pad',
              returnKeyType: 'done',
            }}
          />
        );

      case 4 /* Select (from a list of choices) */:
        return (
          <>
            <DropDown
              lable="# Select Option 2"
              items={numSelectValuesOptions}
              value={selectedOptions}
              setValue={setSelectedOptions}
              zIndex={990}
            />
            {selectVal.slice(0, selectedOptions).map((val, index) => (
              <View style={styles.optionContainer} key={val.index}>
                <Text>Select Option {val.index + 1}</Text>
                <InputText
                  lable="ID"
                  isRequired={true}
                  inputProps={{
                    maxLength: 10,
                    value: val.id,
                    onChangeText: value =>
                      onChangeSelectOptions('id', index, value),
                  }}
                />
                <InputText
                  lable="Text"
                  isRequired={true}
                  inputProps={{
                    maxLength: 100,
                    value: val.text,
                    onChangeText: value =>
                      onChangeSelectOptions('text', index, value),
                  }}
                />
              </View>
            ))}
          </>
        );

      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <InputText
          lable="Field Name"
          inputProps={{
            value: fieldName,
            onChangeText: setFieldName,
            maxLength: 100,
          }}
          isRequired={true}
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
          errorMessage={errorMessageForSortOrder}
          isRequired={true}
          inputProps={{
            value: sortOrder,
            onChangeText: setSortOrder,
            keyboardType: 'number-pad',
            returnKeyType: 'done',
          }}
        />
        <DropDown
          lable="Input Control"
          items={ANCILLARY_FIELD_INPUT_CONTROLS}
          value={inputControl}
          setValue={setInputControl}
          isRequired
          zIndex={998}
        />

        {getDynamicInputs()}

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
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  optionContainer: {marginVertical: 8},
  scrollView: {
    flex: 1,
  },
});
