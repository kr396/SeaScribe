import React, {useState} from 'react';
import {
  View,
  Text,
  Switch,
  TextInput,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {images} from '../../constants/images';
import {ThemeButton, DropDown, InputText} from '../../components';
import styles from './styles';
import Slider from '@react-native-community/slider';
import {Setting} from '../../types';
import {RootStackScreenProps} from '../../navigation/types';
import {CustomColorPicker} from '../../components';
import CustomSwitch from '../../components/Switch';
import DropboxModel from '../../components/CustomDropbox';
import Popup from '../../components/Popup';

const Settings: React.FC<RootStackScreenProps<'Settings'>> = ({navigation}) => {
  const [dropboxModalVisible, setDropboxModalVisible] = useState(false);
  const [agePopup, setAgePopup] = useState(false);
  const [behaviorPopup, setBehaviorPopup] = useState(false);
  const [plumagePopup, setPlumagePopup] = useState(false);
  const [color, setColor] = useState<{[key: string]: string}>({
    '12': '#0000FF',
    '13': '#FF0000',
    '14': '#FF0000',
  });
  const [switchStates, setSwitchStates] = useState<{
    [key: string]: boolean;
  }>({
    atomaticgpspollingswitch: false,
    enablehighaccuracyswitch: false,
    recordfailuresswitch: false,
    followletestgpsswitch: false,
    showlowestzoomswitch: false,
    showlabletilesswitch: false,
    showquickspeciesbarswitch: false,
    separatehotkeyswitch: false,
    displayhorizontalswitch: false,
    persistentCheckactivatswitch: false,
    scrolltopersistentswitch: false,
    debuggingmodeswitch: false,
    logeverypositionalswitch: false,
  });

  const handlePress = (itemId: string) => {
    if (itemId === '45') {
      navigation.navigate('PrivacyPolicy');
    } else if (itemId === '46') {
      navigation.navigate('About');
    } else if (itemId === '39') {
      setDropboxModalVisible(true);
    } else if (itemId === '31') {
      setAgePopup(true);
    } else if (itemId === '32') {
      setBehaviorPopup(true);
    } else if (itemId === '33') {
      setPlumagePopup(true);
    }
  };
  const handleClosePopup = () => {
    setAgePopup(false);
  };
  const plumageHotkeysPopup = () => {
    setPlumagePopup(false);
  };
  const behavioraHotkeys = () => {
    setBehaviorPopup(false);
  };
  const toggleSwitch = (switchName: string) => {
    setSwitchStates(prevState => {
      const updatedSwitchStates = {
        ...prevState,
        [switchName]: !prevState[switchName],
      };
      return updatedSwitchStates;
    });
  };

  const handleColorSelect = (color: string, settingId: string) => {
    setColor(prevState => ({
      ...prevState,
      [settingId]: color,
    }));
  };

  const zIndexArray = {
    4: 1,
    42: 2,
    43: 3,
  };

  const data: Setting[] = [
    {id: '1', title: 'GPS', type: 'sectionheader'},
    {
      id: '2',
      title: 'Atomatic GPS Polling A...',
      type: 'switch',
    },
    {id: '3', title: 'Atomatic GPS Polling Interval (s)', type: 'textinput'},
    {id: '4', title: 'Atomatic GPS Polling', type: 'dropdown'},
    {
      id: '5',
      title: 'Enable high accuracy?',
      type: 'switch',
    },
    {id: '6', title: 'GPS Timeout (s)', type: 'textinput'},
    {id: '7', title: 'GPS Maximum Age (S)', type: 'textinput'},
    {
      id: '8',
      title: 'Record failures during p...',
      type: 'switch',
    },
    {id: '9', title: 'Mapping', type: 'sectionheader'},
    {id: '10', title: 'Initial Zoom', type: 'slider'},
    {
      id: '11',
      title: 'Follow Letest GPS Logg...',
      type: 'switch',
    },
    {id: '12', title: 'Course Line Color', type: 'colorpicker'},
    {id: '13', title: 'Circle Rim Color', type: 'colorpicker'},
    {id: '14', title: 'Circle Fill Color', type: 'colorpicker'},
    {id: '15', title: 'Circle Fill Opacity', type: 'slider'},
    {
      id: '16',
      title: 'Circle Radius Multiplier',
      type: 'slider',
    },
    {id: '17', title: 'Circle Radius Miminum', type: 'slider'},
    {id: '18', title: 'Circle Radius Maximum', type: 'slider'},
    {id: '19', title: 'Map Cache Navigator', type: 'sectionheader'},
    {
      id: '20',
      title: 'Show Lowest Zoom Only',
      type: 'switch',
    },
    {id: '21', title: 'Show Lable Tiles', type: 'switch'},
    {id: '22', title: 'User Interface', type: 'sectionheader'},
    {id: '23', title: 'Divider Width (pixels)', type: 'slider'},
    {id: '24', title: 'Hotkeys', type: 'sectionheader'},
    {
      id: '25',
      title: 'Show Quick Species Bar',
      type: 'switch',
    },
    {id: '26', title: 'Max Quick Species Button Count', type: 'textinput'},
    {
      id: '27',
      title: 'Separate Hotkey Groups...',
      type: 'switch',
    },
    {
      id: '28',
      title: 'Display Horizontal Rule...',
      type: 'switch',
    },
    {id: '29', title: 'Hotkey Button Min Width (pixels) 80', type: 'custom'},
    {id: '30', title: 'Hotkey Button MIn Height (pixels) 40', type: 'custom'},
    {id: '31', title: 'Age', type: 'custom'},
    {id: '32', title: 'Behavior', type: 'custom'},
    {id: '33', title: 'Plumage', type: 'custom'},
    {id: '34', title: 'Alerts', type: 'sectionheader'},
    {
      id: '35',
      title: 'Persistent Check Activat..',
      type: 'switch',
    },
    {id: '36', title: 'Persistent Check Interval (S)', type: 'textinput'},
    {
      id: '37',
      title: 'Scroll to Persistent?',
      type: 'switch',
    },
    {id: '38', title: 'Export', type: 'sectionheader'},
    {id: '39', title: 'Detach from Dropbox Account', type: 'custom'},
    {id: '40', title: 'System', type: 'sectionheader'},
    {id: '41', title: 'Debugging Mode?', type: 'switch'},
    {id: '42', title: 'Logging Level', type: 'dropdown'},
    {id: '43', title: 'Persistent Log Threshold', type: 'dropdown'},
    {
      id: '44',
      title: 'Log every positional GP...',
      type: 'switch',
    },
    {id: '45', title: 'Privacy Policy', type: 'custom', showRightArrow: true},
    {id: '46', title: 'About', type: 'custom', showRightArrow: true},
  ];
  const popupData = [
    {id: '1', label: 'Ad - Adult [Ad]'},
    {id: '2', label: 'imm - Immature [Imm]'},
    {id: '3', label: 'Juv - Juvenile [Juv]'},
    {id: '4', label: 'Subad - subadult [Subad]'},
    {id: '5', label: '1C-First cycle [1C]'},
    {id: '6', label: '2C - Second cycle [2C]'},
    {id: '7', label: '3C - Third cycle [3C]'},
    {id: '8', label: '4C - Fourth year [4C]'},
    {id: '9', label: '1Y - First year [1Y]'},
    {id: '10', label: '2Y - Second year [2Y]'},
    {id: '11', label: '3Y - Third year [3Y]'},
    {id: '12', label: '4Y - Fourth year [4Y]'},
    {id: '13', label: '5Y - Fifth year [5Y]'},
    {id: '14', label: '6Y - Sixth year [6Y]'},
    {id: '15', label: '7Y - Seventh year [7Y]'},
    {id: '16', label: 'Unknown - Unknown [Unk]'},
  ];
  const behaviorData = [
    {
      id: 1,
      label: 'Flying',
      code: 'Fly',
      description: 'Include flight direction',
      notes:
        'Flying - when a bird or bat is flying be sure to record flight direction',
    },
    {
      id: 2,
      label: 'Sitting',
      code: 'Sit',
      description: 'Bird sitting on water or object',
      notes:
        'Bird sitting on the water. If sitting on an object use this code and make a note saying what it is on',
    },
    {
      id: 3,
      label: 'Milling',
      code: 'Mill',
      description: 'Circling above water, potentially feeding',
      notes:
        'Not flying in any specific direction but circling around above the water. This can indicate birds in a feeding flock',
    },
    {
      id: 4,
      label: 'Feeding',
      code: 'Feed',
      description: 'Actively feeding',
      notes: 'Active feeding behaviors observed. More specific codes below',
    },
    {
      id: 5,
      label: 'Plunge Diving',
      code: 'PD',
      description: 'Specific to birds that feed by plunge diving',
      notes:
        'Specific to birds that feed by plunge diving (gannets, terns, sometimes shearwaters or gulls)',
    },
    {
      id: 6,
      label: 'Pattering',
      code: 'Pat',
      description:
        'Flying low and hitting the water’s surface with feet (Storm-Petrels)',
      notes:
        'Flying low and hitting the water’s surface with feet, as Storm-Petrels',
    },
    {
      id: 7,
      label: 'Scavenging',
      code: 'Scav',
      description: 'Using any method to eat discarded fish and offal',
      notes:
        'foraging at fishing vessel, deploying any method to obtain discarded fish and offal; Storm-Petrels in the wake of trawlers picking up small morsels should be excluded',
    },
    {
      id: 8,
      label: 'Kleptoparasitizing',
      code: 'Klepto',
      description: 'Pursuit to steal food from another bird',
      notes: 'Pursuit to steal food from another bird',
    },
    {
      id: 9,
      label: 'Carrying fish',
      code: 'Carry',
      description: 'Carrying fish towards the colony',
      notes: 'holding or carrying fish towards the colony',
    },
    {
      id: 10,
      label: 'Diving',
      code: 'Dive',
      description: 'Animal at the surface dives under water',
      notes: 'Animal at the surface dives under water',
    },
    {
      id: 11,
      label: 'Taking Off',
      code: 'TO',
      description: 'Bird taking off from the water',
      notes: 'Bird taking off from the water',
    },
    {
      id: 12,
      label: 'Following',
      code: 'Follow',
      description:
        'Use when bird has been counted once and continues to follow boat',
      notes:
        'Bird following the boat. This code should be used when a bird has already been counted once, and continues to follow along with the boat',
    },
    {
      id: 13,
      label: 'Resting',
      code: 'Rest',
      description: 'Resting or apparently sleeping',
      notes: 'bird resting or apparently sleeping - sleeping at sea',
    },
    {
      id: 14,
      label: 'Stationary',
      code: 'Stat',
      description: 'Non-avian animal',
      notes: 'Non-avian animal stationary in the water',
    },
    {
      id: 15,
      label: 'Swimming',
      code: 'Swim',
      description: 'Non-avian animal, indicate direction',
      notes: 'Non-avian animal swimming - indicate direction of movement',
    },
    {
      id: 16,
      label: 'Porpoising',
      code: 'Porp',
      description:
        'Moving through water like porpoise, up & down through water',
      notes:
        'Marine mammal moving through the water like a porpoise, up and down through the water',
    },
    {
      id: 17,
      label: 'Breaching',
      code: 'Breach',
      description:
        'Whale rising up, breaking through surface, splashing back down into water',
      notes:
        'Whale rising up and breaking through the surface of the water and splashing back down into the water',
    },
    {
      id: 18,
      label: 'Blowing',
      code: 'Blow',
      description: 'Whale blowing from its spout at the surface',
      notes: 'Whale blowing from its spout at the surface',
    },
    {
      id: 19,
      label: 'Under attack',
      code: 'UA',
      description: 'Attacked by kleptoparasitizing bird in air or on water',
      notes: 'Attacked by kleptoparasitizing bird in air or on water',
    },
    {
      id: 20,
      label: 'Injured',
      code: 'Inj',
      description: 'Clear injuries on bird (e.g. broken wing)',
      notes: 'Clear injuries on bird such as broken wing or bleeding wound',
    },
    {
      id: 21,
      label: 'Oiled',
      code: 'Oil',
      description: 'Contaminated with oil',
      notes: 'bird contaminated with oil',
    },
    {
      id: 22,
      label: 'Sick/unwell',
      code: 'Sick',
      description: 'Weakened individual but no obvious injury',
      notes:
        'weakened individuals not behaving as normal, healthy birds, but without obvious injuries',
    },
    {
      id: 23,
      label: 'Dead',
      code: 'Dead',
      description: 'Dead animal',
      notes: 'Dead animal',
    },
    {
      id: 24,
      label: 'Unknown',
      code: 'Unk',
      description: 'Unknown',
      notes: 'Unknown',
    },
    {id: 25, label: 'Other', code: 'Oth', description: 'Other', notes: 'Other'},
  ];
  const plumageData = [
    {id: 1, label: 'B - Breeding/Alternate spring and summer plumage'},
    {id: 2, label: 'NB - Non-breeding/Basic fall and winter plumage'},
    {id: 3, label: 'M - Flight feathers moulting'},
    {id: 4, label: 'D - Dark phase'},
    {id: 5, label: 'L - Light phase'},
    {id: 6, label: 'GP1 - Gannet plumage 1'},
    {id: 7, label: 'GP2 - Gannet plumage 2'},
    {id: 8, label: 'GP3 - Gannet plumage 3'},
    {id: 9, label: 'GP4 - Gannet plumage 4'},
    {id: 10, label: 'GP5 - Gannet plumage 5'},
    {id: 11, label: 'GP6 - Gannet plumage 6'},
    {id: 12, label: 'Unknown - Unknown'},
  ];

  const renderItem = ({item}: {item: Setting}) => {
    const zIndex = zIndexArray[item.id];

    switch (item.type) {
      case 'sectionheader':
        return (
          <View style={styles.boldTextParent}>
            <Text style={styles.boldText}>{item.title}</Text>
          </View>
        );
      case 'switch':
        return (
          <CustomSwitch
            label={item.title}
            value={switchStates[item.id]}
            onToggle={() => toggleSwitch(item.id)}
            thumbColor="white"
          />
        );
      case 'textinput':
        return (
          <InputText
            lable={item.title}
            inputProps={{
              style: styles.textInput,
            }}
            containerStyle={styles.inputprop}
          />
        );
      case 'slider':
        return (
          <View style={styles.textParent}>
            <Text style={styles.text}>{item.title}</Text>

            <Slider
              style={styles.slider}
              minimumValue={10}
              maximumValue={200}
            />
          </View>
        );
      case 'colorpicker':
        return (
          <CustomColorPicker
            title={item.title}
            style={styles.textParent}
            value={color[item.id]}
            onSelectColor={color => handleColorSelect(color, item.id)}
          />
        );
      case 'dropdown':
        return (
          <DropDown
            style={[styles.dropDown, zIndex]}
            items={[
              {label: 'Item 1', value: 'item1'},
              {label: 'Item 2', value: 'item2'},
            ]}
            value={null}
            lable={item.title}
          />
        );
      case 'custom':
        return (
          <TouchableOpacity
            style={styles.textParent}
            onPress={() => handlePress(item.id)}>
            <Text style={styles.text}>{item.title}</Text>
            {item.showRightArrow && (
              <View style={styles.rightArrowParent}>
                <Image
                  source={images.rightArrow}
                  style={styles.rightArrow}
                  resizeMode="contain"
                />
              </View>
            )}
          </TouchableOpacity>
        );
      default:
        return null;
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.container}
        />
        <View style={styles.buttons}>
          <ThemeButton title="Save" style={styles.saveButton} />
          <ThemeButton
            title="Reset to Defaults"
            style={styles.resetToDefaultButton}
          />
        </View>
      </View>
      {dropboxModalVisible && (
        <DropboxModel
          visible={dropboxModalVisible}
          onCancel={() => setDropboxModalVisible(false)}
          onConfirm={() => {
            setDropboxModalVisible(false);
          }}
        />
      )}
      {agePopup && (
        <Popup
          visible={agePopup}
          title={'Edit Age Hotkeys'}
          data={popupData}
          onRequestClose={handleClosePopup}
        />
      )}

      {behaviorPopup && (
        <Popup
          visible={behaviorPopup}
          title={'Edit Behavior Hotkeys'}
          data={behaviorData}
          onRequestClose={behavioraHotkeys}
        />
      )}
      {plumagePopup && (
        <Popup
          visible={plumagePopup}
          title={'Edit Behavior Hotkeys'}
          data={plumageData}
          onRequestClose={plumageHotkeysPopup}
        />
      )}
    </ScrollView>
  );
};

export default Settings;
