import React, {useState} from 'react';
import {
  View,
  Text,
  Switch,
  TextInput,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import {images} from '../../constants/images';
import {ThemeButton} from '../../components';
import styles from './styles';

const Settings = () => {
  const [switchStates, setSwitchStates] = useState({
    MySwitch: false,
    MySwitch1: false,
    MySwitch2: false,
    MySwitch3: false,
    MySwitch4: false,
    MySwitch5: false,
    MySwitch6: false,
    MySwitch7: false,
    MySwitch8: false,
    MySwitch9: false,
    MySwitch10: false,
    MySwitch11: false,
    MySwitch12: false,
  });

  const toggleSwitch = switchName => {
    setSwitchStates(prevState => ({
      ...prevState,
      [switchName]: !prevState[switchName],
    }));
  };

  const data = [
    {id: '1', title: 'GPS', isBold: true},
    {id: '2', title: 'Atomatic GPS Polling A...', switchName: 'MySwitch'},
    {id: '3', title: 'Atomatic GPS Polling Interval (s)', input: true},
    {id: '4', title: 'Atomatic GPS Polling'},
    {id: '5', title: 'Enable high accuracy?', switchName: 'MySwitch1'},
    {id: '6', title: 'GPS Timeout (s)', input1: true},
    {id: '7', title: 'GPS Maximum Age (S)', input2: true},
    {id: '8', title: 'Record failures during p...', switchName: 'MySwitch2'},

    {id: '9', title: 'Mapping', isBold: true},
    {id: '10', title: 'Initial Zoom'},
    {id: '11', title: 'Follow Letest GPS Logg...', switchName: 'MySwitch3'},
    {id: '12', title: 'Course Line Color'},
    {id: '13', title: 'Circle Rim Color'},
    {id: '14', title: 'Circle Fill Color'},
    {id: '15', title: 'Circle Fill Opacity'},
    {id: '16', title: 'Circle Radius Multiplier'},
    {id: '17', title: 'Circle Radius Miminum'},
    {id: '18', title: 'Circle Radius Maximum'},

    {id: '19', title: 'Map Cache Navigator', isBold: true},
    {id: '20', title: 'Show Lowest Zoom Only', switchName: 'MySwitch4'},
    {id: '21', title: 'Show Lable Tiles', switchName: 'MySwitch5'},

    {id: '22', title: 'User Interface', isBold: true},
    {id: '23', title: 'Divider Width (pixels)'},

    {id: '24', title: 'Hotkeys', isBold: true},
    {id: '25', title: 'Show Quick Species Bar', switchName: 'MySwitch6'},
    {id: '26', title: 'Max Quick Species Button Count', input: true},
    {id: '27', title: 'Separate Hotkey Groups...', switchName: 'MySwitch7'},
    {id: '28', title: 'Display Horizontal Rule...', switchName: 'MySwitch8'},
    {id: '29', title: 'Hotkey Button Min Width (pixels) 80'},
    {id: '30', title: 'Hotkey Button MIn Height (pixels) 40'},
    {id: '31', title: 'Age'},
    {id: '32', title: 'Behavior'},
    {id: '33', title: 'Plumage'},

    {id: '34', title: 'Alerts', isBold: true},
    {id: '35', title: 'Persistent Check Activat..', switchName: 'MySwitch9'},
    {id: '36', title: 'Persistent Check Interval (S)', input: true},
    {id: '37', title: 'Scroll to Persistent?', switchName: 'MySwitch10'},

    {id: '38', title: 'Export', isBold: true},
    {id: '39', title: 'Detach from Dropbox Account'},

    {id: '40', title: 'System', isBold: true},
    {id: '41', title: 'Debugging Mode?', switchName: 'MySwitch11'},
    {id: '42', title: 'Logging Level'},
    {id: '43', title: 'Persistent Log Threshold'},
    {id: '44', title: 'Log every positional GP...', switchName: 'MySwitch12'},
    {id: '45', title: 'Privacy Policy', rightArrow: true},
    {id: '46', title: 'About', rightArrow: true},
    // Add more data items for other settings...
  ];

  const renderItem = ({item}) => {
    return (
      <View>
        {item.isBold ? (
          <View style={styles.boldTextParent}>
            <Text style={styles.boldText}>{item.title}</Text>
          </View>
        ) : (
          <View style={styles.textParent}>
            <Text style={styles.text}>{item.title}</Text>
            {item.switchName && (
              <Switch
                trackColor={{false: '#E9E9EA', true: 'blue'}}
                thumbColor={'#FFF'}
                onValueChange={() => toggleSwitch(item.switchName)}
                value={switchStates[item.switchName]}
              />
            )}
            {item.input && <TextInput style={styles.textInput} />}
            {item.input1 && <TextInput style={styles.gpsTextInput} />}
            {item.input2 && <TextInput style={styles.gpsMaximumAgeTextInput} />}
            {item.rightArrow && (
              <View style={styles.rightArrowParent}>
                <Image source={images.rightArrow} style={styles.rightArrow} />
              </View>
            )}
          </View>
        )}
      </View>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex: 1, backgroundColor: '#FFF'}}>
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
    </ScrollView>
  );
};

export default Settings;
