import {View, Text} from 'react-native';
import styles from './styles';
import {ThemeButton} from '../../components';

const EditMethodologies = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Note that changing methodology ancillary fields will not change the
        ancillary fields associated with any existing survey,even if the survey
        uses the methodology in question.
      </Text>
      <View style={styles.buttonParent}>
        <ThemeButton title="Process Deletes" style={styles.deleteButton} />
      </View>
    </View>
  );
};
export default EditMethodologies;
