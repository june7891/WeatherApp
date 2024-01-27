import { View } from "react-native"
import { s, StyledLabel, StyledValue, StyledContainer} from "./MeteoAdvanced.style.jsx"
import Txt from "../Txt/Txt.jsx"

export default function MeteoAdvanced({dusk, dawn, wind}) {
  return (
    <View style={s.container}>
   <StyledContainer>
   <StyledValue>{dusk}</StyledValue>
     <StyledLabel>Aube</StyledLabel>
 </StyledContainer>
      <StyledContainer>
      <StyledValue>{dawn}</StyledValue>
      <StyledLabel>Crépuscule</StyledLabel>
      </StyledContainer>
      <StyledContainer>
      <StyledValue>{wind} km/h</StyledValue>
      <StyledLabel>Vent</StyledLabel>
      </StyledContainer>
    </View>
)
}
