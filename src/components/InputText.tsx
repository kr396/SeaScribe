import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import React, {FC} from 'react';
import {colors} from '../constants';

type InputTextProps = {
  lable: string;
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  inputProps?: TextInputProps;
  isRequired?: boolean;
};

export const InputText: FC<InputTextProps> = ({
  lable,
  style,
  inputProps,
  isRequired = false,
  containerStyle,
}) => {
  const showRedBorder = isRequired && !inputProps?.value;
  const borderColor = showRedBorder ? colors.red : colors.offWhite;
  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <View style={[styles.container, {borderColor}, style]}>
        <Text style={styles.lable}>{lable}</Text>
        <TextInput
          selectionColor={colors.black}
          {...inputProps}
          style={[styles.input, inputProps?.style]}
        />
      </View>
      <Text style={[styles.requiredText]}>
        {showRedBorder ? '*Required' : null}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    paddingStart: 16,
    paddingEnd: 8,
    paddingVertical: 8,
    borderColor: colors.offWhite,
  },
  lable: {
    flex: 1,
  },
  input: {
    flex: 2,
    backgroundColor: colors.offWhite,
    borderRadius: 8,
    minHeight: 30,
    paddingHorizontal: 8,
  },
  requiredText: {
    width: 70,
    color: colors.red,
    marginHorizontal: 8,
  },
});
