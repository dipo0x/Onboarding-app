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

export default function Phone() {
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  return (
    <AuthScreenWrapper>
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
              placeholderTextColor="#999"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="numeric"
            />
          </View>

          <Text style={appStyles.termsText}>
            By entering your number, you&apos;re agreeing to our{" "}
            <Text style={appStyles.linkText}>Terms & Conditions</Text> and{" "}
            <Text style={appStyles.linkText}>Privacy Policy</Text>
          </Text>
        </View>
        <TouchableOpacity
          style={appStyles.nextButtonContainer}
          onPress={() => {
            router.push("/pages/auth/otp");
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