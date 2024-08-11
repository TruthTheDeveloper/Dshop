import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { EyeClose } from "../../assets/svg";
import AppPasswordValidator from "../app-password-validator";
import AppText from "../app-text";

type AppSignUpInputProps = {
    fieldName: string;
    secure?: boolean;
    text: string;
    onChange: (text: string) => void; // Modify this line
    changeSecure?:() => void;

  };

  const AppSignUpInput: React.FC<AppSignUpInputProps> = ({fieldName, secure = false, text, onChange, changeSecure}) =>{
    const [isFocused, setIsFocused] = useState(false);


    return (
        <View style={{paddingVertical:30}}>
            {isFocused ? <AppText text={fieldName} color={'#ABB3C7'}/> : null}
            <View style={{ borderBottomColor:'#ABB3C7', borderBottomWidth:1, flexDirection:'row',}}>
            <TextInput 
                style={{color:'white', width:'100%'}}  
                placeholder={isFocused ? '' : fieldName} 
                placeholderTextColor={'#ABB3C7'} 
                secureTextEntry={secure} 
                onFocus={() => setIsFocused(true)}
                // onBlur={() => setIsFocused(false)}
                onChangeText={onChange}
                value={text}
            />
            {secure && <EyeClose style={{marginLeft:'auto', marginVertical:'auto', marginRight:5}} onPress={changeSecure}/>}
            </View>
            <AppPasswordValidator fieldName={fieldName.toLocaleLowerCase()} text={text} />
        </View>
    )
}

export default AppSignUpInput;
