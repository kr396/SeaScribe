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
import {ThemeButton} from '../components';

type Popup = {
  visible: boolean;
  title: string;
  data: {id: string; label: string}[];
  onRequestClose?: () => void;
};

const Popup = ({visible, title, data, onRequestClose}: Popup) => {
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

  const renderItem = ({item}: {item: {id: string; label: string}}) => {
    const isSelected = selectedIds.includes(item.id);

    return (
      <View style={styles.checkBoxParent}>
        <View style={styles.itemContainer}>
          <CheckBox
            value={isSelected}
            onValueChange={() => handleToggleItem(item.id)}
            tintColors={{true: 'blue'}}
            style={styles.checkbox}
          />
          <Text style={styles.label}>{item.label}</Text>
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
            <View style={styles.padder} />
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
  },
  cancelBtn: {
    width: 130,
    backgroundColor: colors.white,
  },
  padder: {
    width: 70,
  },
  cancel: {
    color: colors.black,
    fontSize: 16,
  },
  main: {
    flex: 3,
    backgroundColor: colors.white,
  },
  flatlistContent: {
    flexGrow: 1,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    marginLeft: 8,
    color: colors.black,
  },
  buttonParent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
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
    backgroundColor: colors.lightgrey,
  },
  checkBoxParent: {
    borderWidth: 1,
    borderColor: colors.lightgrey,
  },
});
