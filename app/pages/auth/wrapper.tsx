import { appStyles } from "@/styles/auth";
import React from "react";
import { View, ViewProps, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";

interface AuthScreenWrapperProps extends ViewProps {
  children: React.ReactNode;
}

const AuthScreenWrapper: React.FC<AuthScreenWrapperProps> = ({
  children,
  ...props
}) => {
  return (
    <View style={appStyles.container} {...props}>
      <View
      style={{
        paddingTop: 80,
        marginLeft: 30
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
}

export default AuthScreenWrapper;