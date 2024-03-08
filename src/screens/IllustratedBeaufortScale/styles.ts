import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 24,
  },
  textParent: {
    marginTop: 30,
  },
  text: {
    fontWeight: 'bold',
    color: 'black',
    marginTop:20
  },
  boldText: {
    marginTop: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  content: {
    marginTop: 25,
    color: 'black',
  },
  poster: {
    marginTop:50,
    height:322,
    width:'100%',
    bottom:20
  },
});
export default styles;
