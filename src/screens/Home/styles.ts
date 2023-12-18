import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: '7%',
    paddingTop: 24,
  },
  buttonContainer: {
    justifyContent: 'space-between',
    gap: 24,
  },
  image: {
    alignSelf: 'center',
    marginVertical: 32,
  },
});

export default styles;
