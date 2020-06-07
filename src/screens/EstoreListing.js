import React,{useState} from 'react';
import { 
  View, 
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
import CustomHeader from '../Component/Header';
import EstoreOneProduct from '../Component/EstoreOneProduct';
import products from '../Estore.json';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const EstoreListing = () => {
    const [activemethod,setActivemethod]=useState('list');
    const [horizontal,sethorizontal]=useState(false);
    const [activeicon,setActiveicon]=useState('perfume');
  return (
      <>
    <View style={{flex:1,backgroundColor:'#f6f6f7'}}>
      <CustomHeader
      cart='true'
      star='false'
      />
{horizontal ?
    <View style={{flex:1,marginTop:wp("2%")}}>
   <View style={{...styles.customcontainer,marginBottom:wp("5%")}}>

   <View style={styles.headertext}>
     <Text style={{fontSize:wp('8%'),marginLeft:wp('1%')}}>
         <Text  style={{fontFamily: 'roboto-regular'}}>What you would like to </Text> 
         <Text  style={{fontFamily: 'roboto-bold'}}>find?</Text> 
         </Text>
   </View>

   <View style={styles.imagesparenticoconatiner}>
       <TouchableOpacity 
       onPress={() => { 
           setActivemethod('grid');
           sethorizontal(true);
       }}
       style={{...styles.imagesicoconatiner,marginRight:wp("2%")}}>
           {activemethod==='grid' ?
           <Image source={require('../../assets/grid_active.png')} style={styles.imagesicontolist}/>
           :
           <Image source={require('../../assets/grid.png')} style={styles.imagesicontolist}/>
           }
           </TouchableOpacity >
       <TouchableOpacity 
       onPress={() => { 
           setActivemethod('list');
           sethorizontal(false);
       }}
       style={styles.imagesicoconatiner}>
       {activemethod==='list' ?
       <Image source={require('../../assets/list_active.png')} style={styles.imagesicontolist}/>
       :
       <Image source={require('../../assets/list.png')} style={styles.imagesicontolist}/>
       }
       </TouchableOpacity>
   </View>
</View>
<FlatList
horizontal
showsHorizontalScrollIndicator={false}
data={products}
keyExtractor={(testext) => testext.id}
renderItem={({item}) => {
return (
<EstoreOneProduct 
item={item}
style={{
    width:wp('80%'),
    marginHorizontal:wp("0"),
    marginLeft:wp("3%"),
    marginRight:wp("3%")
    }}
/>
)
}}
/>
</View>
:
<FlatList
showsVerticalScrollIndicator={false}
ListHeaderComponent = { 
    <View style={{...styles.customcontainer,marginBottom:wp("5%")}}>

    <View style={styles.headertext}>
      <Text style={{fontSize:wp('8%'),marginLeft:wp('1%')}}>
          <Text  style={{fontFamily: 'roboto-regular'}}>What you would like to </Text> 
          <Text  style={{fontFamily: 'roboto-bold'}}>find?</Text> 
          </Text>
    </View>
 
    <View style={styles.imagesparenticoconatiner}>
        <TouchableOpacity 
        onPress={() => { 
            setActivemethod('grid');
            sethorizontal(true);
        }}
        style={{...styles.imagesicoconatiner,marginRight:wp("2%")}}>
            {activemethod==='grid' ?
            <Image source={require('../../assets/grid_active.png')} style={styles.imagesicontolist}/>
            :
            <Image source={require('../../assets/grid.png')} style={styles.imagesicontolist}/>
            }
            </TouchableOpacity >
        <TouchableOpacity 
        onPress={() => { 
            setActivemethod('list');
            sethorizontal(false);
        }}
        style={styles.imagesicoconatiner}>
        {activemethod==='list' ?
        <Image source={require('../../assets/list_active.png')} style={styles.imagesicontolist}/>
        :
        <Image source={require('../../assets/list.png')} style={styles.imagesicontolist}/>
        }
        </TouchableOpacity>
    </View>
 </View> 
}
data={products}
keyExtractor={(testext) => testext.id}
renderItem={({item}) => {
return (
<EstoreOneProduct 
item={item}
/>
)
}}
/>
}

{horizontal ?
<View style={styles.bottomparentcontainer}>
{activeicon === 'perfume'?
<View style={{...styles.bootomiconcontainer,backgroundColor:'#000'}} ><Image source={require('../../assets/perfume_active.png')} style={styles.bootomicon}/></View>
:
<TouchableOpacity  onPress={() => {setActiveicon('perfume')}} style={styles.bootomiconcontainer} ><Image source={require('../../assets/perfume.png')} style={styles.bootomicon}/></TouchableOpacity>
}

{activeicon === 'pen'?
<View  style={{...styles.bootomiconcontainer,backgroundColor:'#000'}} ><Image source={require('../../assets/pen_active.png')} style={styles.bootomicon}/></View>
:
<TouchableOpacity onPress={() => {setActiveicon('pen')}} style={styles.bootomiconcontainer} ><Image source={require('../../assets/pen.png')} style={styles.bootomicon}/></TouchableOpacity>
}

{activeicon === 'playing_card'?
<View  style={{...styles.bootomiconcontainer,backgroundColor:'#000'}} ><Image source={require('../../assets/playing_card_active.png')} style={styles.bootomicon}/></View>
:
<TouchableOpacity onPress={() => {setActiveicon('playing_card')}} style={styles.bootomiconcontainer} ><Image source={require('../../assets/playing_card.png')} style={styles.bootomicon}/></TouchableOpacity>
}
{activeicon === 'jigsaw'?
<View  style={{...styles.bootomiconcontainer,backgroundColor:'#000'}} ><Image source={require('../../assets/jigsaw_active.png')} style={styles.bootomicon}/></View>
:
<TouchableOpacity onPress={() => {setActiveicon('jigsaw')}} style={styles.bootomiconcontainer} ><Image source={require('../../assets/jigsaw.png')} style={styles.bootomicon}/></TouchableOpacity>
}
{activeicon === 'sticker'?
<View  style={{...styles.bootomiconcontainer,backgroundColor:'#000'}} ><Image source={require('../../assets/sticker_active.png')} style={styles.bootomicon}/></View>
:
<TouchableOpacity onPress={() => {setActiveicon('sticker')}} style={styles.bootomiconcontainer} ><Image source={require('../../assets/sticker.png')} style={styles.bootomicon}/></TouchableOpacity>
}

</View>
:
null

}
</View>
    
    </>
  );

};

const styles = StyleSheet.create({
headertext:{
marginBottom:hp('1%'),
width:wp("60%")
},
customcontainer:{
marginHorizontal:wp('5%'),
marginTop:hp("3%"),
flexDirection:'row',
justifyContent:"space-between"
},
imagesparenticoconatiner:{
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-end',
    marginTop:wp("1%")
},
imagesicontolist:{
    width:wp("6%"),
    height:wp("6%"),
    resizeMode:"contain"
},
imagesicoconatiner:{
backgroundColor:'#fff',
padding:wp("2%"),
height:wp("10%"),
borderRadius:wp("2%")

},
bootomicon:{
    height:wp("8%"),
    width:wp("8%"),
    resizeMode:'contain',
    alignSelf:'center'
},
bootomiconcontainer:{
    width:wp('16%'),
    alignSelf:'center',
    backgroundColor:'#fff',
    marginHorizontal:wp("1%"),
    padding:wp("3%"),
    borderRadius:wp("4%")
},
bottomparentcontainer:{
    marginBottom:hp("2%"),
    flexDirection:'row',
    marginHorizontal:wp("5%"),
    justifyContent:'center'
}

});

export default EstoreListing;