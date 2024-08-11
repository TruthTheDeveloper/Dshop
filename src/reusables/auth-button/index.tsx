import { View, TouchableOpacity } from "react-native";
import AppText from "../app-text";

const AuthButton = ({icon, text}:{icon:any, text:string}) => {


    return(
        <TouchableOpacity style={{backgroundColor:'white', flexDirection:'row', paddingVertical:8, paddingHorizontal:20, borderRadius:5, marginTop:20}}>
            {icon}
            <AppText text={text} styles={{textAlign:'center', margin:'auto'}} color="#000"/>
        </TouchableOpacity>
    )
}

export default AuthButton;