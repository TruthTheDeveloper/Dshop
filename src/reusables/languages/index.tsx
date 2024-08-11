import { ReactNode } from "react";
import { View, TouchableOpacity } from "react-native";
import AppText from "../app-text";

const Languages = ({Icon, language, isSelected, onPress}:{Icon:ReactNode, language:string, isSelected:boolean, onPress: () => void}) => {

    const iconColor = isSelected ? '#4CA6A8' : '#ABB3C7'; 
    return(
        <TouchableOpacity onPress={onPress} style={{borderColor: iconColor, borderRadius:10, width:'46%', padding:10, borderWidth:1, marginVertical:6, marginHorizontal:5}}>
            <View style={{margin:'auto',paddingVertical:15,}}>
            {Icon}
            <AppText text={language}  styles={{textAlign:'center', paddingTop:20}} fontSize={16} color={iconColor}/>
            </View>
        </TouchableOpacity>
    )
}

export default Languages;
