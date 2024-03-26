import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '../../../constants';
import {DropDown, InputText} from '../../../components';
import {AGES, PLUMAGES, SEXES, SPECIES} from '../../../data';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export const ObservationForm = () => {
  const ages = AGES.map(age => ({
    ...age,
    label: age.hotkeyLabel + ' - ' + age.description,
  }));
  const plumage = PLUMAGES.map(plumage => ({
    ...plumage,
    label: plumage.hotkeyLabel + ' - ' + plumage.description,
  }));
  const sexes = SEXES.map(sex => ({
    ...sex,
    display: sex.value + ' - ' + sex.label,
  }));

  const species = SPECIES.map(spece => ({
    ...spece,
    label: spece.commonName,
  }));
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollview}
        nestedScrollEnabled={true}>
        <DropDown
          lable={'Species'}
          items={species}
          value={null}
          zIndex={999}
          dropdownProps={{
            searchable: true,
          }}
        />
        <InputText lable="Distance (m)" />
        <InputText lable="Degree" />
        <DropDown lable={'Behaviour'} items={[]} value={null} zIndex={999} />
        <InputText lable="Distance (m)" />
        <DropDown lable={'Direction'} items={[]} value={null} zIndex={998} />
        <DropDown lable={'Age'} items={ages} value={null} zIndex={997} />
        <DropDown lable={'Plumage'} items={plumage} value={null} zIndex={996} />
        <DropDown
          lable={'Sex'}
          items={sexes}
          value={null}
          zIndex={995}
          dropdownProps={{schema: {label: 'display'}}}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 8,
  },
  scrollview: {
    flex: 1,
    overflow: 'visible',
  },
});
