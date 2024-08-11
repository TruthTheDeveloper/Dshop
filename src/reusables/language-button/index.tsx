import { ReactNode } from "react";
import { View , TouchableOpacity} from "react-native";
import { Confirm} from "../../assets/svg";
import AppText from "../app-text";

const LanguageButton = ({logo, text, isChecked, onPress}:{logo:ReactNode, text:string, isChecked:boolean, onPress: () => void}) => {
    return(
        <TouchableOpacity onPress={onPress} style={[isChecked?{borderColor:'white', borderWidth:1,  paddingVertical:15,  borderRadius:5, height:60, marginVertical:20}:{borderColor:'grey', borderWidth:0.3,  paddingVertical:15,  borderRadius:5, height:60, marginVertical:20} ]}>
            <View style={{flexDirection:'row', alignItems:'center', paddingHorizontal:10}}>
            {logo}
            <AppText text={text} styles={{marginHorizontal:30}} color='white'/>
            {isChecked && <Confirm style={{marginLeft:'auto'}}/>}
            </View>
        </TouchableOpacity>
    )
}

export default LanguageButton;
