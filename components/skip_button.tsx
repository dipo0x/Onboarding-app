import { appStyles } from "@/styles/auth.style";
import { router } from "expo-router";
import React from "react";
import { TouchableOpacity, View, ViewProps, Text } from "react-native";

interface SkipButtonWWrapperProps extends ViewProps {
  children: React.ReactNode;
}

const SkipButtonWrapper: React.FC<SkipButtonWWrapperProps> = ({
  children,
  ...props
}) => {
  return (
    <View style={appStyles.container} {...props}>
      <TouchableOpacity
        onPress={() => {
          router.push("/(tabs)");
        }}
        style={appStyles.skipButton}
      >
        <Text style={appStyles.skipButtonText}>Skip</Text>
      </TouchableOpacity>
      {children}
    </View>
  );
};

export default SkipButtonWrapper;
