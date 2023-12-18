import {Pressable, PressableProps, StyleSheet, Text} from 'react-native';
import React from 'react';

import {colors} from '../constants';

type Props = {title: string; onPress: () => void} & PressableProps;

export const ThemeButton = ({title, onPress, ...props}: Props) => {
  return (
    <Pressable {...props} onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  title: {
    color: colors.white,
  },
});
