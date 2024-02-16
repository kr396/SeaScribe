import React, {FC, useEffect, useState} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

import {colors} from '../constants';

type Item = {id: number; [x: string]: any};
type Props = {
  items: Item[];
  selectedItems: Item[];
  onSelecedItemsChange?: (items: Item[]) => void;
  onAddPress?: () => void;
};

const DualListBox: FC<Props> = ({
  items = [],
  selectedItems = [],
  onSelecedItemsChange,
  onAddPress,
}) => {
  const [availableFields, setAvailableFields] = useState(items);
  const [selectedFields, setSelectedFields] = useState<any[]>(selectedItems);
  // const [showAddPopup, setShowAddPopup] = useState(false);

  useEffect(() => {
    if (selectedFields.length) {
      setAvailableFields(
        items.filter(
          item => !!!selectedFields.find(prevItem => prevItem.id == item.id),
        ),
      );
    }
    return () => {};
  }, [items]);

  useEffect(() => {
    onSelecedItemsChange?.(selectedFields);
    return () => {};
  }, [selectedFields, onSelecedItemsChange]);

  // Function to move all available fields to selected fields
  const handleMoveAllRight = () => {
    setAvailableFields([]);
    setSelectedFields([...selectedFields, ...availableFields]);
  };

  // Function to move a selected field to available fields
  const handleMoveSelectedLeft = () => {
    const updatedSelectedField = selectedFields.filter(
      option => !option.selected,
    );
    const newSelectedField = selectedFields
      .filter(option => option.selected)
      .map(option => {
        return {...option, selected: false};
      });
    setAvailableFields([...availableFields, ...newSelectedField]);
    setSelectedFields(updatedSelectedField);
  };

  // Function to move all selected fields to available fields
  const handleMoveAllLeft = () => {
    setSelectedFields([]);
    setAvailableFields([...availableFields, ...selectedFields]);
  };

  const handleMoveSelectedRight = () => {
    const updatedAvailableField = availableFields.filter(
      option => !option.selected,
    );
    const newSelectedField = availableFields
      .filter(option => option.selected)
      .map(option => {
        return {...option, selected: false};
      });
    setAvailableFields(updatedAvailableField);
    setSelectedFields([...selectedFields, ...newSelectedField]);
  };

  const handleAvailableSelect = (field: Item) => {
    let updatedFields = [...availableFields];
    updatedFields = updatedFields.map(option => {
      if (option.id === field.id) {
        return {...option, selected: !field.selected};
      }
      return option;
    });
    setAvailableFields(updatedFields);
  };

  const handleSelectedSelect = (field: Item) => {
    let updatedFields = [...selectedFields];
    updatedFields = updatedFields.map(option => {
      if (option.id === field.id) {
        return {...option, selected: !field.selected};
      }
      return option;
    });
    setSelectedFields(updatedFields);
  };

  const handleAdd = () => {
    onAddPress?.();
  };

  return (
    <View style={styles.container}>
      {/* Available fields section */}
      <View style={styles.column}>
        <Text style={styles.listHeader}>
          Available Ancillary Fields ({availableFields.length})
        </Text>
        <View style={styles.itemList}>
          {availableFields.map(field => (
            <Pressable
              key={field.id}
              style={[
                styles.itemButton,
                {
                  backgroundColor: field.selected
                    ? colors.primary
                    : colors.offWhite,
                },
              ]}
              onPress={() => handleAvailableSelect(field)}>
              <Text
                style={[
                  styles.itemText,
                  {
                    color: field.selected ? colors.white : colors.black,
                  },
                ]}>
                {field.name}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <Pressable style={styles.actionButton} onPress={handleMoveAllRight}>
          <Text style={styles.buttonText}>{'>>'}</Text>
        </Pressable>
        <Pressable
          style={styles.actionButton}
          onPress={() => handleMoveSelectedRight()}>
          <Text style={styles.buttonText}>&gt;</Text>
        </Pressable>
        <Pressable
          style={styles.actionButton}
          onPress={() => handleMoveSelectedLeft()}>
          <Text style={styles.buttonText}>&lt;</Text>
        </Pressable>
        <Pressable style={styles.actionButton} onPress={handleMoveAllLeft}>
          <Text style={styles.buttonText}>&lt;&lt;</Text>
        </Pressable>
        <Pressable style={styles.actionButton} onPress={handleAdd}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
      {/* Selected fields section */}
      <View style={styles.column}>
        <Text style={styles.listHeader}>
          Selected Ancillary Fields ({selectedFields.length})
        </Text>
        <View style={styles.itemList}>
          {selectedFields.map(field => (
            <Pressable
              key={field.id}
              style={[
                styles.itemButton,
                {
                  backgroundColor: field.selected
                    ? colors.primary
                    : colors.offWhite,
                },
              ]}
              onPress={() => handleSelectedSelect(field)}>
              <Text
                style={[
                  styles.itemText,
                  {
                    color: field.selected ? colors.white : colors.black,
                  },
                ]}>
                {field.name}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    padding: 20,
  },
  listHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemList: {
    flexDirection: 'column',
  },
  itemButton: {
    backgroundColor: '#f5f5f5',

    padding: 10,
    marginBottom: 5,
    borderRadius: 0,
  },
  itemText: {
    fontSize: 14,
  },
  buttonContainer: {
    marginTop: 40,
    marginHorizontal: 20,
    gap: 10,
  },
  actionButton: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.davyGrey,
  },
  buttonText: {
    fontSize: 14,
  },
  column: {flex: 1},
});

export default DualListBox;
