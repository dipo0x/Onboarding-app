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
        <Text style={appStyles.phoneHeaderText}>Let’s get you signed up!</Text>
        
      <View style={appStyles.inputContainer}>
        <View style={appStyles.countryCodeContainer}>
          <Text style={appStyles.countryCodeText}>🇳🇬+234</Text> 
        </View>
        <TextInput
          style={appStyles.textInput}
          placeholder="Phone number"
          placeholderTextColor="#999"
          value={phoneNumber}
          onChangeText={setPhoneNumber} 
          keyboardType="numeric"
        />
      </View>

      <Text style={appStyles.termsText}>
        By entering your number, you&apos;re agreeing to our{' '}
        <Text style={appStyles.linkText}>Terms & Conditions</Text> and{' '}
        <Text style={appStyles.linkText}>Privacy Policy</Text>
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