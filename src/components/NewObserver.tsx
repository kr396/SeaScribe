import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {InputText, ThemeButton} from '.';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export const NewObserver = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [affilation, setAffilation] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setstate] = useState('');
  const [zip, setZip] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const onClearPress = () => {
    setFirstName('');
    setLastName('');
    setAffilation('');
    setAddress1('');
    setAddress2('');
    setCity('');
    setstate('');
    setZip('');
    setPhone('');
    setEmail('');
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <InputText
          lable="First Name"
          inputProps={{
            value: firstName,
            onChangeText: setFirstName,
          }}
        />
        <InputText
          lable="Last Name"
          inputProps={{
            value: lastName,
            onChangeText: setLastName,
          }}
        />
        <InputText
          lable="Affilation"
          inputProps={{
            value: affilation,
            onChangeText: setAffilation,
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
          }}
        />

        <View style={styles.actionsContainer}>
          <ThemeButton
            title={'Save'}
            onPress={() => {}}
            style={styles.bttonStyle}
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
  container: {
    // flex: 1,
    padding: 8,
  },
  actionsContainer: {
    flexDirection: 'row',
    marginHorizontal: '10%',
    gap: 20,
    marginVertical: '5%',
  },
  bttonStyle: {},
});
