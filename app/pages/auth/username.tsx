import BackButtonWrapper from "@/app/pages/auth/generic/back_button_wrapper";
import { appStyles } from "@/styles/auth.style";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Username() {
  return (
    <BackButtonWrapper>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, justifyContent: "space-between" }}
      >
        <View style={[appStyles.container, appStyles.phonePage]}>
          <Text style={appStyles.phoneHeaderText}>Your username</Text>

          <Text style={appStyles.username}>@jonunflow</Text>

          <Text style={appStyles.changeUsername}>Change your username</Text>
        </View>
        <TouchableOpacity
          style={appStyles.nextButtonContainer}
          onPress={() => {
            router.push("/pages/auth/age");
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
