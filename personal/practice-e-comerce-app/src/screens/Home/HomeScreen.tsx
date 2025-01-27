import {View, Text, Theme} from '@tamagui/core'
import {ScrollView} from "react-native";

import HomeHeader from "@/src/screens/Home/components/HomeHeader";
import HomeCarousel from "@/src/screens/Home/components/HomeCarousel";
import HomeCategories from "@/src/screens/Home/components/HomeCategories";
import HomeRecommendation from "@/src/screens/Home/components/HomeRecommendation";

import {useHomeScreenController} from "@/src/hooks";
import {ScreenLayout} from "@/src/components";

export default function HomeScreen() {
    const {
        name,
        carousels,
        categories,
        recommendations,
        onPressSeeAllCategories,
        onPressProduct,
        onPressBanner,
        onPressAddFavorite
    } = useHomeScreenController();
    return (
        <Theme name={"light"}>
            <ScreenLayout isAdjustBottomTabHeight backgroundColor={"$background"}>
                <View padding={20}>
                    <HomeHeader name={name}/>
                    <View height={20}/>
                    <HomeCarousel isLoop={true} data={carousels} onPressBanner={onPressBanner}/>
                    <View height={20}/>
                    <HomeCategories data={categories} onSeeAllCategories={onPressSeeAllCategories}/>
                    <View height={20}/>
                    <HomeRecommendation
                        data={recommendations}
                        onPressProduct={onPressProduct}
                        onPressAddFavorite={onPressAddFavorite}
                    />
                </View>
            </ScreenLayout>
        </Theme>

    )
}
