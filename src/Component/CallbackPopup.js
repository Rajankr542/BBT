import React,{useState} from 'react';
import { 
  View, 
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  Linking,
  TextInput,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const CallbackPopup = ({crossbutton}) => {

    const [name,setName]=useState('');
    const [number,setNumber]=useState('');

    return (
        <View style={{flex:1,flexDirection:'column',marginHorizontal:wp("8%"),marginVertical:hp("4.5%")}}>

            <View style={{position:'relative',marginBottom:hp("3.5%")}}>
            <TouchableOpacity style={{position:'absolute',right:0,zIndex:99999}} onPress={crossbutton}>
            <Image source={require('../../assets/closeicon.png')}  style={{width:wp("4%"),height:wp("4%"),resizeMode:'contain',zIndex:999999}}/>
            </TouchableOpacity>
            </View>

            <View style={{marginVertical:hp("3.4%")}}>
            <Text style={{textAlign:"center",fontFamily:'roboto-medium',fontSize:wp("6.8%")}}>Have a cup of coffee with us?</Text>
            </View>

        <View>

            <View style={styles.inputcontainerstyle} >
                <TextInput 
                placeholder="Enter your name" 
                placeholderTextColor = "#000" 
                style={styles.inputstyle}
                value={name}
                onChangeText={(text) => {setName(text)} }
                />
            </View>

            <View style={styles.inputcontainerstyle} >
                <TextInput 
                placeholder="Mobile number" 
                 keyboardType={"number-pad"} 
                 maxLength={10} 
                 placeholderTextColor = "#000" 
                 style={styles.inputstyle}
                 value={number}
                 onChangeText={(num) => {setNumber(num)} }
                 />
            </View>

            <TouchableOpacity style={{backgroundColor:'#000',paddingVertical:hp("2.5%"),borderRadius:13}}>
            <Text style={{textAlign:'center',fontFamily:'roboto-medium',fontSize:wp("4.5%"),color:'#fff'}}>Submit</Text>
            </TouchableOpacity>

        </View>
       
        <View>

        <View style={{marginVertical:hp("2%")}}>
            <Text style={{fontFamily:'roboto-medium',textAlign:'center',fontSize:wp("6%")}}>or</Text>
        </View>
        <Text style={{fontFamily:'roboto-regular',textAlign:'center',fontSize:wp("5%")}}>Call Us</Text>
        <Text style={{fontFamily:'roboto-bold',textAlign:'center',fontSize:wp("7%"),lineHeight:wp("9%")}}>(+91) 9999 9999 83</Text>
        <Text style={{fontFamily:'roboto-bold',textAlign:'center',fontSize:wp("7%"),lineHeight:wp("9%")}}>01244666666</Text>
        
        </View>

        <View style={styles.lowerbuttoncontainer}>

            <TouchableOpacity 
            style={{...styles.lowwerbutton,marginRight:wp("3%")}} 
            onPress={() => {
                Linking.openURL('whatsapp://send?text=Please shedual a call&phone=918377828682');
        }} >
                <View>
                    <Image 
                    source={require('../../assets/whatsappicon.png')} 
                    style={{width:wp("6%"),height:wp("6%"),resizeMode:'contain',marginRight:wp("1.5%")}}
                    />
                    </View>
                <View style={{alignSelf:'center'}}><Text style={styles.buttontextstyle}>Whatsapp</Text></View>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.lowwerbutton}
            onPress={() => {
                Linking.openURL('tel:8178084826');
            }}
            >
                <View>
                    <Image 
                    source={require('../../assets/callicon.png')} 
                    style={{width:wp("6%"),height:wp("6%"),resizeMode:'contain',marginRight:wp("1.5%")}}
                    />
                    </View>
                <View style={{alignSelf:'center'}}><Text style={styles.buttontextstyle}>Call Us Now</Text></View>
            </TouchableOpacity>

        </View>


        </View>
    );
};

const win = Dimensions.get('window');
const styles = StyleSheet.create({
lowerbuttoncontainer:{
flexDirection:'row',
justifyContent:'space-between',
marginTop:hp("2.5%")
},
buttontextstyle:{
fontFamily:'roboto-medium',
fontSize:wp("4.5%")
},
lowwerbutton:{
flexDirection:'row',
width:wp("40%"),
justifyContent:'center',
backgroundColor:'#f6f6f6',
paddingVertical:wp("5%"),
borderRadius:10

},
inputstyle:{
borderWidth:1,
borderColor:'#ddd',
paddingHorizontal:wp("5%"),
paddingVertical:hp("2.5%"),
marginBottom:hp("1%"),
borderRadius:15,
color:'#000',
fontFamily:'roboto-regular',
fontSize:wp("4.2%")
}
});

export default CallbackPopup;