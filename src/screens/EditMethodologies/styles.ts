import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.white,
  },
  text: {
    color: colors.black,
  },
  buttonParent: {
    marginTop: 10,
  },
  deleteButton: {
    height: 40,
    width: 160,
    backgroundColor: colors.red,
    borderRadius: 5,
    marginTop: 10,
  },
});
export default styles;
