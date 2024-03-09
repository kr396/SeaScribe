import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.white,
  },
  textDecoration: {
    elevation: 1,
  },
  text: {
    padding: 10,
    color: colors.black,
  },
  backupRestoreParent: {
    borderWidth: 1,
    borderColor: colors.offWhite,
  },
  backupRestore: {
    padding: 15,
    color: colors.black,
  },
  margeBorder: {
    borderBottomWidth: 0,
  },
  parents: {
    marginTop: 20,
  },
  textParent: {
    alignItems: 'center',
    justifyContent: 'space-between',
    bottom: 10,
    marginTop: 20,
    marginLeft: 5,
  },
  texts: {
    color: colors.black,
    fontSize: 14,
  },
  textHere: {
    color: colors.primary,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});
export default styles;
