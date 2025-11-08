import BackButtonWrapper from "@/components/back_button";
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
import { OnboardingLabel } from "@/constant/auth.constant";

export default function OTP() {
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  return (
    <BackButtonWrapper>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, justifyContent: "space-between" }}
      >
        <View style={[appStyles.container, appStyles.phonePage]}>
          <Text style={appStyles.otpHeaderText}>What&apos;s your age</Text>

          <View style={appStyles.inputContainer}>
            <TextInput
              style={appStyles.nameTextInput}
              placeholder="Age"
              placeholderTextColor={colors.placeHolderColor}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="number-pad"
              maxLength={6}
            />
          </View>

          <Text style={appStyles.termsText}>
        {   OnboardingLabel.AGE_PERSONALIZATION}
          </Text>
        </View>

        <TouchableOpacity
          style={appStyles.nextButtonContainer}
          onPress={() => {
            router.push("/pages/auth/profile_picture");
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
