import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import {colors} from '../constants';
import DropDownPicker, {
  DropDownPickerProps,
  ItemType,
} from 'react-native-dropdown-picker';

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
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  isRequired?: boolean;
  dropdownProps?: DropDownPickerProps<any>;
  setValue: Dispatch<SetStateAction<T | null | any>>;
  setItems?: Dispatch<SetStateAction<any[]>>;
} & AddButtonProps;

export const DropDown: FC<DropDownProps<T>> = ({
  items,
  value,
  lable,
  style,
  zIndex,
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
  const [open, setOpen] = useState(false);
  return (
    <View style={[styles.containerStyle, containerStyle, {zIndex}]}>
      <View style={[styles.container, {borderColor}, style]}>
        <Text style={styles.lable}>{lable}</Text>
        <DropDownPicker
          open={open}
          {...dropdownProps}
          value={value}
          items={items}
          placeholder=""
          autoScroll={true}
          disableBorderRadius={true}
          zIndex={zIndex}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={styles.dropDownStyle}
          containerStyle={styles.dropdownContainerStyle}
          dropDownContainerStyle={styles.dropDownContainerStyle}
          textStyle={styles.textStyle}
          listItemContainerStyle={styles.listItemContainerStyle}
          tickIconContainerStyle={styles.tickIconContainerStyle}
        />
        {showAddButton ? (
          <Pressable style={styles.addButton} onPress={onAddPress}>
            <Text style={styles.addBtnText}>+</Text>
          </Pressable>
        ) : null}
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
  requiredText: {
    color: colors.red,
    marginHorizontal: 8,
    width: 70,
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
});
