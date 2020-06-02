import React from 'react';
import { 
  View, 
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const OurTeamDetailmessage = ({ navigation }) => {
    const item = navigation.getParam('item');
  return (
    <View style={styles.parentcontainer}>
        <ImageBackground 
        source={{uri: item.imagepath}} 
        style={styles.imagefull}
        >
       <TouchableOpacity 
  	onPress={() => navigation.goBack()}
        style={styles.postionofrrow}>
        <MaterialIcons name="keyboard-backspace" style={styles.arrowback} />
        </TouchableOpacity>
    </ImageBackground>

<View style={styles.messagecontainer}>
<View>
<Text style={{fontFamily:'roboto-medium',fontSize:wp("7%")}}>{item.name}</Text>
<Text style={{fontFamily:'roboto-medium',fontSize:wp("4.5%")}}>{item.position}</Text>  
</View>

<View style={{marginTop:hp("5%")}}>
<ScrollView showsVerticalScrollIndicator={false} style={styles.ScrollViewcontainer}>
    <View style={{paddingBottom:hp("18%")}}>
    <Text style={{fontFamily:'roboto-regular',fontSize:wp("4.3%"),color:'#000',opacity:.6,lineHeight:wp("7%"),paddingTop:wp("2.8%")}}>
    {item.message}
    </Text>
    </View>
</ScrollView>
</View>

</View>
</View>
  );

};

const win = Dimensions.get('window');
const styles = StyleSheet.create({
parentcontainer:{
height:win.height
},
imagefull:{
width:win.width,
height:hp("50%")
},
ScrollViewcontainer:{
height:hp("50%"),
},
arrowback:{
fontSize:wp("7%"),
color:'#000'
},
postionofrrow:{
position:'absolute',
zIndex:99,
left:wp("7%"),
top:hp("5%")
},
messagecontainer:{
zIndex:9999999999,
backgroundColor:'#fff',
borderTopLeftRadius:wp("18%"),
borderTopEndRadius:wp("18%"),
marginTop:-hp("8.5%"),
paddingVertical:hp("6%"),
paddingHorizontal:wp("9%")
}

});

export default OurTeamDetailmessage;