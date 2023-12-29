import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native';
import React from 'react';

import {colors} from '../constants';
import {scale} from '../utils/scale';

type Props = {
  title: string;
  style?: StyleProp<ViewStyle>;
} & PressableProps;

export const ThemeButton = ({title, onPress, ...props}: Props) => {
  return (
    <Pressable
      {...props}
      onPress={onPress}
      style={[styles.container, props.style]}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
});
