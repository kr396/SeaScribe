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
  textParent:{
    marginTop:20
  }
});
export default styles
