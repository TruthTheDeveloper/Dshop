import { View, TouchableOpacity } from "react-native";
import { Confirm } from "../../assets/svg";
import AppText from "../app-text";

interface SelectRatingInputProps {
  Icon: React.ReactElement;
  Text: string;
  subText: string;
  isSelected: boolean;
  onPress: () => void;
}

const SelectRatingInput: React.FC<SelectRatingInputProps> = ({Icon, Text, subText, isSelected, onPress}) => {
    return(
        <TouchableOpacity onPress={onPress} style={{ flexDirection:"row", marginVertical:10, borderColor: isSelected ? 'white' : '#2F3540', borderWidth:1, paddingVertical:20, borderRadius:10, paddingHorizontal:15}}>
            {Icon }
            <View style={{marginLeft:20}}>
                <AppText text={Text} color="#ABB3C7"/>
                <AppText text={subText} color="#ABB3C7" styles={{width:190}}/>
            </View>
            <View style={{marginLeft:'auto', marginTop:10}}>
            {isSelected && <Confirm />}
            </View>
        </TouchableOpacity>
    )
}

export default SelectRatingInput;
