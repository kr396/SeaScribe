import {
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import React, {FC} from 'react';
import DeviceInfo from 'react-native-device-info';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

type InputTextProps = {
  lable: string;
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  inputProps?: TextInputProps;
  isRequired?: boolean;
  errorMessage?: string;
};

export const InputText: FC<InputTextProps> = ({
  lable,
  style,
  inputProps,
  isRequired = false,
  containerStyle,
  errorMessage,
}) => {
  const {styles, theme} = useStyles(stylesheet);
  const showRedBorder = isRequired && !inputProps?.value;
  const borderColor =
    showRedBorder || errorMessage ? theme.colors.red : theme.colors.offWhite;

  const deviceViseStyle: StyleProp<ViewStyle> =
    DeviceInfo.getDeviceType() === 'Tablet'
      ? {flexDirection: 'row'}
      : {flexDirection: 'column', alignItems: 'flex-start'};
  return (
    <View style={[styles.containerStyle, containerStyle, deviceViseStyle]}>
      <View style={[styles.container, {borderColor}, style]}>
        <Text style={[styles.lable]}>{lable}</Text>
        <TextInput
          selectionColor={theme.colors.black}
          {...inputProps}
          style={[styles.input, inputProps?.style]}
        />
      </View>
      <Text style={[styles.requiredText]}>
        {errorMessage ? errorMessage : showRedBorder ? '*Required' : null}
      </Text>
    </View>
  );
};

const stylesheet = createStyleSheet(({colors}) => ({
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
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
    color: colors.black,
    marginEnd: 5,
  },
  input: {
    flex: 2,
    color: colors.black,
    backgroundColor: colors.offWhite,
    borderRadius: 8,
    minHeight: 30,
    paddingHorizontal: 8,
  },
  requiredText: {
    color: colors.red,
    marginHorizontal: 8,
    marginTop: 8,
  },
}));
