import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Home } from "./pages/Home/Home.jsx";
import { s } from "./App.style.jsx";
import { ImageBackground } from "react-native";
import backgroundimg from "./assets/background.jpg";
import AlataRegular from "./assets/fonts/Alata-Regular.ttf";
import { useFonts } from "expo-font";

export default function App() {
  const [isFontLoaded] = useFonts({
    "Alata-Regular": require('./assets/fonts/Alata-Regular.ttf'),
  });



  return (
    <ImageBackground
      source={backgroundimg}
      style={s.img_background}
      imageStyle={s.img}
    >
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          {isFontLoaded ? <Home /> : null}
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
