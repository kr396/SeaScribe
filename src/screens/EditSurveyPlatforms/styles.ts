import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.white,
  },
  deletesButton: {
    height: 40,
    width: 160,
    backgroundColor: colors.red,
    borderRadius: 5,
    marginLeft: 10,
    marginTop: 10,
  },
  checkbox1: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  checkboxparent: {
    height: 20,
    width: 20,
    borderRadius: 2,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkbox: {
    height: 15,
    width: 15,
    backgroundColor: 'blue',
    borderRadius: 2,
  },
});
export default styles;