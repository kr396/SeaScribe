import {View, Text} from 'react-native';
import styles from './styles';
import {ThemeButton} from '../../components';

const EditSurveyPlatforms = () => {
  return (
    <View style={styles.container}>
      <ThemeButton title="Process Deletes" style={styles.deletesButton} />
    </View>
  );
};
export default EditSurveyPlatforms;
