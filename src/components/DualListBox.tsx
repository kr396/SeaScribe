import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {colors} from '../constants';

const DualListBox = () => {
  const [availableFields, setAvailableFields] = useState([
    {label: 'Percent Oiled (%)', value: 'oilPercent', selected: false},
    {label: 'Sea Surface Temp (C)', value: 'seaTemp', selected: false},
    {label: 'Salinity (%)', value: 'salinity', selected: false},
    {label: 'Glare', value: 'glare', selected: false},
    {label: 'Weather', value: 'weather', selected: false},
  ]);
  const [selectedFields, setSelectedFields] = useState([
    {label: 'Association', value: 'association', selected: false},
    {label: 'Flying', value: 'flying', selected: false},
    {label: 'Flight Height (m)', value: 'flightHeight', selected: false},
    {label: 'Oiled', value: 'oiled', selected: false},
    {label: 'Fishing', value: 'fishing', selected: false},
    {label: 'Test Ancillary Field', value: 'testField', selected: false},
  ]);
  // const [showAddPopup, setShowAddPopup] = useState(false);

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

  const handleAvailableSelect = field => {
    let updatedFields = [...availableFields];
    updatedFields = updatedFields.map(option => {
      if (option.value === field.value) {
        return {...option, selected: !field.selected};
      }
      return option;
    });
    setAvailableFields(updatedFields);
  };

  const handleSelectedSelect = field => {
    let updatedFields = [...selectedFields];
    updatedFields = updatedFields.map(option => {
      if (option.value === field.value) {
        return {...option, selected: !field.selected};
      }
      return option;
    });
    setSelectedFields(updatedFields);
  };

  const handleAdd = () => {};

  return (
    <View style={styles.container}>
      {/* Available fields section */}
      <View>
        <Text style={styles.listHeader}>
          Available Ancillary Fields ({availableFields.length})
        </Text>
        <View style={styles.itemList}>
          {availableFields.map(field => (
            <Pressable
              key={field.value}
              style={[
                styles.itemButton,
                {
                  backgroundColor: field.selected
                    ? colors.primary
                    : colors.offWhite,
                },
              ]}
              onPress={() => handleAvailableSelect(field)}>
              <Text style={styles.itemText}>{field.label}</Text>
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
      <View>
        <Text style={styles.listHeader}>
          Selected Ancillary Fields ({selectedFields.length})
        </Text>
        <View style={styles.itemList}>
          {selectedFields.map(field => (
            <Pressable
              key={field.value}
              style={[
                styles.itemButton,
                {
                  backgroundColor: field.selected
                    ? colors.primary
                    : colors.offWhite,
                },
              ]}
              onPress={() => handleSelectedSelect(field)}>
              <Text style={styles.itemText}>{field.label}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'row',
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
});

export default DualListBox;
