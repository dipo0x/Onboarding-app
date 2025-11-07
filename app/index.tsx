import { appStyles } from "@/styles/auth.style";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Onboarding() {
  const router = useRouter();
  return (
    <View style={[appStyles.indexContent, appStyles.container]}>
      <View>
        <View style={appStyles.headerContainer}>
          <Text style={appStyles.headerText}>Welcome to the</Text>
          <Text style={appStyles.headerText}>community 👋</Text>
        </View>
        <View>
          <Image
            style={appStyles.imageContainer}
            source={require("@/assets/images/app/Image.png")}
          />
        </View>
      </View>
      <TouchableOpacity
        style={appStyles.signUpButton}
        onPress={() => {
          router.push("/pages/auth/profile_picture");
        }}
      >
        <View style={appStyles.buttonContainer}>
          <LinearGradient
            colors={["#E2428F", "#BE66EB"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={appStyles.gradientBackground}
          >
            <Text style={appStyles.signUpButtonText}>Sign up</Text>
          </LinearGradient>
        </View>
      </TouchableOpacity>

      <Text style={appStyles.loginButtonText}>Log in</Text>
    </View>
  );
}
