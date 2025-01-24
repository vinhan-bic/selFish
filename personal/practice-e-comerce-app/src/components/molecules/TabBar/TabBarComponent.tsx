import {View} from "tamagui";
import TabBarButton from "@/src/components/molecules/TabBar/components/TabBarButton";
import {IconComponentType} from "@/src/components/atoms/Icon/IconComponent";
import {ExpoRouter} from "expo-router/build/typed-routes/types";
import Animated, {interpolate, SharedValue, useAnimatedStyle} from "react-native-reanimated";

export type RouteType = ExpoRouter.__routes['href']
export type TabBarComponentType = {
    id: number,
    icon: IconComponentType,
    route: RouteType,
    isFocus: boolean
}
type TabBarComponentProps = {
    tabs: TabBarComponentType[];
    onPress: (route: RouteType, id: number) => void;
    translateYValue: SharedValue<number>;
}
export default function TabBarComponent({tabs, onPress, translateYValue}: TabBarComponentProps) {
    const containerAnimationStyles = useAnimatedStyle(() => {
        const scale = interpolate(translateYValue.value, [0, 200], [1, 0])
        return {
            transform: [
                {
                    translateY: translateYValue.value
                },
                {
                    scale,
                }
            ],
        }
    })
    return (
        <Animated.View style={containerAnimationStyles}>
            <View
                position={'absolute'}
                bottom={20}
                left={20}
                right={20}
                height={70}
                borderRadius={10}
                backgroundColor="$accentBackground"
                flexDirection={'row'}
                justifyContent={'space-around'}
                alignItems={'center'}
            >
                {tabs.map((tab) => {
                    return (
                        <TabBarButton
                            key={tab.id}
                            icon={tab.icon}
                            onPress={() => onPress(tab.route, tab.id)}
                            isFocused={tab.isFocus}
                        />
                    )
                })}
            </View>
        </Animated.View>
    )
}