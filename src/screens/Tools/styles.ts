import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  parent: {
    marginVertical: 8,
  },
  parentView: {
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: colors.offWhite,
  },
  content: {
    marginHorizontal: 16,
    marginVertical: 16,
    color: 'black',
  },
  parents: {
    borderBottomWidth: 0,
  },
  rightArrowParent:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  rightArrow:{
    height:15,
    width:15,
    alignItems: 'flex-end',
    marginTop:-33,
    marginRight:5,
  }
});
export default styles;
