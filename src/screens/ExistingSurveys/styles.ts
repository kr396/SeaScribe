import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.white,
  },
  boldText: {
    fontWeight: 'bold',
    color: colors.black,
    fontSize: 15,
  },
  buttonParent: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 16,
    marginTop: 20,
  },
  deleteButton: {
    borderRadius: 5,
    backgroundColor: colors.red,
  },
});
export default styles;
