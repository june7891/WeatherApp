import { Image, View } from "react-native";
import Txt from "../Txt/Txt";
import {s} from "./MeteoBasic.style.jsx"
import Clock from "../Clock/Clock";

export function MeteoBasic({city, temperature, interpretation}) {
  return (
    <>
      <View style={s.clock}>
       <Clock/>
      </View>

      <Txt style={s.city}>{city}</Txt>
      <Txt style={s.weather_label}>{interpretation?.label}</Txt>

      <View style={s.temp_box}>
        <Txt style={s.temp}>{temperature}°</Txt>
        <Image style={s.image} source={interpretation?.image}/>
      </View>
    </>
  );
}
