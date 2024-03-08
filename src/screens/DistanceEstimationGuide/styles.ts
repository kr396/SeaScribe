import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  parents: {
    borderWidth: 1,
    marginVertical: 16,
    marginHorizontal: 16,
    borderColor: colors.offWhite,
  },
  parentsText: {
    marginVertical: 16,
    marginHorizontal: 16,
    color: 'black',
  },
  inputText: {
    backgroundColor: colors.offWhite,
    marginHorizontal: 16,
    borderRadius: 15,
    height: 30,
    lineHeight: 30,
    paddingLeft: 10,
    paddingBottom: 0,
    paddingTop: 0,
    marginBottom: 8,
    width: '95%',
  },
  buttonParent: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop:32,
    borderEndColor:'pink'
  },
  buttonCalculate: {
    height: 50,
    width: 120,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.offWhite,
    backgroundColor: '#2770EE', 
  },
  buttonClear: {
    height: 50,
    width: 80,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.offWhite,
    backgroundColor: '#FAF9F6',
    marginLeft: 10,  
  },
  calculateButtonText: {
    marginTop: 11,
    textAlign: 'center',
    color: '#FFF',
  },
});
export default styles;
