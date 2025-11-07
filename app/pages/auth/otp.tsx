import BackButtonWrapper from "@/app/pages/auth/generic/back_button_wrapper";
import { appStyles } from "@/styles/auth.style";
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

export default function OTP() {
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  return (
    <BackButtonWrapper>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, justifyContent: "space-between" }}
      >
        <View style={[appStyles.container, appStyles.phonePage]}>
          <Text style={appStyles.otpHeaderText}>
            Enter the code we just texted you
          </Text>

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
            Didn&apos;t get it?{" "}
            <Text style={appStyles.linkText}>Tap to resend.</Text>
          </Text>
        </View>

        <TouchableOpacity
          style={appStyles.nextButtonContainer}
          onPress={() => {
            router.push("/pages/auth/name");
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
