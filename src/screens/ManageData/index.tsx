import React, {FC} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
  SafeAreaView,
} from 'react-native';
import {RootStackScreenProps} from '../../navigation/types';
import {IManageData} from '../../types';
import {images} from '../../constants/images';
import styles from './styles';

const ManageData: FC<RootStackScreenProps<'ManageData'>> = ({navigation}) => {
  const data: IManageData[] = [
    {id: '1', title: 'Edit Ancillary Fields', route: 'EditAncillaryFields'},
    {id: '2', title: 'Edit Survey Platforms', route: 'EditSurveyPlatforms'},
    {id: '3', title: 'Edit Observers', route: 'EditObservers'},
    {id: '4', title: 'Edit Methodologies', route: 'EditMethodologies'},
    {id: '5', title: 'Edit Hotkey Groups', route: 'EditHotkeyGroups'},
    {
      id: '6',
      title: 'Reset All Settings to Defaults',
      route: '',
      title2: 'Reset All Settings to Defaults',
      showAlert: true,
      message:
        'If you continue, All settings will be reset to their default values. Do you want to continue?',
    },
    {
      id: '7',
      title: 'Delete and Recreate Database',
      route: '',
      title2: 'Delete All Tables',
      showAlert: true,
      message:
        'If you continue, All tables will be deleted from the database. After that, you will be redirected to the main page and the database will be reinitialized. Do you want to continue?',
    },
    {id: '8', title: 'View GPS Test Data', route: 'ViewGPSTestData'},
    {id: '9', title: 'Recovery', route: 'Recovery', hasArrow: true},
  ];

  const handleItemPress = (item: IManageData) => {
    if (item.showAlert) {
      Alert.alert(
        item.title2!,
        item.message!,
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => {},
          },
        ],
        {cancelable: false},
      );
    } else {
      navigation.navigate(item.route);
    }
  };

  const renderItem = ({item, index}: {item: IManageData; index: number}) => (
    <View style={[styles.itemContainer, index === 0 && styles.firstItem]}>
      <TouchableOpacity onPress={() => handleItemPress(item)}>
        <View style={styles.item}>
          <Text style={styles.parentsText}>{item.title}</Text>
          {item.hasArrow && (
            <View style={styles.rightArrowParent}>
              <Image source={images.rightArrow} style={styles.rightArrow} />
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          bounces={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default ManageData;
