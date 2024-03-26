import {createStyleSheet} from 'react-native-unistyles';
import {colors} from '../../constants';

const stylesheet = createStyleSheet({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.white,
  },
  itemContainer: {
    marginTop: 10,
  },
  boldTextParent: {
    marginTop: 20,
    backgroundColor: colors.offWhite,
    borderWidth: 1,
    height: 40,
    borderColor: colors.offWhite,
    justifyContent: 'center',
  },
  textParent: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderColor: colors.offWhite,
  },
  text: {
    paddingLeft: 10,
    color: colors.black,
    alignSelf: 'center',
  },
  inputprop: {
    height: 60,
  },
  boldText: {
    color: colors.black,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  rightArrow: {
    height: 15,
    width: 15,
    marginTop: -32,
    marginRight: 5,
  },
  rightArrowParent: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  buttons: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  saveButton: {
    borderRadius: 5,
    width: 70,
  },
  resetToDefaultButton: {
    backgroundColor: colors.red,
    borderRadius: 5,
    marginLeft: 5,
  },
  slider: {
    width: '20%',
  },
  textInput: {
    fontSize: 14,
    flex: 0.2,
    padding: 0,
  },
  dropDown: {
    marginTop: 10,
  },
  content: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default stylesheet;
