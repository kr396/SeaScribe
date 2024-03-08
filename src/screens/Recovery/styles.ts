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
    borderColor: '#E7E7E7',
  },
  text: {
    padding: 10,
    color: 'black',
  },
  backupRestoreParent: {
    borderWidth: 1,
    borderColor: colors.offWhite,
  },
  backupRestore: {
    padding: 15,
    color: 'black',
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
    color: '#090A0A',
    fontSize: 14,
  },
  textHere: {
    color: '#2770EE',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});
export default styles;
