import AuthScreenWrapper from "@/app/pages/auth/wrapper";
import { appStyles } from "@/styles/auth";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function OTP() {
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  return (
    <AuthScreenWrapper>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, justifyContent: "space-between" }}
      >
        <View style={[appStyles.container, appStyles.phonePage]}>
          <Text style={appStyles.otpHeaderText}>
            What&apos;s your age
          </Text>

          <View style={appStyles.inputContainer}>
            <TextInput
              style={appStyles.nameTextInput}
              placeholder="Age"
              placeholderTextColor="#999"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="number-pad"
              maxLength={6}
            />
          </View>

          <Text style={appStyles.termsText}>
            This is to personalize your experience and will not be visible on your profile.
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
    </AuthScreenWrapper>
  );
}