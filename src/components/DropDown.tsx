import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React, {Dispatch, FC, SetStateAction, useMemo, useState} from 'react';
import DropDownPicker, {
  DropDownDirectionType,
  DropDownPickerProps,
  ItemType,
} from 'react-native-dropdown-picker';
import DeviceInfo from 'react-native-device-info';

import {colors} from '../constants';

type AddButtonProps =
  | {
      showAddButton?: never;
      onAddPress?: never;
    }
  | {
      showAddButton?: boolean;
      onAddPress: () => void;
    };

type DropDownProps<T> = {
  lable: string;
  items: ItemType<any>[];
  value: T;
  zIndex?: number;
  zIndexInverse?: number;
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  isRequired?: boolean;
  dropdownProps?: Partial<DropDownPickerProps<any>>;
  setValue?: Dispatch<SetStateAction<T | null | any>>;
  setItems?: Dispatch<SetStateAction<any[]>>;
} & AddButtonProps;

export const DropDown: FC<DropDownProps<T>> = ({
  items,
  value,
  lable,
  style,
  zIndex,
  zIndexInverse,
  isRequired = false,
  showAddButton = false,
  containerStyle,
  dropdownProps,
  setValue,
  setItems,
  onAddPress,
}) => {
  const showRedBorder = isRequired && !value;
  const borderColor = showRedBorder ? colors.red : colors.offWhite;
  const deviceViseStyle: StyleProp<ViewStyle> =
    DeviceInfo.getDeviceType() === 'Tablet'
      ? {flexDirection: 'row'}
      : {flexDirection: 'column', alignItems: 'flex-start'};
  const [open, setOpen] = useState(false);
  const [direction, setDirection] = useState<DropDownDirectionType>('AUTO');
  const componentZIndex = useMemo(
    () =>
      direction.toUpperCase() === 'BOTTOM' && open ? zIndexInverse : zIndex,
    [direction, open],
  );
  return (
    <View
      style={[
        styles.containerStyle,
        containerStyle,
        deviceViseStyle,
        {
          zIndex: componentZIndex,
        },
      ]}>
      <View style={[styles.container, {borderColor}, style]}>
        <Text style={styles.lable}>{lable}</Text>
        <DropDownPicker
          open={open}
          {...dropdownProps}
          value={value}
          items={items}
          placeholder=""
          autoScroll={true}
          zIndex={zIndex}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          zIndexInverse={zIndexInverse}
          style={styles.dropDownStyle}
          containerStyle={styles.dropdownContainerStyle}
          dropDownContainerStyle={styles.dropDownContainerStyle}
          textStyle={styles.textStyle}
          listItemContainerStyle={styles.listItemContainerStyle}
          tickIconContainerStyle={styles.tickIconContainerStyle}
          onDirectionChanged={setDirection}
          // listMode="SCROLLVIEW"
        />
        {showAddButton ? (
          <Pressable style={styles.addButton} onPress={onAddPress}>
            <Text style={styles.addBtnText}>+</Text>
          </Pressable>
        ) : null}
      </View>
      <View style={styles.errorView}>
        {showRedBorder ? (
          <Text style={[styles.requiredText]}>*Required</Text>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    width: '100%',
  },
  lable: {
    flex: 1,
    color: colors.black,
  },
  requiredText: {
    color: colors.red,
  },
  dropdownContainerStyle: {
    flex: 2,
    height: 30,
  },
  dropDownStyle: {
    borderWidth: 0,
    minHeight: 30,
  },
  dropDownContainerStyle: {
    backgroundColor: colors.white,
    overflow: 'visible',
    borderWidth: 0,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  listItemContainerStyle: {
    flexDirection: 'row-reverse',
  },
  textStyle: {textAlign: 'right'},
  addButton: {
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.davyGrey,
    borderRadius: 15,
  },
  addBtnText: {
    color: colors.white,
    fontSize: 22,
    lineHeight: 24,
  },
  tickIconContainerStyle: {marginLeft: 0},
  errorView: {
    width: 70,
    marginHorizontal: 8,
    marginTop: 8,
  },
});
