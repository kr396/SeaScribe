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
    gap: 16,
    marginHorizontal: 8,
    marginVertical: 8,
  },
  observerContainer: {
    gap: 16,
    marginBottom: 12,
  },
  observerText: {
    marginBottom: 4,
  },
  observers: {
    marginTop: 16,
    zIndex: 996,
  },
  gpsButton: {
    borderRadius: 0,
    marginHorizontal: 8,
    marginTop: 16,
  },
  buttonContaimer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 16,
  },
});

export default styles;
