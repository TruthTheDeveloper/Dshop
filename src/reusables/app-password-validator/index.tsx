import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { validateEmail, validatePassword } from '../../helpers/general';
import styles from './styles';

type AppPasswordValidatorProps = {
  text: string;
  fieldName: string;
};

const AppPasswordValidator: React.FC<AppPasswordValidatorProps> = ({fieldName, text}) => {
  const [errorMessages, setErrorMessages] = useState<string[]>([]);


  useEffect(() => {
    if (fieldName.includes('password') && text.length >= 1) setErrorMessages(validatePassword(text));
    if (fieldName.includes('email') && text.length >= 1) setErrorMessages(validateEmail(text));
  }, [text]);

  return (
    <View style={styles.container}>
      {errorMessages.map((error, index) => (
        <Text key={index} style={styles.errorText}>
          {error}
        </Text>
      ))}
    </View>
  );
};

export default AppPasswordValidator;
