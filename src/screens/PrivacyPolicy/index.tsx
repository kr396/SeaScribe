import {ScrollView, Text, TouchableOpacity, View, Linking} from 'react-native';
import styles from './styles';
import {ThemeButton} from '../../components';

const PrivacyPolicy = () => {
  const handlePress = () => {
    Linking.openURL('https://www.boem.gov/privacy-policy');
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.contentParent}>SeaScribe Privacy Policy</Text>
          <Text style={styles.content}>
            The SeaScribe Privacy Policy briefly describes how SeaScribe
            collects, uses, and handles your information. For additional
            information about SeaScribe, you may also review the SeaScribe User
            Manual and Privacy Impact Assessment.
          </Text>
        </View>
        <View style={styles.contentParentView}>
          <Text style={styles.contentParent}>Getting Started</Text>
          <Text style={styles.content}>
            All survey data resides solely within the app unless and until a
            user exports and/or deletes it. SeaScribe does not interface with
            other mobile apps.
          </Text>
          <Text style={styles.content}>
            New SeaScribe users must complete their observer profile before
            creating a survey record/being added to a created survey record by
            providing their first/last name and an email address (at a minimum).
            Observer profiles in SeaScribe pair survey contributors and their
            data, a feature that is helpful in cases in which multiple observers
            are sharing a mobile device during a survey period.
          </Text>
        </View>
        <View style={styles.contentParentView}>
          <Text style={styles.contentParent}>
            Enhancing Your Data Collection
          </Text>
          <Text style={styles.content}>
            <Text style={styles.contentChilde}>Add Location Information:</Text>{' '}
            The SeaScribe app uses geolocation as a necessary part of its data
            collection process to pair observation data and positional
            information. Location services must be enabled for the position
            information to be recorded in the app. SeaScribe app users must
            agree to enable location services before initiating the collection
            of geolocation information. The geolocation information is linked to
            a specific point in time (i.e., “while in use”) and is not intended
            to track or monitor individuals. Users can disable the function, as
            desired. While SeaScribe will continue to function and observations
            can be saved if geolocation services are not enabled, no positional
            information will be recorded; only the system date-time stamp will
            be recorded for that observation which can be used to estimate
            position in post-processing if speed and direction are known.
          </Text>

          <Text style={styles.content}>
            <Text style={styles.contentChilde}>
              Add Photos and Audio Recordings:
            </Text>{' '}
            In addition to geolocation data, SeaScribe users can allow the app
            to take photos and record audio. Audio recording during surveys is
            common when performing aerial surveys where animals are passing by
            at high rates of speed and entering data in the standard data entry
            form could result in missed animals. Observers may desire to capture
            photos of survey conditions, habitat areas, and avian species
            present in the survey area. SeaScribe app users must agree to
            provide the app with access to the device’s onboard camera and
            microphone before initiating use of these optional features. As with
            location services, camera and microphone access is granted only for
            the user-initiated survey period. Photos and audio recordings
            created while using SeaScribe are associated with the applicable
            survey record for ease of reviewing and archiving later. A user can
            also delete them, if desired.
          </Text>
          <Text style={styles.contentParent}>Sharing Survey Data</Text>
          <Text style={styles.content}>
            All survey data resides solely within the app unless and until a
            user exports and/or deletes it. A user’s mobile device must be able
            to communicate via Wi-Fi or other data connection to the Internet
            and must have a valid email account to be able to export data.
            SeaScribe will prompt users to allow network access. By exporting
            survey records to a third-party, users are providing
            non-governmental entities access to their information and are
            subject to the third-party’s privacy and security policies. The BOEM
            Privacy Policy does not apply.
          </Text>
          <Text style={styles.content}>
            Operators or researchers submitting avian survey data to BOEM as
            part of a plan or study-related obligation must follow the bureau’s
            submission guidelines and requirements. BOEM will maintain all
            submitted information in accordance with applicable federal and DOI
            records management requirements.
          </Text>
        </View>
        <View style={styles.contentParentView}>
          <Text style={styles.contentParent}>Troubleshooting</Text>
          <Text style={styles.content}>
            SeaScribe app users must agree to provide the app with access to
            device information in order to activate the Debugging Mode to
            troubleshoot app issues. While network access is enabled, SeaScribe
            app users can send limited device information (device model,
            platform, operating system version, and device manufacturer) and
            their email address to the app developer in order to report app
            issues. Additional information about SeaScribe app troubleshooting
            is available in the SeaScribe User Manual.
          </Text>
        </View>
        <View style={styles.contentParentView}>
          <Text style={styles.contentParent}>
            Notification of Privacy Policy Changes
          </Text>
          <Text style={styles.content}>
            We will notify you of any changes to the SeaScribe Privacy Policy by
            posting updates online and within the app.
          </Text>
        </View>
        <View style={styles.contentParentView}>
          <Text style={styles.contentParent}>
            Privacy Policy Contact Information
          </Text>
          <Text style={styles.content}>
            You can direct questions or feedback regarding the SeaScribe Privacy
            Policy to the BOEM Privacy Program. Contact us by email at
            boemprivacy@boem.gov, by phone at 703-787-1739, or by mail at the
            following address:
          </Text>
          <Text style={styles.address}>Bureau of Ocean Energy Management</Text>
          <Text style={styles.address}>45600 Woodland Rd.</Text>
          <Text style={styles.address}>MS-OBPC</Text>
          <Text style={styles.address}>Attn: Associate Privacy Officer</Text>
          <Text style={styles.address}>Sterling, VA 20166</Text>
          <Text style={styles.content}>
            The BOEM Privacy Policy is available at:
          </Text>
          <TouchableOpacity>
            <ThemeButton
              title="https://www.boem.gov/privacy-policy"
              style={styles.themeButton}
              onPress={handlePress}
            />
          </TouchableOpacity>
          <Text style={styles.content}>Dated: 9/10/2018</Text>
        </View>
      </ScrollView>
    </View>
  );
};
export default PrivacyPolicy;
