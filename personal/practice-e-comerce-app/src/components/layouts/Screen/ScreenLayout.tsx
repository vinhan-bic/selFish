import {ReactNode, useMemo} from "react";
import {View} from "@tamagui/core";
import {Edges, SafeAreaView, useSafeAreaInsets} from "react-native-safe-area-context";
import constants from '@/src/constants'
import {ScrollView, StatusBar, useColorScheme} from "react-native";
import {ViewProps} from "tamagui";

type ScreenLayoutProps = ViewProps & {
    children: ReactNode;
    edges?: Edges;
    isAdjustBottomTabHeight?: boolean;
}

export default function ScreenLayout({children, isAdjustBottomTabHeight = false, edges, ...rest}: ScreenLayoutProps) {

    const adjustBottomTabHeight = isAdjustBottomTabHeight ? constants.BOTTOM_TAB_HEIGHT : 0
    const theme = useColorScheme();
    console.log(adjustBottomTabHeight)

    return (
        <View {...rest}>
            <SafeAreaView edges={edges}>
                <StatusBar translucent backgroundColor={'transparent'}
                           barStyle={theme === 'dark' ? "light-content" : 'dark-content'}/>
                <ScrollView>
                    {children}
                    <View height={adjustBottomTabHeight}/>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}
