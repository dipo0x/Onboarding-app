import { Stack } from "expo-router";
import React from "react";
import { useFonts } from 'expo-font';

export default function RootLayout() {
  useFonts({
    'Manrope-Bold': require('./../assets/fonts/Manrope-Bold.ttf'),
    });

  return (
    <Stack screenOptions={
      {
         headerShown: false
      }
    }>
     
    </Stack>
  );
}
