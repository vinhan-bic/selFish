import {Stack} from "expo-router";
import {SafeAreaView, useColorScheme} from "react-native";
import config from "@/tamagui.config";
import {TamaguiProvider} from "tamagui";

export default function RootLayout() {
    const theme = useColorScheme();
    return (
        <SafeAreaView style={{flex: 1}}>
            <TamaguiProvider defaultTheme={theme as "light"} config={config}>
            <Stack screenOptions={{
                headerShown: false,
            }}/>
            </TamaguiProvider>
        </SafeAreaView>
    );
}
