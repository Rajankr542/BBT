import React from 'react';
import { 
View, 
StyleSheet,
Text,
FlatList
} from 'react-native';
import OurTeamOneteamMember from '../Component/OurTeamOneteamMember';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const OurTeamTypeReplicate = ({data,Team,style}) => {
    return (
      <View style={{marginBottom:hp("2.8%"),...style}}>
      <Text style={styles.lissstyle}>{Team}</Text>
  <FlatList
  horizontal
  showsHorizontalScrollIndicator={false}
  data={data}
  keyExtractor={(onememeber) => onememeber.id}
  renderItem={({item}) => {
  return (
  <OurTeamOneteamMember 
  item={item}
  />
  )
  }}
  />
  </View>
    );
  
  };
  const styles = StyleSheet.create({
    lissstyle:{
      fontFamily:'roboto-medium',
      fontSize:wp("7%"),
      marginLeft:wp("5%")
      }
  });
  
  export default OurTeamTypeReplicate;