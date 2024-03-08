import {View, Text} from 'react-native';
import styles from './styles';
import { ThemeButton } from '../../components';
const EditObservers = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
      <ThemeButton title='Process Deletes'style={styles.deletesButton}/>
    </View>
    </View>
  );
};
export default EditObservers;
