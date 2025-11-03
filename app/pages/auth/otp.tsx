import AuthScreenWrapper from "@/app/pages/auth/wrapper";
import { appStyles } from "@/styles/auth";
import { Text, TextInput, View, TouchableOpacity} from "react-native";
import { useState } from "react";
import { router } from "expo-router";

export default function SignUp() {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  
  return (
    <AuthScreenWrapper>
      <View style={[appStyles.container, appStyles.phonePage]}>
        <Text style={appStyles.otpHeaderText}> Enter the code we just texted you</Text>
        
      <View style={appStyles.inputContainer}>
        <TextInput
          style={appStyles.otpTextInput}
          placeholder="• • • • • •"
          placeholderTextColor="#999"
          value={phoneNumber}
          onChangeText={setPhoneNumber} 
          keyboardType="number-pad"
          maxLength={6}
        />
      </View>

      <Text style={appStyles.termsText}>
       Didn&apos;t get it? { }
        <Text style={appStyles.linkText}>Tap to resend.</Text>

      </Text>

      <TouchableOpacity
        style={appStyles.nextButton}
        onPress={() => {
          router.push("/pages/auth/otp")
        }}
      >
        <Text style={appStyles.nextButtonText}>→</Text>
      </TouchableOpacity>

      </View>
    </AuthScreenWrapper>
  );
}