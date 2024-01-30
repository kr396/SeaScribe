import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollview: {
    flex: 1,
    paddingHorizontal: 8,
    gap: 8,
    paddingVertical: 16,
  },
  dateTimeView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 16,
    borderWidth: 1,
    borderColor: colors.offWhite,
  },
  icon: {
    height: 40,
    width: 40,
  },
  timeTextContainer: {
    flex: 1,
    gap: 8,
  },
  redText: {
    color: colors.red,
  },
  actonButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 16,
    marginVertical: 16,
    alignItems: 'center',
  },
  actionButton: {
    borderRadius: 0,
  },
});

export default styles;
