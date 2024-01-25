import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

import {colors} from '../constants';

type Props = {
  items: any[];
  onPress?: () => void;
};

const AncillaryFieldsView: FC<Props> = ({items, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.row}>
        <Text>Ancillary Fields</Text>
        {typeof items?.length === 'number' ? (
          <View style={styles.badge}>
            <Text style={styles.numberCount}>{items.length}</Text>
          </View>
        ) : null}
      </View>
      <Text style={styles.itemText}>
        {items.map(item => item.name).join(', ')}
      </Text>
    </Pressable>
  );
};

export default AncillaryFieldsView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderColor: colors.offWhite,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  badge: {
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 8,
    backgroundColor: colors.primary,
  },
  numberCount: {
    color: colors.white,
    fontSize: 11,
  },
  itemText: {
    marginHorizontal: 10,
    fontStyle: 'italic',
    opacity: 0.8,
  },
});
