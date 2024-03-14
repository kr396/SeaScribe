import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.white,
  },
  contentParent: {
    color: colors.black,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: 18,
  },
  contentParentView: {
    marginTop: 10,
  },
  content: {
    color: colors.black,
    marginTop: 10,
  },
  contentChilde: {
    fontWeight: 'bold',
  },
  address: {
    color: colors.black,
  },
  themeButton: {
    borderRadius: 0,
  },
});

export default styles;
