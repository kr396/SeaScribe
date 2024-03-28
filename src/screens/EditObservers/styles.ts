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
  deletesButton: {
    height: 40,
    alignSelf: 'flex-start',
    backgroundColor: colors.red,
    marginTop: 10,
    marginBottom: 20,
  },
});
export default styles;
