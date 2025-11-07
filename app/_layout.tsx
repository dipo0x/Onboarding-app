import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';
import { Stack } from "expo-router";
import React from "react";
import { useFonts } from 'expo-font';
import { Buffer } from 'buffer';

export default function RootLayout() {
  global.Buffer = Buffer;
  useFonts({
    'Manrope-Bold': require('./../assets/fonts/Manrope-Bold.ttf'),
    'Manrope-Regular': require('./../assets/fonts/Manrope-Regular.ttf'),
    'Manrope-SemiBold': require('./../assets/fonts/Manrope-SemiBold.ttf'),

   
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
