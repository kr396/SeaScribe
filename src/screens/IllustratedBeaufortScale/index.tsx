import {View, Text, Image, FlatList} from 'react-native';
import styles from './styles';
import {BEAUFORT_SCALE_ENTRIES} from '../../data';
import {IllustratedBeaufortScaleType} from '../../types';
import {RootStackScreenProps} from '../../navigation/types';

const IllustratedBeaufortScale: React.FC<
  RootStackScreenProps<'IllustratedBeaufortScale'>
> = () => {
  const renderIllustratedBeaufortScale = ({
    item,
  }: {
    item: IllustratedBeaufortScaleType;
  }) => (
    <View style={styles.textParent}>
      <Text style={styles.text}>
        {item.id} - {item.description}
      </Text>
      <Text style={styles.boldText}>Wind Speed</Text>
      <Text style={styles.content}>
        {item.wind_speed_kmh} kmh / {item.wind_speed_mph} mph /{' '}
        {item.wind_speed_knots} knots / {item.wind_speed_mps} mps
      </Text>
      <Text style={styles.boldText}>Wave Height</Text>
      <Text style={styles.content}>
        {item.wave_height_m} / {item.wave_height_ft} ft
      </Text>
      <Text style={styles.boldText}>Sea Conditions</Text>
      <Text style={styles.content}>{item.sea_conditions}</Text>
      <Text style={styles.boldText}>Land Conditions</Text>
      <Text style={styles.content}>{item.land_conditions}</Text>
      <Image source={item.photo} style={styles.poster} />
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={BEAUFORT_SCALE_ENTRIES}
        renderItem={renderIllustratedBeaufortScale}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default IllustratedBeaufortScale;
