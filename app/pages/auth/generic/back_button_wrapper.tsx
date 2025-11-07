import { appStyles } from "@/styles/auth.style";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { TouchableOpacity, View, ViewProps } from "react-native";

interface BackButtonWWrapperProps extends ViewProps {
  children: React.ReactNode;
}

const BackButtonWrapper: React.FC<BackButtonWWrapperProps> = ({
  children,
  ...props
}) => {
  return (
    <View style={appStyles.container} {...props}>
      <View
        style={{
          paddingTop: 80,
          marginLeft: 30,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
          style={{ paddingRight: 0 }}
        >
          <Ionicons name="arrow-back" size={24} color="#ffffffff" />
        </TouchableOpacity>
      </View>
      {children}
    </View>
  );
};

export default BackButtonWrapper;
