import { colors } from "@/styles/auth.style";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: colors.white },
        headerShadowVisible: false,
      }}
    ></Tabs>
  );
}
