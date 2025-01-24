import {Text, View} from "@tamagui/core";
import {useCallback, useState} from "react";
import {FlatList, Image, TouchableOpacity} from "react-native";
import {IntroductionBar} from "@/src/components";

export type CategoryProps = {
    id: number;
    name: string;
    image: string;
}
type HomeCategoriesProps = {
    data: CategoryProps[];
    onSeeAllCategories: () => void;
}

const CATEGORIES_TITLE = "Categories";
const SEE_ALL_BUTTON_TEXT = "See all";

export default function HomeCategories({data, onSeeAllCategories}: HomeCategoriesProps) {
    const [currentId, setCurrentId] = useState(0);

    const renderItem = useCallback(({item}: { item: CategoryProps }) => {
        const isSelected = currentId === item.id;
        return (
            <TouchableOpacity activeOpacity={1} onPress={() => setCurrentId(item.id)}>
                <View backgroundColor={isSelected ? 'purple' : 'grey'} key={item.id} flexDirection="row"
                      alignItems="center" gap={10} padding={10}>
                    {isSelected && (<View width={50}><Text color={'white'}>{item.name}</Text></View>)}
                    <Image width={50} height={50} source={{uri: item.image}}/>
                </View>
            </TouchableOpacity>
        )
    }, [currentId])

    return (
        <View>
            <IntroductionBar
                title={CATEGORIES_TITLE}
                pressText={SEE_ALL_BUTTON_TEXT}
                onPress={onSeeAllCategories}
            />
            <View height={10}/>
            <FlatList
                snapToAlignment={"start"}
                snapToInterval={70}
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                horizontal
                data={data}
                renderItem={renderItem}
            />
        </View>
    )
}