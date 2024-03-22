import React, {ReactNode, useState} from 'react';
import {
  FlatList,
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {isTablet} from 'react-native-device-info';
import CheckBox from '@react-native-community/checkbox';
import {colors} from '../constants';
import {ThemeButton} from '.';

type Props = {
  visible: boolean;
  title: string;
  data: {id: string; label: string}[];
  onRequestClose?: () => void;
};

const Popup = ({visible, title, data, onRequestClose}: Props) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handleToggleItem = (id: string) => {
    setSelectedIds(prevSelectedIds => {
      if (prevSelectedIds.includes(id)) {
        return prevSelectedIds.filter(itemId => itemId !== id);
      } else {
        return [...prevSelectedIds, id];
      }
    });
  };

  const renderItem = ({
    item,
    index,
  }: {
    item: {id: string; label: string};
    index: number;
  }) => {
    const isSelected = selectedIds.includes(item.id);

    return (
      <View
        style={[styles.checkBoxParent, index === 0 && styles.containerWidth]}>
        <View style={styles.itemContainer}>
          <CheckBox
            value={isSelected}
            onValueChange={() => handleToggleItem(item.id)}
            tintColors={{true: 'blue'}}
            style={styles.checkbox}
          />
          <Text numberOfLines={1} style={styles.label}>
            {item.label}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onRequestClose}
      transparent={true}>
      <SafeAreaView style={styles.safearea}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <Pressable style={styles.cancelBtn}>
              <Text style={styles.cancel}>Show Reorder</Text>
            </Pressable>
          </View>
          <View style={styles.main}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.flatlistContent}
              nestedScrollEnabled={true}
            />
            <View style={styles.buttonParent}>
              <ThemeButton
                title="Save"
                style={styles.themeButtonCancel}
                titleStyle={styles.buttonTitleStyle}
              />
              <ThemeButton
                title="Cancel"
                style={styles.buttonUseSelected}
                titleStyle={styles.buttonCancelStyle}
                onPress={onRequestClose}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default Popup;

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.black05,
  },
  container: {
    flex: 1,
    margin: isTablet() ? '10%' : undefined,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingVertical: 16,
  },
  title: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'flex-start',
  },
  cancelBtn: {
    width: 110,
    backgroundColor: colors.white,
    alignItems: 'flex-start',
    height: 40,
    borderRadius: 4,
  },
  cancel: {
    color: colors.black,
    fontSize: 14,
    alignSelf: 'center',
    marginTop: 8,
  },
  main: {
    flex: 1,
    backgroundColor: colors.white,
    flexDirection: 'column',
  },
  flatlistContent: {
    flexGrow: 1,
    paddingHorizontal: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 4,
  },
  checkbox: {
    alignSelf: 'center',
    marginLeft: 8,
  },
  label: {
    marginRight: 32,
    color: colors.black,
    padding: 16,
  },
  buttonParent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  themeButtonCancel: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    height: 45,
    marginRight: 10,
  },
  buttonTitleStyle: {
    color: colors.white,
  },
  buttonCancelStyle: {
    color: colors.black,
  },
  buttonUseSelected: {
    borderRadius: 5,
    height: 45,
    width: 100,
    backgroundColor: colors.offWhite,
    borderWidth: 1,
    borderColor: colors.lightgrey,
  },
  checkBoxParent: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.lightgrey,
  },
  containerWidth: {
    borderTopWidth: 1,
  },
});
