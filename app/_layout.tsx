import { Stack } from "expo-router";
import React from "react";
import { useFonts } from 'expo-font';

export default function RootLayout() {
  useFonts({
    'Manrope-Bold': require('./../assets/fonts/Manrope-Bold.ttf'),
    'Manrope-Regular': require('./../assets/fonts/Manrope-Regular.ttf'),
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
