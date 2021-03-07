import { StatusBar } from 'expo-status-bar';
import React,{ useState} from 'react';
import * as Font from 'expo-font'; 
import AppLoading from 'expo-app-loading';
import Navigator from './routes/drawer';

const getFonts = () => Font.loadAsync({
    'notosansfr-regular': require("./assets/fonts/NotoSansKR-Regular.otf"),
    'notosanskr-bold': require("./assets/fonts/NotoSansKR-Bold.otf")
  });

export default function App() {
  const [fontsLoad, setFontsLoad] = useState(false);

  if(fontsLoad){
    return (
      <Navigator />
     );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts} 
        onFinish={()=> setFontsLoad(true)}
        onError={console.warn}
      />
    )
  }  
}

