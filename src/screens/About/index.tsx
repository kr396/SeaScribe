import React from 'react';
import {Image, ScrollView, Text, View, Linking} from 'react-native';
import styles from './styles';
import {images} from '../../constants/images';
import {ThemeButton} from '../../components';
import {
  Open_Source_Attributions,
  World_Ocean_Base,
} from '../../data/openSourceAttributions';

const About = ({navigation}) => {
  const handleOpenURL = url => {
    Linking.openURL(url);
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.seaScribeText}>SeaScribe v1.4.6</Text>
          <Image source={images.logoboem} style={styles.boemImg} />
        </View>
        <View style={styles.content}>
          <Text style={styles.textParent}>Office of Public Affairs</Text>
          <Text style={styles.text}>
            1849 C Street, NW, Washington, D.C. 20240
          </Text>
          <Text style={styles.text}> Phone: 202-208-6474 Email:</Text>
          <Text style={styles.text}>BOEMPublicAffairs@boem.gov</Text>
        </View>
        <View style={styles.content}>
          <Image source={images.bricolor} style={styles.boemImg} />
          <Text style={styles.textParent}>Biodiversity Research Institute</Text>
          <Text style={styles.text}>276 Canco Road‚ Portland, ME 04103</Text>
          <Text style={styles.text}>
            {' '}
            Phone: 207-839-7600 Fax: 207-887-7164
          </Text>
          <Text style={styles.text}>Email: bri@briloon.org</Text>
        </View>
        <View style={styles.content}>
          <Image source={images.tilson} style={styles.boemImg} />
          <Text style={styles.textParent}>Tilson</Text>
          <Text style={styles.text}>
            16 Middle St, 4th Floor, Portland, ME 04101
          </Text>
          <Text style={styles.text}>Voice: 207-591-6427 Fax: 207-772-3427</Text>
          <Text style={styles.text}>Email: info@tilsontech.com</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.textParent}>Policies</Text>
          <View style={styles.policyParent}>
            <Text style={styles.textParent}>Policy Name</Text>
            <Text style={styles.textParent}>Further Information</Text>
          </View>
          <View style={styles.policyParent}>
            <Text style={styles.text}>Privacy Policy</Text>

            <ThemeButton
              title="View"
              style={styles.button}
              titleStyle={styles.titleStyle}
              onPress={() => navigation.navigate('PrivacyPolicy')}
            />
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.textParent}>Mapping Data Attributions</Text>

          <View style={styles.policyParent}>
            <View style={styles.layerNameText}>
              <Text style={styles.textParent}>LayerName</Text>
              <Text style={styles.mappingDataText}>World Ocean Base</Text>
            </View>
            <View style={styles.mappingData}>
              <Text style={styles.textParent}>Provider</Text>
              <Text style={styles.mappingDataText}>ArcGIS</Text>
            </View>
            <View style={styles.mappingData}>
              <Text style={styles.textParent}>Attribution</Text>
              <Text style={styles.mappingDataText}>
                Esri,Delorme,GEBCO,NOAA,NGDC,and other contributors
              </Text>
            </View>
            <View style={styles.mappingData}>
              <Text style={styles.textParent}>FurtherInformation</Text>
              <View style={styles.buttonParent}>
                <ThemeButton
                  title="Go"
                  style={styles.button}
                  titleStyle={styles.titleStyle}
                  onPress={() => handleOpenURL(World_Ocean_Base[0].url)}
                />
              </View>
            </View>
          </View>
          <View style={styles.policyParent}>
            <View style={styles.layerNameText}>
              <Text style={styles.mappingDataText}>World Ocean Reference</Text>
            </View>
            <View style={styles.mappingData}>
              <Text style={styles.mappingDataText}>ArcGIS</Text>
            </View>
            <View style={styles.mappingData}>
              <Text style={styles.mappingDataText}>
                Esri,GEBCO,NOAA,National,Geographic,DeLorme,HERE,Geonames.org,and
                other contributors
              </Text>
            </View>
            <View style={styles.mappingData}>
              <View style={styles.buttonParent}>
                <ThemeButton
                  title="Go"
                  style={styles.button}
                  titleStyle={styles.titleStyle}
                  onPress={() => handleOpenURL(World_Ocean_Base[0].url)}
                />
              </View>
            </View>
          </View>
          {Open_Source_Attributions.map((attribution, index) => (
            <View style={styles.content} key={index}>
              <View style={styles.policyParent1}>
                <View>
                  <Text style={styles.openSourceText}>{attribution.name}</Text>
                </View>

                <ThemeButton
                  title="Go"
                  style={styles.button}
                  titleStyle={styles.titleStyle}
                  onPress={() => handleOpenURL(attribution.url)}
                />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
export default About;
