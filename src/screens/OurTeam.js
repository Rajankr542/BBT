import React,{useState} from 'react';
import { 
View, 
StyleSheet,
ScrollView,
Text,
TouchableOpacity,
FlatList
} from 'react-native';
import CustomHeader from '../Component/Header';
import OurTeamManagementoneMember from '../Component/OurTeamManagementoneMember';
import OurTeamTypeReplicate from '../Component/OurTeamTypeReplicate';
import Ourteamdata from '../contentforourteam.json';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';




const OurTeam = () => {

const filterResultByType = (position,position1) => {
return Ourteamdata.Team.filter(resturant => {
            return resturant.position === position || resturant.position === position1 ;
});
};

const [currenttab,setCurrenttab]=useState('themanagement')
return (
<View style={{flex:1}}>
<CustomHeader 
star='false'
/>
<View style={styles.tabcontainer}>

<TouchableOpacity 
onPress={() => {setCurrenttab('themanagement')}} 
style={{position:'relative'}}>
{currenttab === 'themanagement' ?
    <Text style={{...styles.tabtext,opacity:1}}>The Management</Text> 
    :
    <Text style={styles.tabtext}>The Management</Text>
}
{currenttab === 'themanagement' ?
    <View style={styles.activeDot}/> 
    :
    null
} 
</TouchableOpacity>

<TouchableOpacity 
onPress={() => {setCurrenttab('theteam')}} 
style={{position:'relative'}}>
{currenttab === 'theteam' ?
    <Text style={{...styles.tabtext,opacity:1}}>The Team</Text> 
    :
    <Text style={styles.tabtext}>The Team</Text>
}
{currenttab === 'theteam' ?
    <View style={styles.activeDot}/> 
    :
    null
} 
</TouchableOpacity>

</View>

{currenttab === 'themanagement' ?
    <ScrollView showsVerticalScrollIndicator={false} style={{marginVertical:hp("2%")}}>

    <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    data={Ourteamdata.TheManagement}
    keyExtractor={(onememeber) => onememeber.id}
    renderItem={({item}) => {
    return (
    <OurTeamManagementoneMember 
    item={item}
    />
    )
    }}
    />
    </ScrollView>
    :
    null
} 

{currenttab === 'theteam' ?
     <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:hp("3%")}}>
       <OurTeamTypeReplicate Team='Loans & Finance' data={filterResultByType('Loans & Finance','Head- Finance & Loans')} />
       <OurTeamTypeReplicate Team='Accounts' data={filterResultByType('Accounts')} />
       <OurTeamTypeReplicate Team='Compliance' data={filterResultByType('Compliance')} />
       <OurTeamTypeReplicate Team='After Sales' data={filterResultByType('After Sales','HOD - After Sales & Service')} 
       style={{marginBottom:hp("10%")}}/>
    </ScrollView>
    :
    null
} 

</View>
  );


};

const styles = StyleSheet.create({
tabcontainer:{
flexDirection:'row',
justifyContent:'space-between',
paddingHorizontal:wp("18%"),
paddingVertical:hp("5%")
},
tabtext:{
fontFamily:'roboto-medium',
fontSize:wp("4.5%"),
color:'#000',
opacity:.6
},
activeDot:{
height:wp("1.5%"),
width:wp("1.5%"),
backgroundColor:'#000',
borderRadius:wp("5%"),
alignSelf:'center',
marginTop:hp("2.5%")
}
});

export default OurTeam;