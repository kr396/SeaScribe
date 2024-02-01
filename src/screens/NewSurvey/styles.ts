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
    borderRadius: 4,
    marginHorizontal: 8,
    marginTop: 16,
  },
  buttonContaimer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 16,
  },
  gpsLoadingOverlay: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  testingGPSContainer: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: '8%',
    paddingVertical: '5%',
    borderRadius: 8,
  },
  testingGPSText: {
    color: colors.white,
  },
});

export default styles;
