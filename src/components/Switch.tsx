import React from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';
import {colors} from '../constants';

interface CustomSwitchProps {
  label: string;
  value: boolean;
  onToggle: () => void;
  thumbColor?: string;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({
  label,
  value,
  onToggle,
  thumbColor,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Switch
        value={value}
        onValueChange={onToggle}
        thumbColor={thumbColor}
        trackColor={{false: colors.lightgrey, true: colors.primary}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 1,
    paddingStart: 16,
    paddingEnd: 8,
    paddingVertical: 10,
    borderColor: colors.offWhite,
  },
  label: {
    color: colors.black,
  },
});

export default CustomSwitch;
