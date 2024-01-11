import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  content: {
    gap: 8,
    margin: 16,
    zIndex: 999,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginHorizontal: '10%',
    gap: 20,
    marginVertical: 20,
  },
  buttonStyle: {
    borderRadius: 0,
  },
});

export default styles;
