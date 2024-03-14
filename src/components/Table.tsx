import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../constants'

export const Table: FC<{
  headers: Array<{label: string; value: string; width: string}>;
  data: any[];
}> = ({headers = [], data = []}) => {
  const renderItem = ({item, index}: {item: any; index: number}) => {
    return (
      <View
        style={[
          styles.row,
          index % 2 === 0 ? styles.whiteRow : styles.offWhiteRow,
        ]}>
        {headers.map((header, cellIndex) => (
          <TouchableOpacity
            key={cellIndex}
            style={[
              styles.cell,
              {width: header.width},
              cellIndex === 0 && styles.headerCell,
            ]}>
            <Text style={styles.cellText}>{item[header.value]}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const listheadercomponent = () => {
    return (
      <View style={[styles.row, styles.headerRow]}>
        {headers.map((header, index) => (
          <View key={index} style={[styles.cell, {width: header.width}]}>
            <Text style={styles.cellText}>{header.label}</Text>
          </View>
        ))}
      </View>
    );
  };

  const itemseparatorcomponent = () => {
    return <View style={[styles.horizontalLine, styles.bottomBorderWidth]} />;
  };

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      nestedScrollEnabled>
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={index => index.toString()}
          renderItem={renderItem}
          ListHeaderComponent={listheadercomponent}
          ItemSeparatorComponent={itemseparatorcomponent}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    borderWidth: 1,
    borderColor: colors.lightgrey,
    padding: 5,
  },
  cellText: {
    color: colors.black,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: colors.black,
  },
  bottomBorderWidth: {
    borderBottomWidth: 0,
  },
  whiteRow: {
    backgroundColor: colors.white,
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
