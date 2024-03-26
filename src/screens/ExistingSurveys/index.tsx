import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {ThemeButton} from '../../components';
import styles from './styles';

const ExistingSurveys = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.boldText}>Select a Survey:</Text>
          <View style={styles.buttonParent}>
            <ThemeButton title="Start New Transect" />
            <ThemeButton title="Resume Most Recent Transect" />
            <ThemeButton title="Generate Report" />
            <ThemeButton title="Submit" />
            <ThemeButton title="Delete" style={styles.deleteButton} />
          </View>
        </View>
        <View style={styles.buttonParent}>
          <Text style={styles.boldText}>
            or Select a Transect from the Chosen Survey:
          </Text>
          <View style={styles.buttonParent}>
            <ThemeButton title="Resume Selected Transect" />
            <ThemeButton title="Generate Report" />
            <ThemeButton title="Open Data Editor" />
            <ThemeButton title="Delete" style={styles.deleteButton} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ExistingSurveys;
