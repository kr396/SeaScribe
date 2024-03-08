import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';
import React, {useMemo} from 'react';

import {colors} from '../constants';
import {scale} from '../utils/scale';

type Props = {
  title: string;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  mode?: 'defalue' | 'outlined' | 'clear';
} & PressableProps;

export const ThemeButton = ({
  title,
  titleStyle,
  onPress,
  mode = 'defalue',
  ...props
}: Props) => {
  const pressableStyle: StyleProp<ViewStyle> = [styles.container];
  if (props.style) {
    pressableStyle.push(props.style);
  }
  if (props.disabled) {
    pressableStyle.push(styles.disabledSBtntyle);
  }
  if (mode === 'outlined') {
    pressableStyle.push(styles.outlineButton);
  }
  if (mode === 'clear') {
    pressableStyle.push({...styles.outlineButton, borderWidth: 0});
  }
  const textStyle = useMemo(() => {
    const textStyleObj: StyleProp<TextStyle> = [styles.title];
    if (mode === 'outlined' || mode === 'clear') {
      textStyleObj.push(styles.outlinedBtnText);
    }
    return textStyleObj;
  }, [mode]);
  return (
    <Pressable
      {...props}
      onPress={onPress}
      style={StyleSheet.flatten(pressableStyle)}>
      <Text style={[textStyle, titleStyle]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: scale(40),
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingHorizontal: scale(16),
    paddingVertical: 8,
  },
  title: {
    fontSize: scale(14),
    color: colors.white,
  },
  disabledSBtntyle: {
    opacity: 0.7,
  },
  outlineButton: {
    backgroundColor: colors.transparent,
    borderWidth: 1,
    borderColor: colors.davyGrey,
  },
  outlinedBtnText: {
    color: colors.davyGrey,
  },
});
