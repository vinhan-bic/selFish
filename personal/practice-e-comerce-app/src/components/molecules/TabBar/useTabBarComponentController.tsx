import {useCallback, useEffect, useMemo, useState} from "react";
import {router, usePathname, useRouter} from "expo-router";
import {RouteType, TabBarComponentType} from "@/src/components/molecules/TabBar/TabBarComponent";
import {useSharedValue, withTiming} from "react-native-reanimated";


export const useTabBarComponentController = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const translateYValue = useSharedValue(0)

    const TAB_BAR_TABS: TabBarComponentType[] = useMemo(
        () => [
            {
                id: 0,
                icon: 'home',
                route: '/home',
                isFocus: currentIndex === 0
            },
            {
                id: 1,
                icon: 'product',
                route: '/products',
                isFocus: currentIndex === 1
            },
            {
                id: 2,
                icon: 'favorite',
                route: '/favorite',
                isFocus: currentIndex === 2
            },
            {
                id: 3,
                icon: 'profile',
                route: '/profile',
                isFocus: currentIndex === 3
            },
        ], [currentIndex]
    )

    const pathname = usePathname()

    const shouldShowTabBar = useMemo(
        () => {
            let result = 0;
            TAB_BAR_TABS.forEach(
                (tab) => {
                    if (pathname.includes(tab.route as string)) {
                        console.log(tab.route as string, pathname.includes(tab.route as string))
                        result = +1;
                    }
                    ;
                }
            )
            console.log(result)
            return result !== 0;
        }, [pathname]);

    useEffect(() => {
        if (!shouldShowTabBar) {
            translateYValue.value = withTiming(200)
        } else {
            translateYValue.value = withTiming(0)
        }

    }, [pathname, shouldShowTabBar]);

    useEffect(() => {
        setCurrentIndex(TAB_BAR_TABS.find((tab) =>
            pathname.includes(tab.route as string))?.id ?? currentIndex);

    }, [pathname])

    const onPress = (route: RouteType, id: number) => {
        if (pathname.includes(route as string)) {
            return
        }
        router.push(route);
    }


    return {
        tabs: TAB_BAR_TABS,
        translateYValue,
        onPress,
    }
}