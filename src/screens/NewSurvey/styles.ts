import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  input: {
    marginHorizontal: 8,
  },
  content: {
    gap: 8,
    marginHorizontal: 8,
  },
  observerContainer: {
    marginBottom: 12,
  },
  observerText: {
    marginBottom: 4,
  },
});

export default styles;
