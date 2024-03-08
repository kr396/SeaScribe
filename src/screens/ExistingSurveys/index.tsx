import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {ThemeButton} from '../../components';
import styles from './styles';
import Table from '../../components/Table';

const ExistingSurveys = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.boldText}>Select a Survey:</Text>
          {/* <Table navigation={undefined} route={undefined} /> */}
          <ThemeButton
            title="Start New Transect"
            style={styles.startTransect}
          />
          <ThemeButton
            title="Resume Most Recent Transect"
            style={styles.resumeRecentTransect}
          />
          <View style={styles.buttons}>
            <ThemeButton
              title="Generate Report"
              style={styles.horizontalButtons}
            />
            <ThemeButton title="Submit" style={styles.horizontalButtons} />
            <ThemeButton title="Delete" style={styles.deleteButton} />
          </View>
        </View>
        <View style={styles.buttonParent}>
          <Text style={styles.boldText}>
            or Select a Transect from the Chosen Survey:
          </Text>
          {/* <Table navigation={undefined} route={undefined} /> */}
          <ThemeButton
            title="Resume Selected Transect"
            style={styles.resumeSelectedTransect}
          />
          <View style={styles.buttons}>
            <ThemeButton
              title="Generate Report"
              style={styles.horizontalButtons}
            />
            <ThemeButton
              title="Open Data Editor"
              style={styles.horizontalButtons}
            />
          </View>
          <ThemeButton title="Delete" style={styles.delete} />
        </View>
      </View>
    </ScrollView>
  );
};

export default ExistingSurveys;
