import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.white,
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20,
    gap: 5,
  },
  deletesButton: {
    backgroundColor: colors.red,
  },
  table: {
    marginTop: 20,
  },
});
export default styles;
