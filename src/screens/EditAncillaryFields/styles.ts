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
    marginTop: 10,
    flexDirection: 'row',
  },
  newButton: {
    borderRadius: 5,
    width: 70,
  },
  deletesButton: {
    backgroundColor: colors.red,
    borderRadius: 5,
    marginLeft: 5,
  },
  table: {
    marginTop: 20,
  },
});
export default styles;
