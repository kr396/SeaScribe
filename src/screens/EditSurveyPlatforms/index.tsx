import {View, ScrollView} from 'react-native';
import styles from './styles';
import {Table, ThemeButton} from '../../components';
import {useSelector} from 'react-redux';
import {getSurveyPlatforms} from '../../store/slices/appSlice';

const EditSurveyPlatforms = () => {
  const surveyPlatforms = useSelector(getSurveyPlatforms) || [];
  const editsurveyplatformsheader = [
    {label: 'Del?', value: 'del', width: '20%'},
    {label: 'Name', value: 'label', width: '30%'},
    {label: 'Type', value: 'surveyPlatformTypeId', width: '50%'},
  ];
  return (
    <View style={styles.container}>
      <ScrollView>
        <ThemeButton title="Process Deletes" style={styles.deletesButton} />
        <Table headers={editsurveyplatformsheader} data={surveyPlatforms} />
      </ScrollView>
    </View>
  );
};

export default EditSurveyPlatforms;
