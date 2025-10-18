import { SplashScreen, Stack } from "expo-router";
import { useFonts } from 'expo-font'
import "./global.css"
import { useEffect } from "react";

export default function RootLayout() {

  const [fontsLoaded, errors] = useFonts({
    "Quicksand-Bold": require('@/assets/fonts/Quicksand-Bold.ttf'),
    "Quicksand-Medium": require('@/assets/fonts/Quicksand-Medium.ttf'),
    "Quicksand-Light": require('@/assets/fonts/Quicksand-Light.ttf'),
    "Quicksand-Regular": require('@/assets/fonts/Quicksand-Regular.ttf'),
    "Quicksand-Semibold": require('@/assets/fonts/Quicksand-SemiBold.ttf'),
  })


  useEffect(() => {
    if (errors)
      throw errors;
    if (fontsLoaded)
      SplashScreen.hideAsync();
  }, [fontsLoaded, errors])


  return <Stack screenOptions={{ headerShown: false }} />;
}
