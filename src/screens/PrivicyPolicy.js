import React,{useState} from 'react';
import { 
View, 
StyleSheet,
Text,
TouchableOpacity,
ScrollView,
LayoutAnimation,
UIManager,
Platform
} from 'react-native';
import {Header} from 'react-native-elements';
import { Entypo ,MaterialIcons } from '@expo/vector-icons'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}


const PrivicyPolicy = ({navigation}) => {

  const [activecontent,setActivecontent]=useState('What information do we collect?');
return (
<View style={{flex:1,backgroundColor:'#f6f6f7'}}>
<Header
  statusBarProps={{ barStyle: 'light-content' }}
  barStyle="light-content"
  leftComponent={
  <TouchableOpacity onPress={() => {navigation.goBack()}}>
      <MaterialIcons name="keyboard-backspace" size={wp("6%")} color="black" />
      </TouchableOpacity>}
  containerStyle={{
    backgroundColor: '#f6f6f7',
    paddingTop: 0,
    paddingHorizontal:30
  }}
/>
<ScrollView style={{flex:1,marginHorizontal:wp("4%")}} showsVerticalScrollIndicator={false}>

<View style={styles.headertext}>
<Text 
style={{fontFamily: 'roboto-bold',fontSize:wp('8%'),marginLeft:wp('1%')}}
>Privacy Policies</Text>
</View>


<View style={styles.oneIteamstylecontainer}>
<View style={styles.oneIteamstyle}>
  <View style={{flex:1}}><Text style={styles.oneIteamtextstyle}>What information do we collect?</Text></View>
  {activecontent === 'What information do we collect?' ? null:
  <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setActivecontent('What information do we collect?')}}>
  <Entypo name="plus" size={wp("6%")} color="black" style={{marginLeft:1}} />
  </TouchableOpacity>
  }
  </View>
  {activecontent === 'What information do we collect?' ?
  <View style={styles.oneIteamdetailscontainer}>
  <View style={styles.oneIteamdetailtext}>
 <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%")}}>We collect information from you when you register 
   on our site, subscribe to our newsletter, respond to
     a survey, post testimonials, respond or leave a
query regarding sale and/or purchase or fill out a form.</Text> 

      <Text style={{fontFamily:'roboto-bold',paddingTop:wp("8%"),lineHeight:30, fontSize:wp("4%"),}}>
        When ordering or registering on our site, as
         appropriate, you may be asked to enter your name,
          e-mail address or phone number. You may, however,
           visit our site anonymously.
      </Text>
  </View>
  </View>
  :null
} 
</View>

<View style={styles.oneIteamstylecontainer}>
<View style={styles.oneIteamstyle}>
  <View style={{flex:1}}><Text style={styles.oneIteamtextstyle}>What do we use your information for?</Text></View>
  {activecontent === 'What do we use your information for?' ? null:
  <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setActivecontent('What do we use your information for?')}}>
  <Entypo name="plus" size={wp("6%")} color="black" style={{marginLeft:1}} />
  </TouchableOpacity>
  }
  </View>
  {activecontent === 'What do we use your information for?' ?
  <View style={styles.oneIteamdetailscontainer}>
  <View style={styles.oneIteamdetailtext}>

  <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%")}}>
  Any of the information we collect from you may be used in one of the following ways:
</Text> 
<Text style={{fontFamily:'roboto-medium',lineHeight:30, fontSize:wp("4%"),marginTop:wp("5%")}}>To personalize your experience</Text>
<Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%")}}>(We continually strive to improve our website offerings based on the information and feedback we receive from you)</Text>

<Text style={{fontFamily:'roboto-medium',lineHeight:30, fontSize:wp("4%"),marginTop:wp("5%")}}>To improve our website</Text>
<Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%")}}>(Your information helps us to better respond to your individual needs)</Text>

<Text style={{fontFamily:'roboto-medium',lineHeight:30, fontSize:wp("4%"),marginTop:wp("5%")}}>To improve customer service</Text>
<Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%")}}>(Your information helps us to more effectively respond to your customer service requests and support needs)</Text>

<Text style={{fontFamily:'roboto-medium',lineHeight:30, fontSize:wp("4%"),marginTop:wp("5%")}}>To administer a contest, promotion, survey or other site feature</Text>

<Text style={{fontFamily:'roboto-medium',lineHeight:30, fontSize:wp("4%"),marginTop:wp("5%")}}>To send periodic emails</Text>
 
 <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%"),marginTop:wp("5%")}}>
The email address you provide for inquiring Big Boy Toyz services may be used to send you information and updates pertaining to your inquiry, in addition to receiving occasional company news, updates, related product or service information, etc.
</Text> 
<Text style={{fontFamily:'roboto-bold',paddingTop:wp("8%"),lineHeight:30, fontSize:wp("4%")}}>
Note: If at any time you would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email.
</Text>
  </View>
  </View>
  :null
} 
</View>

<View style={styles.oneIteamstylecontainer}>
<View style={styles.oneIteamstyle}>
  <View style={{flex:1}}><Text style={styles.oneIteamtextstyle}>How do we protect your information?</Text></View>
  {activecontent === 'How do we protect your information?' ? null:
  <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setActivecontent('How do we protect your information?')}}>
  <Entypo name="plus" size={wp("6%")} color="black" style={{marginLeft:1}} />
  </TouchableOpacity>
}
  </View>
  {activecontent === 'How do we protect your information?' ?
  <View style={styles.oneIteamdetailscontainer}>
  <View style={styles.oneIteamdetailtext}>
 <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%")}}>We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.</Text> 
  </View>
  </View>
  :null
} 
</View>

<View style={styles.oneIteamstylecontainer}>
<View style={styles.oneIteamstyle}>
  <View style={{flex:1}}><Text style={styles.oneIteamtextstyle}>Do we use cookies?</Text></View>
  {activecontent === 'Do we use cookies?' ?null:
  <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setActivecontent('Do we use cookies?')}}>
  <Entypo name="plus" size={wp("6%")} color="black" style={{marginLeft:1}} />
  </TouchableOpacity>
  }
  </View>
  {activecontent === 'Do we use cookies?' ?
  <View style={styles.oneIteamdetailscontainer}>
  <View style={styles.oneIteamdetailtext}>
      <Text style={{fontFamily:'roboto-bold',paddingBottom:wp("8%"),lineHeight:30, fontSize:wp("4%"),}}>
      Yes (Cookies are small files that a site or its service provider transfers to your computer’s hard drive through your Web browser (if you allow) that enables the sites or service providers systems to recognize your browser and capture and remember certain information.
      </Text>

      <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%")}}>
      We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future. We may contract with third-party service providers to assist us in better understanding our site visitors. These service providers are not permitted to use the information collected on our behalf except to help us conduct and improve our business.
      </Text> 
  </View>
  </View>
  :null
} 
</View>

<View style={styles.oneIteamstylecontainer}>
<View style={styles.oneIteamstyle}>
  <View style={{flex:1}}><Text style={styles.oneIteamtextstyle}>Do we disclose any information to outside parties?</Text></View>
  {activecontent === 'Do we disclose any information to outside parties?' ? null :
  <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setActivecontent('Do we disclose any information to outside parties?')}}>
  <Entypo name="plus" size={wp("6%")} color="black" style={{marginLeft:1}} />
  </TouchableOpacity>
}
  </View>
  {activecontent === 'Do we disclose any information to outside parties?' ?
  <View style={styles.oneIteamdetailscontainer}>
  <View style={styles.oneIteamdetailtext}>
  <Text style={{fontFamily:'roboto-bold',paddingBottom:wp("8%"),lineHeight:30, fontSize:wp("4%"),}}>
  We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information.
      </Text>

 <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%")}}>This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.</Text> 

  </View>
  </View>
  :null
} 
</View>

<View style={styles.oneIteamstylecontainer}>
<View style={styles.oneIteamstyle}>
  <View style={{flex:1}}><Text style={styles.oneIteamtextstyle}>Online Privacy Policy only</Text></View>
  {activecontent === 'Online Privacy Policy only' ?null:
  <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setActivecontent('Online Privacy Policy only')}}>
  <Entypo name="plus" size={wp("6%")} color="black" style={{marginLeft:1}} />
  </TouchableOpacity>
  }
  </View>
  {activecontent === 'Online Privacy Policy only' ?
  <View style={styles.oneIteamdetailscontainer}>
  <View style={styles.oneIteamdetailtext}>
 <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%")}}>This online privacy policy applies only to information collected through our website and not to information collected offline.</Text> 
  </View>
  </View>
  :null
} 
</View>

<View style={styles.oneIteamstylecontainer}>
<View style={styles.oneIteamstyle}>
  <View style={{flex:1}}><Text style={styles.oneIteamtextstyle}>Changes to our Privacy Policy</Text></View>
  {activecontent === 'Changes to our Privacy Policy' ? null:
  <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setActivecontent('Changes to our Privacy Policy')}}>
  <Entypo name="plus" size={wp("6%")} color="black" style={{marginLeft:1}} />
  </TouchableOpacity>
  }
  </View>
  {activecontent === 'Changes to our Privacy Policy' ?
  <View style={styles.oneIteamdetailscontainer}>
  <View style={styles.oneIteamdetailtext}>
 <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%")}}>If we decide to change our privacy policy, we will post those changes on this page, and/or send an email notifying you of any changes.</Text> 
  </View>
  </View>
  :null
} 
</View>

<View style={styles.oneIteamstylecontainer}>
<View style={styles.oneIteamstyle}>
  <View style={{flex:1}}><Text style={styles.oneIteamtextstyle}>Your Consent</Text></View>
  {activecontent === 'Your Consent' ?null:
  <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setActivecontent('Your Consent')}}>
  <Entypo name="plus" size={wp("6%")} color="black" style={{marginLeft:1}} />
  </TouchableOpacity>
  }
  </View>
  {activecontent === 'Your Consent' ?
  <View style={styles.oneIteamdetailscontainer}>
  <View style={styles.oneIteamdetailtext}>
 <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%")}}>By using our site, you consent to our online privacy policy.</Text> 
  </View>
  </View>
  :null
} 
</View>

<View style={{...styles.oneIteamstylecontainer,marginBottom:hp("15%")}}>
<View style={styles.oneIteamstyle}>
  <View style={{flex:1}}><Text style={styles.oneIteamtextstyle}>Contacting Us</Text></View>
  {activecontent === 'Contacting Us' ?null:
  <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setActivecontent('Contacting Us')}}>
  <Entypo name="plus" size={wp("6%")} color="black" style={{marginLeft:1}} />
  </TouchableOpacity>
  }
  </View>
  {activecontent === 'Contacting Us' ?
  <View style={styles.oneIteamdetailscontainer}>
  <View style={styles.oneIteamdetailtext}>
 <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%")}}>If there are any questions regarding this privacy policy you may contact us using the information below:</Text> 

      <Text style={{fontFamily:'roboto-bold',paddingTop:wp("8%"),lineHeight:30, fontSize:wp("4%"),}}>
Plot No. 134, Sector 37, Pace City 1, Gurgaon Haryana, 122001, India{'\n'}
info@bigboytoyz.com{'\n'}
+91 9999999983
      </Text>
  </View>
  </View>
  :null
} 
</View>

</ScrollView>
</View>
  );


};

const styles = StyleSheet.create({
headertext:{
marginBottom:hp('5%'),
marginTop:hp('3%')
},
oneIteamstyle:{
  flexDirection:'row',
  justifyContent:'space-between'
},
oneIteamstylecontainer:{
  marginBottom:hp('1%'),
  backgroundColor:'#fff',
  paddingHorizontal:wp("5%"),
  paddingVertical:wp("7%"),
  borderRadius:wp("2%")
},
oneIteamtextstyle:{
  fontFamily:'roboto-medium',
  fontSize:wp("4%")
},
oneIteamdetailscontainer:{
  paddingTop:wp("8%")
},
oneIteamdetailtext:{
  opacity:0.6
}

});
export default PrivicyPolicy;