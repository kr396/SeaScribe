import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 16,
  },
  seaScribeText: {
    fontSize: 22,
    color: colors.black,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  boemImg: {
    marginTop: 10,
    alignSelf: 'center',
  },
  textParent: {
    color: colors.black,
    fontWeight: 'bold',
    marginTop: 10,
  },
  text: {
    color: colors.black,
  },
  openSourceText: {
    color: colors.black,
    marginTop: 10,
  },
  content: {
    marginTop: 15,
  },
  policyParent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  policyParent1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 2,
    borderWidth: 1,
    borderColor: colors.lightgrey,
    backgroundColor: colors.offWhite,
  },
  titleStyle: {
    color: colors.black,
  },
  layerNameText: {
    width: '15%',
  },
  mappingData: {
    width: '25%',
  },
  mappingDataText: {
    color: colors.black,
    marginTop: 50,
  },
  buttonParent: {
    marginTop: 50,
  },
});

export default styles;
