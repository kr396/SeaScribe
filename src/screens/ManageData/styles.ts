import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.white,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: colors.offWhite,
    borderTopWidth: 0,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  firstItem: {
    borderTopWidth: 1,
  },
  item: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightArrow: {
    height: 15,
    width: 15,
  },
  parentsText: {
    color: colors.black,
  },
  rightArrowParent: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
});

export default styles;
