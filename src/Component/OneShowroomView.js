import React from 'react';
import { 
  View, 
  StyleSheet,
  Text,
  Dimensions,
  Image,
  FlatList
} from 'react-native';
import ImageSlider from 'react-native-image-slider';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const OneShowroomView = ({data}) => {
  const images = data[0].imagepath.map(a => a.image); 
return (
  <View>
<View style={{marginBottom:hp("5%"),marginTop:hp("1%")}}>
 <ImageSlider
          loopBothSides
          autoPlayWithInterval={3000}
          images={images}
          customSlide={({ index, item, style }) => (
            <View key={index} style={[style]}>
              <Image source={{ uri: item }} style={styles.imagestyle} />
            </View>
          )}
        />
  </View>
  <View>

    <Text style={{fontFamily:'roboto-medium',fontSize:wp("8%"),marginHorizontal:wp("7%")}}>About Showroom</Text>
   
    <View style={{marginTop:hp("2%")}}>
    <FlatList
  showsVerticalScrollIndicator={false}
  data={data[0].aboutshowroom}
  keyExtractor={(onememeber) => onememeber.id}
  renderItem={({item}) => {
  return (
<View style={{flex:1,flexDirection:'row',marginHorizontal:wp("7%")}}>
  <View style={{width:wp("2.5%"),height:hp("0.2%"),borderRadius:5,backgroundColor:'#000',opacity:.7,marginRight:wp("2%"),marginTop:hp("1.2%")}}/>
  <Text style={{fontFamily:'roboto-regular',fontSize:wp("4.6%"),lineHeight:wp("6%"),opacity:.8,marginBottom:hp("2%")}}>{item.text}</Text>
  </View>
  )
  }}
  />
  </View>
  
  </View>


</View>
);
  };

  const win = Dimensions.get('window');
  const styles = StyleSheet.create({
    imagestyle:{
      width:wp("100%"),
      height:hp("38%")
    }
    });
  
  export default OneShowroomView;