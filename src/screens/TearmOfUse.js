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


const TearmOfUse = ({navigation}) => {


  const [activecontent,setActivecontent]=useState('Section 1 - Online Store Terms');
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
>Terms of use</Text>

<View style={{opacity:.6,marginTop:wp("8%")}}>
<Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("4%")}}>This website is operated by Big Boy Toyz Pvt Ltd. Throughout the site, the terms “we”, “us” and “our” refer to Big Boy Toyz Pvt Ltd. Big Boy Toyz Pvt Ltd offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.</Text> 
<Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("4%")}}>By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.</Text> 
<Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("4%")}}>Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.</Text> 
<Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("4%")}}>Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.</Text>
</View>
</View>


<View style={styles.oneIteamstylecontainer}>
<View style={styles.oneIteamstyle}>
  <View style={{flex:1}}><Text style={styles.oneIteamtextstyle}>Section 1 - Online Store Terms</Text></View>
  {activecontent === 'Section 1 - Online Store Terms' ?
  null 
  :
  <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setActivecontent('Section 1 - Online Store Terms')}}>
  <Entypo name="plus" size={wp("6%")} color="black" style={{marginLeft:1}} />
  </TouchableOpacity>
}
  </View>
  {activecontent === 'Section 1 - Online Store Terms' ?
  <View style={styles.oneIteamdetailscontainer}>
  <View style={styles.oneIteamdetailtext}>
 <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("8%")}}>By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.</Text>
<Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("8%")}}>You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).</Text> 
<Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("8%")}}>You must not transmit any worms or viruses or any code of a destructive nature.</Text> 

      <Text style={{fontFamily:'roboto-bold',lineHeight:30, fontSize:wp("4%")}}>
      A breach or violation of any of the Terms will result in an immediate termination of your Services.
      </Text>
  </View>
  </View>
  :null
} 
</View>

<View style={styles.oneIteamstylecontainer}>
<View style={styles.oneIteamstyle}>
  <View style={{flex:1}}><Text style={styles.oneIteamtextstyle}>Section 2 - General Conditions</Text></View>
  {activecontent === 'Section 2 - General Conditions' ? null :
  <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setActivecontent('Section 2 - General Conditions')}}>
  <Entypo name="plus" size={wp("6%")} color="black" style={{marginLeft:1}} />
  </TouchableOpacity>
}
  </View>
  {activecontent === 'Section 2 - General Conditions' ?
  <View style={styles.oneIteamdetailscontainer}>
  <View style={styles.oneIteamdetailtext}>
  <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("8%")}}>We reserve the right to refuse service to anyone for any reason at any time.</Text> 
  <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("8%")}}>You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.</Text> 
  <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("8%")}}>You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.</Text> 
  <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%")}}>The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.</Text> 

  </View>
  </View>
  :null
} 
</View>

<View style={styles.oneIteamstylecontainer}>
<View style={styles.oneIteamstyle}>
  <View style={{flex:1}}><Text style={styles.oneIteamtextstyle}>Section 3 - Accuracy, Completeness and Timliness of Information</Text></View>
  {activecontent === 'Section 3 - Accuracy, Completeness and Timliness of Information' ? null :
  <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setActivecontent('Section 3 - Accuracy, Completeness and Timliness of Information')}}>
  <Entypo name="plus" size={wp("6%")} color="black" style={{marginLeft:1}} />
  </TouchableOpacity>
}
  </View>
  {activecontent === 'Section 3 - Accuracy, Completeness and Timliness of Information' ?
  <View style={styles.oneIteamdetailscontainer}>
  <View style={styles.oneIteamdetailtext}>
  <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%")}}>This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.</Text> 
  </View>
  </View>
  :null
} 
</View>

<View style={styles.oneIteamstylecontainer}>
<View style={styles.oneIteamstyle}>
  <View style={{flex:1}}><Text style={styles.oneIteamtextstyle}>Section 4 - Modifications of The Services and Prices</Text></View>
  {activecontent === 'Section 4 - Modifications of The Services and Prices' ? null :
  <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setActivecontent('Section 4 - Modifications of The Services and Prices')}}>
  <Entypo name="plus" size={wp("6%")} color="black" style={{marginLeft:1}} />
  </TouchableOpacity>
  }
  </View>
  {activecontent === 'Section 4 - Modifications of The Services and Prices' ?
  <View style={styles.oneIteamdetailscontainer}>
  <View style={styles.oneIteamdetailtext}>
  <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("8%")}}>Prices for our products are subject to change without notice.</Text> 
  <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("8%")}}>We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.</Text> 
  <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%")}}>We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.</Text> 
  </View>
  </View>
  :null
} 
</View>

<View style={styles.oneIteamstylecontainer}>
<View style={styles.oneIteamstyle}>
  <View style={{flex:1}}><Text style={styles.oneIteamtextstyle}>Section 5 - Products or Services (if applicable)</Text></View>
  {activecontent === 'Section 5 - Products or Services (if applicable)' ? null :
  <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setActivecontent('Section 5 - Products or Services (if applicable)')}}>
  <Entypo name="plus" size={wp("6%")} color="black" style={{marginLeft:1}} />
  </TouchableOpacity>
  }
  </View>
  {activecontent === 'Section 5 - Products or Services (if applicable)' ?
  <View style={styles.oneIteamdetailscontainer}>
  <View style={styles.oneIteamdetailtext}>

  <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("8%")}}>Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy.</Text> 
  <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("8%")}}>We have made every effort to display as accurately as possible the colours and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any colour will be accurate.</Text> 
  <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("8%")}}>We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at any time without notice, at the sole discretion of us.</Text> 

  <Text style={{fontFamily:'roboto-bold',lineHeight:30, fontSize:wp("4%"),}}>
  We reserve the right to discontinue any product at any time. Any offer for any product or service made on this site is void where prohibited.
      </Text>
  </View>
  </View>
  :null
} 
</View>

<View style={styles.oneIteamstylecontainer}>
<View style={styles.oneIteamstyle}>
  <View style={{flex:1}}><Text style={styles.oneIteamtextstyle}>Section 6 - Accuracy of Billing and Account Information</Text></View>
  {activecontent === 'Section 6 - Accuracy of Billing and Account Information' ? null :
  <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setActivecontent('Section 6 - Accuracy of Billing and Account Information')}}>
  <Entypo name="plus" size={wp("6%")} color="black" style={{marginLeft:1}} />
  </TouchableOpacity>
  }
  </View>
  {activecontent === 'Section 6 - Accuracy of Billing and Account Information' ?
  <View style={styles.oneIteamdetailscontainer}>
  <View style={styles.oneIteamdetailtext}>
  <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("8%")}}>We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e-mail and/or billing address/phone number provided at the time the order was made. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers or distributors.</Text> 
  <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("8%")}}>You agree to provide current, complete and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed.</Text> 
  <Text style={{fontFamily:'roboto-bold',lineHeight:30, fontSize:wp("4%"),}}>
  For more detail, please review our Returns Policy.
      </Text>
  </View>
  </View>
  :null
} 
</View>

<View style={styles.oneIteamstylecontainer}>
<View style={styles.oneIteamstyle}>
  <View style={{flex:1}}><Text style={styles.oneIteamtextstyle}>Section 7 - Optional Tools</Text></View>
  {activecontent === 'Section 7 - Optional Tools' ? null :
  <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setActivecontent('Section 7 - Optional Tools')}}>
  <Entypo name="plus" size={wp("6%")} color="black" style={{marginLeft:1}} />
  </TouchableOpacity>
  }
  </View>
  {activecontent === 'Section 7 - Optional Tools' ?
  <View style={styles.oneIteamdetailscontainer}>
  <View style={styles.oneIteamdetailtext}>
  <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("8%")}}>We may provide you with access to third-party tools over which we neither monitor nor have any control nor input.</Text> 
  <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("8%")}}>You acknowledge and agree that we provide access to such tools” as is” and “as available” without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.</Text> 
  <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("8%")}}>Any use by you of optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).</Text> 
  <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%")}}>We may also, in the future, offer new services and/or features through the website (including, the release of new tools and resources). Such new features and/or services shall also be subject to these Terms of Service.</Text> 
  </View>
  </View>
  :null
} 
</View>

<View style={styles.oneIteamstylecontainer}>
<View style={styles.oneIteamstyle}>
  <View style={{flex:1}}><Text style={styles.oneIteamtextstyle}>Section 8 - Third Party Links</Text></View>
  {activecontent === 'Section 8 - Third Party Links' ? null :
  <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setActivecontent('Section 8 - Third Party Links')}}>
  <Entypo name="plus" size={wp("6%")} color="black" style={{marginLeft:1}} />
  </TouchableOpacity>
  }
  </View>
  {activecontent === 'Section 8 - Third Party Links' ?
  <View style={styles.oneIteamdetailscontainer}>
  <View style={styles.oneIteamdetailtext}>
 <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("8%")}}>Certain content, products and services available via our Service may include materials from third-parties.</Text> 
 <Text style={{fontFamily:'roboto-bold',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("8%")}}>Third-party links on this site may direct you to third-party websites that are not affiliated with us.</Text> 
 <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("8%")}}>We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or services of third-parties.</Text> 
 <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%")}}>We are not liable for any harm or damages related to the purchase or use of goods, services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.</Text> 
  </View>
  </View>
  :null
} 
</View>

<View style={styles.oneIteamstylecontainer}>
<View style={styles.oneIteamstyle}>
  <View style={{flex:1}}><Text style={styles.oneIteamtextstyle}>Section 9 - User Comments, Feedback and Other Submissions</Text></View>
  {activecontent === 'Section 9 - User Comments, Feedback and Other Submissions' ?null:
  <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setActivecontent('Section 9 - User Comments, Feedback and Other Submissions')}}>
  <Entypo name="plus" size={wp("6%")} color="black" style={{marginLeft:1}} />
  </TouchableOpacity>
  }
  </View>
  {activecontent === 'Section 9 - User Comments, Feedback and Other Submissions' ?
  <View style={styles.oneIteamdetailscontainer}>
  <View style={styles.oneIteamdetailtext}>
 <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("8%")}}>If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments.</Text> 
 <Text style={{fontFamily:'roboto-bold',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("8%")}}>We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion are unlawful, offensive, threatening, libellous, defamatory, pornographic, obscene or otherwise objectionable or violates any party’s intellectual property or these Terms of Service.</Text> 
 <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("8%")}}>You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libellous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e-mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy.</Text> 
 <Text style={{fontFamily:'roboto-bold',lineHeight:30,fontSize:wp("4%")}}>We take no responsibility and assume no liability for any comments posted by you or any third-party.</Text> 
  </View>
  </View>
  :null
} 
</View>

<View style={styles.oneIteamstylecontainer}>
<View style={styles.oneIteamstyle}>
  <View style={{flex:1}}><Text style={styles.oneIteamtextstyle}>Section 10 - Personal Information</Text></View>
  {activecontent === 'Section 10 - Personal Information' ? null:
  <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setActivecontent('Section 10 - Personal Information')}}>
  <Entypo name="plus" size={wp("6%")} color="black" style={{marginLeft:1}} />
  </TouchableOpacity>
  }
  </View>
  {activecontent === 'Section 10 - Personal Information' ?
  <View style={styles.oneIteamdetailscontainer}>
  <View style={styles.oneIteamdetailtext}>
 <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%")}}>Your submission of personal information through the store is governed by our Privacy Policy.</Text> 
  </View>
  </View>
  :null
} 
</View>

<View style={styles.oneIteamstylecontainer}>
<View style={styles.oneIteamstyle}>
  <View style={{flex:1}}><Text style={styles.oneIteamtextstyle}>Section 11 - Errors, Inaccuracies and Omissions</Text></View>
  {activecontent === 'Section 11 - Errors, Inaccuracies and Omissions' ?null:
  <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setActivecontent('Section 11 - Errors, Inaccuracies and Omissions')}}>
  <Entypo name="plus" size={wp("6%")} color="black" style={{marginLeft:1}} />
  </TouchableOpacity>
  }
  </View>
  {activecontent === 'Section 11 - Errors, Inaccuracies and Omissions' ?
  <View style={styles.oneIteamdetailscontainer}>
  <View style={styles.oneIteamdetailtext}>
 <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("8%")}}>Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. </Text> 
 <Text style={{fontFamily:'roboto-bold',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("8%")}}>We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order).</Text> 
 <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%")}}>We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website should be taken to indicate that all information in the Service or on any related website has been modified or updated.</Text> 
  </View>
  </View>
  :null
} 
</View>

<View style={styles.oneIteamstylecontainer}>
<View style={styles.oneIteamstyle}>
  <View style={{flex:1}}><Text style={styles.oneIteamtextstyle}>Section 12 - Prohibited Uses</Text></View>
  {activecontent === 'Section 12 - Prohibited Uses' ? null:
  <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setActivecontent('Section 12 - Prohibited Uses')}}>
  <Entypo name="plus" size={wp("6%")} color="black" style={{marginLeft:1}} />
  </TouchableOpacity>
  }
  </View>
  {activecontent === 'Section 12 - Prohibited Uses' ?
  <View style={styles.oneIteamdetailscontainer}>
  <View style={styles.oneIteamdetailtext}>
 <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%")}}>In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.</Text> 
  </View>
  </View>
  :null
} 
</View>

<View style={styles.oneIteamstylecontainer}>
<View style={styles.oneIteamstyle}>
  <View style={{flex:1}}><Text style={styles.oneIteamtextstyle}>Section 13 - Disclaimer of Warranties; Limitation of Liability</Text></View>
  {activecontent === 'Section 13 - Disclaimer of Warranties; Limitation of Liability' ?null:
  <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setActivecontent('Section 13 - Disclaimer of Warranties; Limitation of Liability')}}>
  <Entypo name="plus" size={wp("6%")} color="black" style={{marginLeft:1}} />
  </TouchableOpacity>
  }
  </View>
  {activecontent === 'Section 13 - Disclaimer of Warranties; Limitation of Liability' ?
  <View style={styles.oneIteamdetailscontainer}>
  <View style={styles.oneIteamdetailtext}>
 <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("8%")}}>We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free.</Text> 
 <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("8%")}}>We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.</Text> 
 <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("8%")}}>You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided 'as is' and 'as available' for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.</Text> 
 <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%")}}>In no case shall Big Boy Toyz Pvt Ltd, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using the service, or for any other claim related in any way to your use of the service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law.</Text> 
  </View>
  </View>
  :null
} 
</View>

<View style={styles.oneIteamstylecontainer}>
<View style={styles.oneIteamstyle}>
  <View style={{flex:1}}><Text style={styles.oneIteamtextstyle}>Section 14 - Indemnification</Text></View>
  {activecontent === 'Section 14 - Indemnification' ?null:
  <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setActivecontent('Section 14 - Indemnification')}}>
  <Entypo name="plus" size={wp("6%")} color="black" style={{marginLeft:1}} />
  </TouchableOpacity>
  }
  </View>
  {activecontent === 'Section 14 - Indemnification' ?
  <View style={styles.oneIteamdetailscontainer}>
  <View style={styles.oneIteamdetailtext}>
 <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%")}}>You agree to indemnify, defend and hold harmless Big Boy Toyz Pvt Ltd and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.</Text> 
  </View>
  </View>
  :null
} 
</View>

<View style={styles.oneIteamstylecontainer}>
<View style={styles.oneIteamstyle}>
  <View style={{flex:1}}><Text style={styles.oneIteamtextstyle}>Section 15 - Severability</Text></View>
  {activecontent === 'Section 15 - Severability' ?null:
  <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setActivecontent('Section 15 - Severability')}}>
  <Entypo name="plus" size={wp("6%")} color="black" style={{marginLeft:1}} />
  </TouchableOpacity>
  }
  </View>
  {activecontent === 'Section 15 - Severability' ?
  <View style={styles.oneIteamdetailscontainer}>
  <View style={styles.oneIteamdetailtext}>
 <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%")}}>In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.</Text> 
  </View>
  </View>
  :null
} 
</View>

<View style={styles.oneIteamstylecontainer}>
<View style={styles.oneIteamstyle}>
  <View style={{flex:1}}><Text style={styles.oneIteamtextstyle}>Section 16 - Termination</Text></View>
  {activecontent === 'Section 16 - Termination' ?null:
  <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setActivecontent('Section 16 - Termination')}}>
  <Entypo name="plus" size={wp("6%")} color="black" style={{marginLeft:1}} />
  </TouchableOpacity>
  }
  </View>
  {activecontent === 'Section 16 - Termination' ?
  <View style={styles.oneIteamdetailscontainer}>
  <View style={styles.oneIteamdetailtext}>
 <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("8%")}}>The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.</Text> 
 <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("8%")}}>These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.</Text> 
 <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%")}}>If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).</Text> 
  </View>
  </View>
  :null
} 
</View>

<View style={styles.oneIteamstylecontainer}>
<View style={styles.oneIteamstyle}>
  <View style={{flex:1}}><Text style={styles.oneIteamtextstyle}>Section 17 - Entire Agreement</Text></View>
  {activecontent === 'Section 17 - Entire Agreement' ?null:
  <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setActivecontent('Section 17 - Entire Agreement')}}>
  <Entypo name="plus" size={wp("6%")} color="black" style={{marginLeft:1}} />
  </TouchableOpacity>
  }
  </View>
  {activecontent === 'Section 17 - Entire Agreement' ?
  <View style={styles.oneIteamdetailscontainer}>
  <View style={styles.oneIteamdetailtext}>
 <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("8%")}}>
The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.
These Terms of Service are effective unless and until terminated by either you or us.</Text> 
 <Text style={{fontFamily:'roboto-bold',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("8%")}}> You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.</Text> 
 <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%")}}>If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).</Text> 
  </View>
  </View>
  :null
} 
</View>

<View style={styles.oneIteamstylecontainer}>
<View style={styles.oneIteamstyle}>
  <View style={{flex:1}}><Text style={styles.oneIteamtextstyle}>Section 18 - Governing Law</Text></View>
  {activecontent === 'Section 18 - Governing Law' ?null:
  <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setActivecontent('Section 18 - Governing Law')}}>
  <Entypo name="plus" size={wp("6%")} color="black" style={{marginLeft:1}} />
  </TouchableOpacity>
  }
  </View>
  {activecontent === 'Section 18 - Governing Law' ?
  <View style={styles.oneIteamdetailscontainer}>
  <View style={styles.oneIteamdetailtext}>
 <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%")}}>These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of Plot No. 104, Sector 37-1, Pace City Gurgaon Haryana India 122001.</Text> 
  </View>
  </View>
  :null
} 
</View>

<View style={styles.oneIteamstylecontainer}>
<View style={styles.oneIteamstyle}>
  <View style={{flex:1}}><Text style={styles.oneIteamtextstyle}>Section 19 - Changes to Terms of Service</Text></View>
  {activecontent === 'Section 19 - Changes to Terms of Service' ?null:
  <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setActivecontent('Section 19 - Changes to Terms of Service')}}>
  <Entypo name="plus" size={wp("6%")} color="black" style={{marginLeft:1}} />
  </TouchableOpacity>
  }
  </View>
  {activecontent === 'Section 19 - Changes to Terms of Service' ?
  <View style={styles.oneIteamdetailscontainer}>
  <View style={styles.oneIteamdetailtext}>
 <Text style={{fontFamily:'roboto-bold',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("8%")}}>You can review the most current version of the Terms of Service at any time at this page.</Text> 
 <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%")}}>We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.</Text> 
  </View>
  </View>
  :null
} 
</View>

<View style={styles.oneIteamstylecontainer}>
<View style={styles.oneIteamstyle}>
  <View style={{flex:1}}><Text style={styles.oneIteamtextstyle}>Section 20 - Scope</Text></View>
  {activecontent === 'Section 20 - Scope' ?null:
  <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setActivecontent('Section 20 - Scope')}}>
  <Entypo name="plus" size={wp("6%")} color="black" style={{marginLeft:1}} />
  </TouchableOpacity>
}
  </View>
  {activecontent === 'Section 20 - Scope' ?
  <View style={styles.oneIteamdetailscontainer}>
  <View style={styles.oneIteamdetailtext}>
 <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("8%")}}>Products and cars mentioned on the Big Boy Toyz website are subject to stock availability. All prices shown do not include extra costs, such as, but not limited to, taxes, change in registration, and transportation. All product information such as price, colour, engine specifications, service history, registration, etc is accurate to the day and date of posting. For specific product availability, finance, insurance, registration and sales please visit our studio or showroom or contact us on the numbers provided on our website by different departments.</Text> 
  </View>
  </View>
  :null
} 
</View>

<View style={styles.oneIteamstylecontainer}>
<View style={styles.oneIteamstyle}>
  <View style={{flex:1}}><Text style={styles.oneIteamtextstyle}>Section 21 - Restrictions on Use of Big Boy Toyz Materials</Text></View>
  {activecontent === 'Section 21 - Restrictions on Use of Big Boy Toyz Materials' ?null:
  <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setActivecontent('Section 21 - Restrictions on Use of Big Boy Toyz Materials')}}>
  <Entypo name="plus" size={wp("6%")} color="black" style={{marginLeft:1}} />
  </TouchableOpacity>
  }
  </View>
  {activecontent === 'Section 21 - Restrictions on Use of Big Boy Toyz Materials' ?
  <View style={styles.oneIteamdetailscontainer}>
  <View style={styles.oneIteamdetailtext}>
 <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("8%")}}>You are not authorized to modify, copy, distribute, transmit, display, reproduce, publish, license, create derivative works from, transfer or sell any information, products, services or images obtained from any Big Boy Toyz websites, directly or indirectly in any medium. Neither these materials nor any portion thereof may be stored in a computer except for personal and non-commercial use.</Text> 
 <Text style={{fontFamily:'roboto-bold',lineHeight:30,fontSize:wp("4%")}}>Big Boy Toyz will not be held liable for any delays, errors or omissions there from, or in the transmission or delivery of all or any part thereof, or for any damages arising from any of the foregoing.</Text> 
  </View>
  </View>
  :null
} 
</View>

<View style={styles.oneIteamstylecontainer}>
<View style={styles.oneIteamstyle}>
  <View style={{flex:1}}><Text style={styles.oneIteamtextstyle}>Section 22 - Live Chat</Text></View>
  {activecontent === 'Section 22 - Live Chat' ?null:
  <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setActivecontent('Section 22 - Live Chat')}}>
  <Entypo name="plus" size={wp("6%")} color="black" style={{marginLeft:1}} />
  </TouchableOpacity>
  }
  </View>
  {activecontent === 'Section 22 - Live Chat' ?
  <View style={styles.oneIteamdetailscontainer}>
  <View style={styles.oneIteamdetailtext}>
 <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("8%")}}>Big Boy Toyz implements a Live Chat feature which enables you to connect with our team directly and instantly. The data you fill out such as Name, Email ID, Phone Number and Message is stored in our database.</Text> 
 <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("8%")}}>The conversation between you and our Live Chat representative is recorded for internal training and safety purpose. No part of this conversation is given to Third Party Users or impeached by any department. Every conversation is stored for future references so as to make your experience more personalised and relevant.</Text> 
 <Text style={{fontFamily:'roboto-bold',lineHeight:30,fontSize:wp("4%")}}>By using live chat, you adhere to the terms of our policy.</Text> 
  </View>
  </View>
  :null
} 
</View>


<View style={{...styles.oneIteamstylecontainer}}>
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


<View style={{...styles.oneIteamstylecontainer,marginBottom:hp("15%")}}>
<View style={styles.oneIteamstyle}>
  <View style={{flex:1}}><Text style={styles.oneIteamtextstyle}>Online Store Terms</Text></View>
  {activecontent === 'Online Store Terms' ?null:
  <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setActivecontent('Online Store Terms')}}>
  <Entypo name="plus" size={wp("6%")} color="black" style={{marginLeft:1}} />
  </TouchableOpacity>
  }
  </View>
  {activecontent === 'Online Store Terms' ?
  <View style={styles.oneIteamdetailscontainer}>
  <View style={styles.oneIteamdetailtext}>
 <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("8%")}}>By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.</Text> 
 <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("8%")}}>You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).</Text> 
 <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%"),marginBottom:wp("8%")}}>You must not transmit any worms or viruses or any code of a destructive nature.</Text> 
 <Text style={{fontFamily:'roboto-regular',lineHeight:30,fontSize:wp("4%"),}}>A breach or violation of any of the Terms will result in an immediate termination of your Services.</Text> 
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

export default TearmOfUse;

