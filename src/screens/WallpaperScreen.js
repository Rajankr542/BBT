import React from 'react';
import { 
  View, 
  StyleSheet,
  ScrollView,
  FlatList
} from 'react-native';
import {Text} from 'react-native-elements';
import CustomHeader from '../Component/Header';
import GalleryOneImage from '../Component/GalleryOneImage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const WallpaperScreen = () => {

  const carimage = {
    car1: require('../../assets/car1.jpg'),
    car2: require('../../assets/car2.jpg'),
    car3: require('../../assets/car3.jpg'),
    car4: require('../../assets/car4.jpg')
  }

  const photographerphoto = {
    photo1: require('../../assets/bbt.png'),
    photo2: require('../../assets/kartik.png'),
    photo3: require('../../assets/jaidev.menon.png')
  }

  const stateImage=[
    {   id:'1',
        photo: photographerphoto.photo3, 
        photosrc:'../../assets/jaidev.menon.png',
        car:carimage.car1,
        carsrc:'https://www.bigboytoyz.com/images/wallpapers/King-of-Mountain-Thumbnail.jpg',
        photographername:'Jaydev Menon',
        imagecaption:'King of Mountain'
      },
      {   id:'2',
      photo: photographerphoto.photo2, 
      photosrc:'../../assets/kartik.png',
      car:carimage.car2,
      carsrc:'https://www.bigboytoyz.com/images/wallpapers/Enviable-power-Thumbnail.jpg',
      photographername:'Karthik Reddy',
      imagecaption:'Enviable Power'
    },
    {   id:'3',
    photo: photographerphoto.photo1, 
    photosrc:'../../assets/bbt.png',
    car:carimage.car3,
    carsrc:'https://www.bigboytoyz.com/images/wallpapers/Astonishing-Garage-Thumbnail.jpg',
    photographername:'Big Boy Toyz',
    imagecaption:'Astonishing Garage'
  },
  {   id:'4',
  photo: photographerphoto.photo3, 
  photosrc:'../../assets/jaidev.menon.png',
  car:carimage.car4,
  carsrc:'https://www.bigboytoyz.com/images/wallpapers/thumb-Lamborghini.jpg',
  photographername:'Kartik Sadekar',
  imagecaption:'Lamborghini Aventador'
},
{   id:'5',
photo: photographerphoto.photo3, 
photosrc:'../../assets/jaidev.menon.png',
car:carimage.car1,
carsrc:'https://www.bigboytoyz.com/images/wallpapers/King-of-Mountain-Thumbnail.jpg',
photographername:'Jaydev Menon',
imagecaption:'King of Mountain'
},
{   id:'6',
photo: photographerphoto.photo2, 
photosrc:'../../assets/kartik.png',
car:carimage.car2,
carsrc:'https://www.bigboytoyz.com/images/wallpapers/Enviable-power-Thumbnail.jpg',
photographername:'Karthik Reddy',
imagecaption:'Enviable Power'
},
{   id:'7',
photo: photographerphoto.photo1, 
photosrc:'../../assets/bbt.png',
car:carimage.car3,
carsrc:'https://www.bigboytoyz.com/images/wallpapers/Astonishing-Garage-Thumbnail.jpg',
photographername:'Big Boy Toyz',
imagecaption:'Astonishing Garage'
},
{   id:'8',
photo: photographerphoto.photo3, 
photosrc:'../../assets/jaidev.menon.png',
car:carimage.car4,
carsrc:'https://www.bigboytoyz.com/images/wallpapers/thumb-Lamborghini.jpg',
photographername:'Kartik Sadekar',
imagecaption:'Lamborghini Aventador'
}
    ]

  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <CustomHeader
      />
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.customcontainer}>

        <View style={styles.headertext}>
          <Text 
          style={{fontFamily: 'roboto-regular',fontSize:wp('10%'),marginLeft:wp('1%')}}
          >BBT Wallpaper</Text>
        </View>


        <FlatList
        horizontal={false}
        showsVerticalScrollIndicator={false}
      data={stateImage}
      keyExtractor={(testext) => testext.id}
      renderItem={({item}) => {
    return (
     <GalleryOneImage 
        photographername={item.photographername}
        carpath={item.car}
        photographerphoto={item.photo}
        imagecaption={item.imagecaption}
        item={item}
        />
     )
  }}
  />
  
    </View>
    </ScrollView>
    </View>
  );


};

const styles = StyleSheet.create({
  headertext:{
    marginBottom:hp('1%'),
    marginTop:hp('4%')
  },
  customcontainer:{
    marginHorizontal:wp('5%'),
  }
});

export default WallpaperScreen;