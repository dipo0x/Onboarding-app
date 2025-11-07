import BackButtonWrapper from "@/app/pages/auth/generic/back_button_wrapper";
import { appStyles, colors } from "@/styles/auth.style";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Phone() {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const validatePhoneNumber = async ( phoneNumber: string) => {
    if(phoneNumber.length < 5) {
      setErrorMessage("Phone number cannot be lesser than 5 digits")
      return
    }
    router.push("/pages/auth/otp");
  }
    
  return (
    <BackButtonWrapper>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, justifyContent: "space-between" }}
      >
        <View style={[appStyles.container, appStyles.phonePage]}>
          <Text style={appStyles.phoneHeaderText}>
            Let’s get you signed up!
          </Text>

          <View style={appStyles.inputContainer}>
            <View style={appStyles.countryCodeContainer}>
              <Text style={appStyles.countryCodeText}>🇳🇬 +234</Text>
            </View>
            <TextInput
              style={appStyles.textInput}
              placeholder="Phone number"
              placeholderTextColor={ colors.placeHolderColor }
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="numeric"
            />
          </View>
          {errorMessage && (
            <View>
              <Text style={appStyles.errorMessage}>{errorMessage}</Text>
            </View>
          )}
          <Text style={appStyles.termsText}>
            By entering your number, you&apos;re agreeing to our{" "}
            <Text style={appStyles.linkText}>Terms & Conditions</Text> and{" "}
            <Text style={appStyles.linkText}>Privacy Policy</Text>
          </Text>
        </View>
        <TouchableOpacity
          style={appStyles.nextButtonContainer}
          onPress={() => {
            validatePhoneNumber(phoneNumber)
          }}
        >
          <LinearGradient
            colors={["#E2428F", "#BE66EB"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={appStyles.gradientBackground}
          >
            <Text style={appStyles.nextButtonText}>→</Text>
          </LinearGradient>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </BackButtonWrapper>
  );
}
