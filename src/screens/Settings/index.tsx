import React, {useState} from 'react';
import {
  View,
  Text,
  Switch,
  TextInput,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import {images} from '../../constants/images';
import {ThemeButton} from '../../components';
import styles from './styles';
import Slider from '@react-native-community/slider';
import {Setting} from '../../types';
import About from '../About';
import {RootStackScreenProps} from '../../navigation/types';

const Settings: React.FC<RootStackScreenProps<'Settings'>> = ({navigation}) => {
  const [initialZoomSlider, setInitialZoomslider] = useState<number>(11);
  const [circleFillOpacitySlider, setCircleFillOpacitySlider] =
    useState<number>(50);
  const [circleRadiusMultiplierSlider, setCircleRadiusMultiplierSlider] =
    useState<number>(5);
  const [circleRadiusMiminumSlider, setCircleRadiusMiminumSlider] =
    useState<number>(10);
  const [circleRadiusMaximumSlider, setCircleRadiusMaximumSlider] =
    useState<number>(500);
  const [dividerWidthSlider, setDividerWidthSlider] = useState<number>(20);
  const [switchStates, setSwitchStates] = useState<{[key: string]: boolean}>({
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

  const toggleSwitch = (switchName: string) => {
    setSwitchStates(prevState => ({
      ...prevState,
      [switchName]: !prevState[switchName],
    }));
  };
  const data: Setting[] = [
    {id: '1', title: 'GPS', isBold: true},
    {
      id: '2',
      title: 'Atomatic GPS Polling A...',
      switchName: 'atomaticgpspollingswitch',
    },
    {id: '3', title: 'Atomatic GPS Polling Interval (s)', input: true},
    {id: '4', title: 'Atomatic GPS Polling'},
    {
      id: '5',
      title: 'Enable high accuracy?',
      switchName: 'enablehighaccuracyswitch',
    },
    {id: '6', title: 'GPS Timeout (s)', input1: true},
    {id: '7', title: 'GPS Maximum Age (S)', input2: true},
    {
      id: '8',
      title: 'Record failures during p...',
      switchName: 'recordfailuresswitch',
    },
    {id: '9', title: 'Mapping', isBold: true},
    {id: '10', title: 'Initial Zoom', initialZoomSlider: true},
    {
      id: '11',
      title: 'Follow Letest GPS Logg...',
      switchName: 'followletestgpsswitch',
    },
    {id: '12', title: 'Course Line Color'},
    {id: '13', title: 'Circle Rim Color'},
    {id: '14', title: 'Circle Fill Color'},
    {id: '15', title: 'Circle Fill Opacity', slidercirclefillopacity: true},
    {
      id: '16',
      title: 'Circle Radius Multiplier',
      circleradiusmultiplierslider: true,
    },
    {id: '17', title: 'Circle Radius Miminum', circleradiusmiminumslider: true},
    {id: '18', title: 'Circle Radius Maximum', circleradiusmaximumslider: true},
    {id: '19', title: 'Map Cache Navigator', isBold: true},
    {
      id: '20',
      title: 'Show Lowest Zoom Only',
      switchName: 'showlowestzoomswitch',
    },
    {id: '21', title: 'Show Lable Tiles', switchName: 'showlabletilesswitch'},
    {id: '22', title: 'User Interface', isBold: true},
    {id: '23', title: 'Divider Width (pixels)', dividerwidthslider: true},
    {id: '24', title: 'Hotkeys', isBold: true},
    {
      id: '25',
      title: 'Show Quick Species Bar',
      switchName: 'showquickspeciesbarswitch',
    },
    {id: '26', title: 'Max Quick Species Button Count', input: true},
    {
      id: '27',
      title: 'Separate Hotkey Groups...',
      switchName: 'separatehotkeyswitch',
    },
    {
      id: '28',
      title: 'Display Horizontal Rule...',
      switchName: 'displayhorizontalswitch',
    },
    {id: '29', title: 'Hotkey Button Min Width (pixels) 80'},
    {id: '30', title: 'Hotkey Button MIn Height (pixels) 40'},
    {id: '31', title: 'Age'},
    {id: '32', title: 'Behavior'},
    {id: '33', title: 'Plumage'},
    {id: '34', title: 'Alerts', isBold: true},
    {
      id: '35',
      title: 'Persistent Check Activat..',
      switchName: 'persistentCheckactivatswitch',
    },
    {id: '36', title: 'Persistent Check Interval (S)', input: true},
    {
      id: '37',
      title: 'Scroll to Persistent?',
      switchName: 'scrolltopersistentswitch',
    },
    {id: '38', title: 'Export', isBold: true},
    {id: '39', title: 'Detach from Dropbox Account'},
    {id: '40', title: 'System', isBold: true},
    {id: '41', title: 'Debugging Mode?', switchName: 'debuggingmodeswitch'},
    {id: '42', title: 'Logging Level'},
    {id: '43', title: 'Persistent Log Threshold'},
    {
      id: '44',
      title: 'Log every positional GP...',
      switchName: 'logeverypositionalswitch',
    },
    {id: '45', title: 'Privacy Policy', rightArrow: true,},
    {id: '46', title: 'About', rightArrow: true,},
  ];

  const handleNavigate = (screen: string) => {
    if (screen === 'About') {
      navigation.navigate('About');
    } else if (screen === 'Privacy Policy') {
      navigation.navigate('PrivacyPolicy');
    }
  };
  const renderItem = ({item}: {item: Setting}) => {
    return (
      <View>
        {item.isBold ? (
          <View style={styles.boldTextParent}>
            
            <Text style={styles.boldText}>{item.title}</Text>
            
          </View>
        ) : (
           <TouchableOpacity onPress={() => handleNavigate(item.title)}>
          <View style={styles.textParent} >
            <Text style={styles.text}>{item.title}</Text>
            {item.switchName && (
              <Switch
                trackColor={{false: '#E9E9EA', true: 'blue'}}
                thumbColor={'#FFF'}
                onValueChange={() => toggleSwitch(item.switchName as string)}
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
            {item.initialZoomSlider && (
              <View style={styles.sliderContainer}>
                <View style={styles.sliderLable}>
                  <Text style={styles.sliderText}>{initialZoomSlider}</Text>
                </View>
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={15}
                  step={1}
                  value={initialZoomSlider}
                  minimumTrackTintColor={'blue'}
                  thumbTintColor={'#f0f0f0'}
                  onValueChange={value => setInitialZoomslider(value)}
                />
              </View>
            )}
            {item.slidercirclefillopacity && (
              <View style={styles.sliderContainer}>
                <View style={styles.sliderLable}>
                  <Text style={styles.sliderText}>
                    {circleFillOpacitySlider}
                  </Text>
                </View>
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={100}
                  step={1}
                  value={circleFillOpacitySlider}
                  minimumTrackTintColor={'blue'}
                  thumbTintColor={'#f0f0f0'}
                  onValueChange={value => setCircleFillOpacitySlider(value)}
                />
              </View>
            )}
            {item.circleradiusmultiplierslider && (
              <View style={styles.sliderContainer}>
                <View style={styles.sliderLable}>
                  <Text style={styles.sliderText}>
                    {circleRadiusMultiplierSlider}
                  </Text>
                </View>
                <Slider
                  style={styles.slider}
                  minimumValue={1}
                  maximumValue={20}
                  step={1}
                  value={circleRadiusMultiplierSlider}
                  minimumTrackTintColor={'blue'}
                  thumbTintColor={'#f0f0f0'}
                  onValueChange={value =>
                    setCircleRadiusMultiplierSlider(value)
                  }
                />
              </View>
            )}
            {item.circleradiusmiminumslider && (
              <View style={styles.sliderContainer}>
                <View style={styles.sliderLable}>
                  <Text style={styles.sliderText}>
                    {circleRadiusMiminumSlider}
                  </Text>
                </View>
                <Slider
                  style={styles.circleRadiusSlider}
                  minimumValue={10}
                  maximumValue={100}
                  step={1}
                  value={circleRadiusMiminumSlider}
                  minimumTrackTintColor={'blue'}
                  thumbTintColor={'#f0f0f0'}
                  onValueChange={value => setCircleRadiusMiminumSlider(value)}
                />
              </View>
            )}
            {item.circleradiusmaximumslider && (
              <View style={styles.sliderContainer}>
                <View style={styles.sliderLable}>
                  <Text style={styles.sliderText}>
                    {circleRadiusMaximumSlider}
                  </Text>
                </View>
                <Slider
                  style={styles.circleRadiusSlider}
                  minimumValue={100}
                  maximumValue={500}
                  step={1}
                  value={circleRadiusMaximumSlider}
                  minimumTrackTintColor={'blue'}
                  thumbTintColor={'#f0f0f0'}
                  onValueChange={value => setCircleRadiusMaximumSlider(value)}
                />
              </View>
            )}
            {item.dividerwidthslider && (
              <View style={styles.sliderContainer}>
                <View style={styles.sliderLable}>
                  <Text style={styles.sliderText}>{dividerWidthSlider}</Text>
                </View>
                <Slider
                  style={styles.slider}
                  minimumValue={5}
                  maximumValue={40}
                  step={1}
                  value={dividerWidthSlider}
                  minimumTrackTintColor={'blue'}
                  thumbTintColor={'#f0f0f0'}
                  onValueChange={value => setDividerWidthSlider(value)}
                />
              </View>
            )}
          </View>
           </TouchableOpacity>
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
