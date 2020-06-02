import React,{useState} from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { setNavigator } from './src/navigationRef';
import WallpaperScreen from './src/screens/WallpaperScreen';
import WallpaperDetailScreen from './src/screens/WallpaperDetailScreen';
import Wallpaperfavorite from './src/screens/Wallpaperfavorite';
import OurShowroomLisiting from './src/screens/OurShowroomLisiting';
import WhyBbt from './src/screens/WhyBbt';
import OurTeam from './src/screens/OurTeam';
import OurTeamDetailmessage from './src/screens/OurTeamDetailmessage';
import PrivicyPolicy from './src/screens/PrivicyPolicy';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

const fetchFonts = () => {
  return Font.loadAsync({
  'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
  'roboto-medium': require('./assets/fonts/Roboto-Medium.ttf'),
  'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
  'roboto-light': require('./assets/fonts/Roboto-Light.ttf'),
  });
  };



const switchNavigator = createSwitchNavigator({
  mainFlow: createDrawerNavigator({ 

  WallPaper:createStackNavigator({
  wallpaperlisting: WallpaperScreen,
  wallpaperdetails: WallpaperDetailScreen,
  Wallpaperfavorite:Wallpaperfavorite
 },
 {
   headerMode:"none"
 }),
 Team:createStackNavigator({
 OurTeam:OurTeam,
 OurTeamDetailmessage:OurTeamDetailmessage

 },
 {
   headerMode:"none"
 }),

  OurShowroom : OurShowroomLisiting,
  WhyBBT : WhyBbt,
  Privicy : PrivicyPolicy
  },
  {
    initialRouteName: "WallPaper",
    unmountInactiveRoutes: true,
    edgeWidth:100
  })

});

const App = createAppContainer(switchNavigator);

export default () => {
const [downloadedFont,setDownloadedfont]=useState(false);


  if(!downloadedFont){
    return (
        <AppLoading 
        startAsync={fetchFonts}
        onFinish={() => setDownloadedfont(true)}
        />
    );
  }

  return (
          <App 
          ref={navigator => {
            setNavigator(navigator);
          }}
          />
  );
};
