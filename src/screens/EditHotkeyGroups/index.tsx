import {View, Text} from 'react-native';
import styles from './styles';
import { ThemeButton } from '../../components';
const EditHotkeyGroups = () => {
  return (
    <View style={styles.container}>
    <View style={styles.buttons}>
      <ThemeButton title="new" style={styles.newButton} />
      <ThemeButton title="Process Deletes" style={styles.deletesButton} />
    </View>
  </View>
  );
};
export default EditHotkeyGroups;
