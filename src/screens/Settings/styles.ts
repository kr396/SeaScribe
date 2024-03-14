import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.white,
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
    marginTop: 10,
    borderWidth: 1,
    height: 50,
    borderColor: colors.offWhite,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    paddingLeft: 10,
    color: colors.black,
    alignSelf: 'center',
  },
  textInput: {
    backgroundColor: colors.offWhite,
    borderRadius: 15,
    height: 40,
    width: 40,
    padding: 8,
    margin: 5,
  },
  gpsTextInput: {
    backgroundColor: colors.offWhite,
    borderRadius: 10,
    height: 30,
    width: 160,
    padding: 8,
    margin: 5,
    marginTop: 10,
  },
  gpsMaximumAgeTextInput: {
    backgroundColor: colors.offWhite,
    borderRadius: 10,
    height: 30,
    width: 120,
    padding: 8,
    margin: 5,
    marginTop: 10,
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
  sliderContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  slider: {
    width: '40%',
  },
  circleRadiusSlider: {
    width: '30%',
    paddingRight: 60,
  },
  sliderText: {
    color: colors.black,
  },
  sliderLable: {
    justifyContent: 'center',
  },
  thumbTintColor: {
    color: colors.offWhite,
  },
});
export default styles;
