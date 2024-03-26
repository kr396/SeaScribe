import {colors} from '../../constants';
import {verticalScale} from '../../utils/scale';
import {createStyleSheet} from 'react-native-unistyles';

const stylesheet = createStyleSheet({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: '7%',
    paddingTop: 24,
  },
  buttonContainer: {
    justifyContent: 'space-between',
    gap: verticalScale(25),
  },
  image: {
    alignSelf: 'center',
    marginVertical: verticalScale(24),
  },
  buttonStyle: {},
});

export default stylesheet;
