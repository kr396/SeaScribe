import React, {FC, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  DimensionValue,
} from 'react-native';
import {colors} from '../constants';
import CheckBox from '@react-native-community/checkbox';

export type TableHeaderItem = {
  label: string;
  value: string;
  width: DimensionValue | undefined;
  type?: 'checkbox';
};
type TProps = {
  headers: Array<TableHeaderItem>;
  data: any[];
  isRowSelectable?: boolean;
};

export const Table: FC<TProps> = ({headers = [], data = []}) => {
  const [checkedItems, setCheckedItems] = useState<{[key: string]: boolean}>(
    {},
  );

  const toggleCheckbox = (itemId: string) => {
    setCheckedItems(prevState => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  };

  const renderCell = (
    item: any,
    header: TableHeaderItem,
    cellIndex: number,
  ) => {
    if (header.type === 'checkbox') {
      return (
        <TouchableOpacity
          key={cellIndex}
          style={[styles.cell, {width: header.width}, styles.headerCell]}>
          <CheckBox
            value={checkedItems[item.id] || false}
            onValueChange={() => toggleCheckbox(item.id)}
            tintColors={{true: 'blue'}}
          />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          key={cellIndex}
          style={[
            styles.cell,
            {width: header.width},
            cellIndex === 0 && styles.headerCell,
          ]}>
          <Text style={styles.cellText}>
            {item[header.value] ? String(item[header.value]) : ''}
          </Text>
        </TouchableOpacity>
      );
    }
  };

  const renderItem = ({item, index}: {item: any; index: number}) => {
    return (
      <View
        style={[
          styles.row,
          index % 2 === 0 ? styles.whiteRow : styles.offWhiteRow,
        ]}>
        {headers.map((header, cellIndex) =>
          renderCell(item, header, cellIndex),
        )}
      </View>
    );
  };

  const listHeaderComponent = () => {
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

  const itemSeparatorComponent = () => {
    return <View style={[styles.horizontalLine, styles.bottomBorderWidth]} />;
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      nestedScrollEnabled
      bounces={false}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListHeaderComponent={listHeaderComponent}
        ItemSeparatorComponent={itemSeparatorComponent}
        bounces={false}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  cell: {
    borderWidth: 1,
    borderColor: colors.lightgrey,
    paddingHorizontal: 5,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
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
