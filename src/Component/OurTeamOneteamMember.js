import React from 'react';
import { 
  View, 
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Text
} from 'react-native';
import { withNavigation } from 'react-navigation'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const OurTeamOneteamMember = ({item,navigation}) => {
  return (
        <View style={styles.wallpaperimagecontiner}>
          <View style={styles.secondcontaoner}>
            <TouchableOpacity 
              onPress={
                () => {
                    navigation.navigate('OurTeamDetailmessage', {item});
                }}
            >
            <Image source={{uri: item.imagepath}}  style={styles.imagestyle}/>
            </TouchableOpacity>
            <View style={{marginLeft:wp("1.8%"),marginVertical:wp("1.8%"),flexWrap:'wrap'}}>
            <Text style={styles.namestyle}>{item.name}</Text>
            <Text style={styles.positionstyle}>{item.position}</Text>
            </View>
          </View>
        </View>
  );

};
const win = Dimensions.get('window');
const styles = StyleSheet.create({
wallpaperimagecontiner:{
marginVertical:hp('2%'),
marginLeft:wp("4%"),
flex:1,

},
imagestyle:{
resizeMode:"cover",
width:wp("60%"),
height:hp("40%"),
borderRadius:wp("6%")
},
namestyle:{
    width:wp("60%"),
    fontFamily:'roboto-medium',
    fontSize:wp("6%"),
    flexWrap:'wrap'
},
positionstyle:{
    fontFamily:'roboto-regular',
    fontSize:wp("4%"),
    color:'#000',
    opacity:.6,
    flexWrap:'wrap'
}
});

export default withNavigation(OurTeamOneteamMember);