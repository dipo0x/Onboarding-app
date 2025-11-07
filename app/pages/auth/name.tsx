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

export default function Name() {
  const [firstname, setFirstName] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");

  return (
    <BackButtonWrapper>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, justifyContent: "space-between" }}
      >
        <View style={[appStyles.container, appStyles.phonePage]}>
          <Text style={appStyles.otpHeaderText}> What’s your name?</Text>
          <View style={appStyles.inputContainer}>
            <TextInput
              style={appStyles.nameTextInput}
              placeholder="First name"
              placeholderTextColor={ colors.placeHolderColor }
              value={firstname}
              onChangeText={setFirstName}
              keyboardType="default"
              maxLength={20}
            />
          </View>

          <View style={appStyles.inputContainer}>
            <TextInput
              style={appStyles.nameTextInput2}
              placeholder="Last name"
              placeholderTextColor={ colors.placeHolderColor }
              value={lastname}
              onChangeText={setLastName}
              keyboardType="default"
              maxLength={20}
            />
          </View>

          <Text style={appStyles.termsText}>
            People use real names on the app.
          </Text>
        </View>

        <TouchableOpacity
          style={appStyles.nextButtonContainer}
          onPress={() => {
            router.push("/pages/auth/username");
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
