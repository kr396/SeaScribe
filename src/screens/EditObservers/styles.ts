import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor:colors.white
  },
  deletesButton: {
    height: 40,
    width: 160,
    backgroundColor: '#ff0000',
    borderRadius: 5,
    marginTop:10
  },
});
export default styles