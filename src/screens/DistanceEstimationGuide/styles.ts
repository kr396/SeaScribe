import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  parents: {
    borderWidth: 1,
    marginVertical: 16,
    marginHorizontal: 16,
    borderColor: colors.offWhite,
  },
  parentsInvalidInput: {
    borderWidth: 1,
    marginVertical: 16,
    marginHorizontal: 16,
    borderColor: colors.red,
  },
  parentsText: {
    marginVertical: 16,
    marginHorizontal: 16,
    color: colors.black,
  },
  inputText: {
    backgroundColor: colors.offWhite,
    marginHorizontal: 16,
    borderRadius: 10,
    height: 30,
    paddingLeft: 10,
    paddingBottom: 0,
    paddingTop: 0,
    marginBottom: 8,
    width: '95%',
  },
  buttonParent: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32,
  },
  buttonCalculate: {
    height: 50,
    width: 120,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.offWhite,
  },
  buttonClear: {
    height: 50,
    width: 80,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.offWhite,
    marginLeft: 10,
  },
  calculateButtonText: {
    marginTop: 11,
    textAlign: 'center',
    color: colors.offWhite,
  },
  outPutTable: {
    marginTop: 100,
  },
});

export default styles;
