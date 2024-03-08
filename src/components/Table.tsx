import React, { FC } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { colors } from '../constants';
import { RootStackScreenProps } from '../navigation/types';

interface TableProps extends RootStackScreenProps<'Table'> {
  navigation:any,
  route:any
}

const Table: FC<TableProps> = ({ navigation, route }) => {
  const columns: string[] = ['Del?', 'Name', 'Frequency', 'Sort Order', 'Input Control', 'Input Control Choice List', 'Min Value', 'Max Value', 'Max Length'];
  const data: (boolean | string)[][] = [
    [false, 'Association', 'Each Observation', '1', 'Select (from a list of choices)', 'Row 1, Col 6', 'Row 1, Col 7', 'Row 1, Col 8', 'Row 1, Col 9'],
    [false, 'Flying', 'Each Observation', '2', 'Select (from a list of choices)', 'Row 2, Col 6', 'Row 2, Col 7', 'Row 2, Col 8', 'Row 2, Col 9'],
    [false, 'Flight Height (m)', 'Each Observation', '3', 'Integer', 'Row 2, Col 6', 'Row 2, Col 7', 'Row 2, Col 8', 'Row 2, Col 9'],
    [false, 'Oiled', 'Each Observation', '4', 'Select (from a list of choices)', 'Row 2, Col 6', 'Row 2, Col 7', 'Row 2, Col 8', 'Row 2, Col 9'],
    [false, 'Percent Oiled (%)', 'Each Observation', '5', 'Decimal', 'Row 2, Col 6', 'Row 2, Col 7', 'Row 2, Col 8', 'Row 2, Col 9'],
    [false, 'Sea Surface Temp (C)', 'Each Observation', '6', 'Decimal', 'Row 2, Col 6', 'Row 2, Col 7', 'Row 2, Col 8', 'Row 2, Col 9'],
    [false, 'Salinity (%)', 'Each Observation', '7', 'Decimal', 'Row 2, Col 6', 'Row 2, Col 7', 'Row 2, Col 8', 'Row 2, Col 9'],
    [false, 'Fishing', 'Each Observation', '8', 'Alphanumeric', 'Row 2, Col 6', 'Row 2, Col 7', 'Row 2, Col 8', 'Row 2, Col 9'],
    [false, 'Glare', 'Changed at Intervals', '9', 'Select (from a list of choices)', 'Row 2, Col 6', 'Row 2, Col 7', 'Row 2, Col 8', 'Row 2, Col 9'],
    [false, 'Weather', 'Changed at Intervals', '10', 'Select (from a list of choices)', 'Row 2, Col 6', 'Row 2, Col 7', 'Row 2, Col 8', 'Row 2, Col 9'],
  ];

  const columnWidths: number[] = [50, 100, 200, 100, 350, 220, 100, 100, 100]; 

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item,index})=>(
            <View style={[styles.row, index % 2 === 0 ? styles.whiteRow : styles.offWhiteRow]}>
              {item.map((cellData, cellIndex) => (
                <TouchableOpacity key={cellIndex} style={[styles.cell, { width: columnWidths[cellIndex] }, cellIndex === 0 && styles.headerCell]}>
                  {cellIndex === 0 ? (
                    <CheckBox value={cellData as boolean} />
                  ) : (
                    <Text style={styles.cellText}>{cellData}</Text>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          )}
          ListHeaderComponent={() => (
            <View style={[styles.row, styles.headerRow]}>
              {columns.map((columnName, index) => (
                <View key={index} style={[styles.cell, { width: columnWidths[index] }]}>
                  <Text style={styles.cellText}>{columnName}</Text>
                </View>
              ))}
            </View>
          )}
          ItemSeparatorComponent={() => <View style={[styles.horizontalLine, styles.bottomBorderWidth]} />}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    maxHeight: 500,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    padding: 5,
  },
  cellText: {
    color: 'black',
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  bottomBorderWidth: {
    borderBottomWidth: 0,
  },
  whiteRow: {
    backgroundColor: 'white',
  },
  offWhiteRow: {
    backgroundColor: colors.offWhite,
  },
  headerRow: {
    backgroundColor: colors.offWhite,
  },
  headerCell: {
    alignItems: 'center',
  },
});

export default Table;
