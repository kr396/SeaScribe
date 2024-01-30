import {Alert, StyleSheet, View} from 'react-native';
import React, {FC, useMemo, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {InputText, ThemeButton} from '.';
import {useAppDispatch, useAppSelector} from '../store';
import {addNewObserver, getObservers} from '../store/slices/appSlice';

type Props = {
  onRequestClose: () => void;
};

export const NewObserver: FC<Props> = ({onRequestClose}) => {
  const dispatch = useAppDispatch();
  const observers = useAppSelector(getObservers);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [affiliation, setAffiliation] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setstate] = useState('');
  const [zip, setZip] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const disabled = useMemo(
    () => !firstName.trim() || !lastName.trim() || !email.trim(),
    [firstName, lastName, email],
  );

  const onClearPress = () => {
    setFirstName('');
    setLastName('');
    setAffiliation('');
    setAddress1('');
    setAddress2('');
    setCity('');
    setstate('');
    setZip('');
    setPhone('');
    setEmail('');
  };

  const onSavePress = () => {
    const exist = observers.some(
      obs => obs.firstName === firstName && obs.lastName === lastName,
    );
    if (exist) {
      Alert.alert(
        'Validation Error',
        "The Observer's full name must be unique.",
      );
    } else {
      dispatch(
        addNewObserver({
          id: Date.now(),
          created: new Date(),
          label: lastName + ', ' + firstName,
          email,
          firstName,
          lastName,
          affiliation,
          address1,
          address2,
          city,
          phone,
          state,
          zip,
        }),
      );
      onRequestClose();
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <InputText
          lable="First Name"
          inputProps={{
            value: firstName,
            onChangeText: setFirstName,
          }}
          isRequired={true}
        />
        <InputText
          lable="Last Name"
          inputProps={{
            value: lastName,
            onChangeText: setLastName,
          }}
          isRequired={true}
        />
        <InputText
          lable="Affiliation"
          inputProps={{
            value: affiliation,
            onChangeText: setAffiliation,
          }}
        />
        <InputText
          lable="Address Line 1"
          inputProps={{
            value: address1,
            onChangeText: setAddress1,
          }}
        />
        <InputText
          lable="Address Line 2"
          inputProps={{
            value: address2,
            onChangeText: setAddress2,
          }}
        />
        <InputText
          lable="City"
          inputProps={{
            value: city,
            onChangeText: setCity,
          }}
        />
        <InputText
          lable="State"
          inputProps={{
            value: state,
            onChangeText: setstate,
          }}
        />
        <InputText
          lable="Zip"
          inputProps={{
            value: zip,
            onChangeText: setZip,
          }}
        />
        <InputText
          lable="Contact Phone"
          inputProps={{
            value: phone,
            onChangeText: setPhone,
          }}
        />
        <InputText
          lable="Email"
          isRequired={true}
          inputProps={{
            value: email,
            onChangeText: setEmail,
            keyboardType: 'email-address',
            autoCapitalize: 'none',
          }}
        />

        <View style={styles.actionsContainer}>
          <ThemeButton
            title={'Save'}
            onPress={onSavePress}
            style={styles.bttonStyle}
            disabled={disabled}
          />
          <ThemeButton
            mode={'outlined'}
            title={'Clear'}
            onPress={onClearPress}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 8,
    gap: 10,
  },
  actionsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginHorizontal: '10%',
    gap: 20,
    marginVertical: '5%',
  },
  bttonStyle: {},
});
