import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.white,
  },
  textDecoration: {
    elevation: 0.5,
    borderColor: colors.offWhite,
  },
  text: {
    padding: 10,
    color: colors.black,
  },
  textParent: {
    marginTop: 20,
  },
  imageParent: {
    padding: 10,
    overflow: 'hidden',
  },
});
export default styles;
