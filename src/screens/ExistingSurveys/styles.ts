import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.white,
  },
  boldText: {
    fontWeight: 'bold',
    color: colors.black,
    fontSize: 15,
  },
  buttonParent: {
    marginTop: 20,
  },
  startTransect: {
    marginTop: 20,
    height: 50,
    width: 180,
    borderRadius: 5,
  },
  resumeRecentTransect: {
    marginTop: 10,
    height: 50,
    width: 270,
    borderRadius: 5,
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  horizontalButtons: {
    marginRight: 5,
    borderRadius: 5,
    height: 50,
  },
  deleteButton: {
    height: 50,
    borderRadius: 5,
    backgroundColor: colors.red,
  },
  resumeSelectedTransect: {
    height: 50,
    width: 250,
    borderRadius: 5,
    marginTop: 10,
  },
  delete: {
    height: 50,
    borderRadius: 5,
    backgroundColor: colors.red,
    marginTop: 10,
    width: 85,
  },
});
export default styles;
