import {Stack} from "expo-router";
import {View} from "@tamagui/core";
import {TabBar} from "@/src/components";
import {useTabBarComponentController} from "@/src/hooks";

export default function TabNavigator() {
    const {tabs, onPress, translateYValue} = useTabBarComponentController();
    return (
        <View flex={1}>
            <Stack screenOptions={{headerShown: false, animation: 'fade_from_bottom'}}>
                <Stack.Screen name="home" options={{animation:'fade'}}/>
                <Stack.Screen name="products" options={{animation:'fade'}}/>
                <Stack.Screen name="favorite" options={{animation:'fade'}}/>
                <Stack.Screen name="profile" options={{animation:'fade'}}/>
            </Stack>
            <TabBar tabs={tabs} onPress={onPress} translateYValue={translateYValue}/>
        </View>
    )
}