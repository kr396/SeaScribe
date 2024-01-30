import {
  View,
  Text,
  Pressable,
  Image,
  Alert,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React, {FC, useMemo, useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {format} from 'date-fns';

import styles from './styles';
import {DropDown, InputText, ThemeButton} from '../../components';
import {useAppSelector} from '../../store';
import {getObservers} from '../../store/slices/appSlice';
import {POSITIONS, BEAUFORT_SCALE_ENTRIES, VISIBILITIES} from '../../data';
import {images} from '../../constants/images';
import {colors} from '../../constants';
import {RootStackScreenProps} from '../../navigation/types';

const StartTransect: FC<RootStackScreenProps<'StartTransect'>> = ({
  navigation,
}) => {
  const [transectName, setTransectName] = useState('');
  const [observer, setObserver] = useState(null);
  const [position, setPosition] = useState(null);
  const [beaufort, setBeaufort] = useState(null);
  const [visibility, setVisibility] = useState(null);
  const [isDateTimeCorrect, setIsDateTimeCorrect] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const observers = useAppSelector(getObservers);
  const requiredStyle: StyleProp<ViewStyle> = useMemo(
    () => (!isDateTimeCorrect ? {borderColor: colors.red} : {}),
    [isDateTimeCorrect],
  );

  /**
   * Handles refresh button's press event
   */
  const onRefreshPress = () => {
    setCurrentTime(new Date());
  };

  /**
   * Handles info button's press event
   */
  const onInfoPress = () => {
    Alert.alert(
      'More Information',
      "If the listed date & time does not match the actual date & time, please use the device's settings to correct the date & time, come back to this application, click the 'Refresh' button, and then make sure the listed date & time matches what you entered into the device settings.",
    );
  };

  /**
   * Handles clear button's press event
   */
  const onCancelPress = () => {
    navigation.popToTop();
  };

  const onIsCorrectPress = () => {
    setIsDateTimeCorrect(value => !value);
  };
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollview}
        bounces={false}>
        <InputText
          lable="Transect Name"
          inputProps={{value: transectName, onChangeText: setTransectName}}
        />
        <DropDown
          items={observers}
          lable="Observer"
          value={observer}
          setValue={setObserver}
          dropdownProps={{schema: {value: 'id'}}}
          zIndex={999}
          isRequired
        />
        <DropDown
          items={POSITIONS}
          lable="Position"
          value={position}
          setValue={setPosition}
          zIndex={998}
          isRequired
        />
        <DropDown
          items={BEAUFORT_SCALE_ENTRIES}
          lable="Beaufort"
          value={beaufort}
          setValue={setBeaufort}
          dropdownProps={{schema: {value: 'id', label: 'id'}}}
          zIndex={997}
          isRequired
        />
        <DropDown
          items={VISIBILITIES}
          lable="Visibility"
          value={visibility}
          setValue={setVisibility}
          zIndex={996}
          isRequired
        />
        <View style={[styles.dateTimeView, requiredStyle]}>
          <CheckBox
            value={isDateTimeCorrect}
            onValueChange={setIsDateTimeCorrect}
            tintColor={colors.primary}
            tintColors={{true: colors.primary, false: colors.primary}}
          />
          <Pressable
            onPress={onIsCorrectPress}
            style={styles.timeTextContainer}>
            <Text>Current Date and Time is:</Text>
            <Text>{format(currentTime, 'cccc, P, HH:mm x')}</Text>
            <Text>Is this correct?</Text>
            {!isDateTimeCorrect ? (
              <Text style={styles.redText}>* Required</Text>
            ) : null}
          </Pressable>
          <TouchableOpacity onPress={onRefreshPress}>
            <Image source={images.refreshIcon} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onInfoPress}>
            <Image source={images.infoIcon} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.actonButtons}>
          <ThemeButton
            title="Start Recording Observations"
            style={styles.actionButton}
          />
          <ThemeButton
            title="Cancel"
            mode="outlined"
            style={styles.actionButton}
            onPress={onCancelPress}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default StartTransect;
