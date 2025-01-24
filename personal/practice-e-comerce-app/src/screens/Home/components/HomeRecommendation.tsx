import {Text, View} from "@tamagui/core";
import {Icon, IntroductionBar} from "@/src/components";
import {useCallback} from "react";
import {FlatList, Image, TouchableOpacity} from "react-native";
import {router} from "expo-router";

export type ProductProps = {
    id: number;
    image: string;
    price: string;
    name: string;
    isFavorite: boolean;
    rating: number;
}

type HomeRecommendationProps = {
    data: ProductProps[];
    onPressAddFavorite: (id: number) => void;
    onPressProduct: (id: number) => void;
}

const RECOMMENDATION_TEXT = "Recommendation";
const SEE_ALL_BUTTON_TEXT = "See All";
export default function HomeRecommendation({
                                               onPressProduct,
                                               onPressAddFavorite,
                                               data
                                           }: HomeRecommendationProps) {
    const onPressSeeAllRecommendations = () => {
        router.push('/products')
    }
    const renderItem = useCallback(({item}: { item: ProductProps }) => {
        return <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onPressProduct(item.id)}
            style={{flex: 1, borderWidth: 1, margin: 5}}
            key={item.id}
        >
            <Image
                src={item.image}
                style={{
                    width: '100%',
                    height: undefined,
                    aspectRatio: 1,
                    resizeMode: 'cover'
                }}
            />
            <View style={{
                position: "absolute",
                top: 10,
                right: 0,
                bottom: 0,
                left: 10,
            }}>
                <TouchableOpacity hitSlop={8} onPress={() => onPressAddFavorite(item.id)}>
                    <Icon type={item.isFavorite ? 'heart-fill' : 'heart-outline'} color={'white'} size={20}/>
                </TouchableOpacity>
            </View>
            <View flexDirection={'row'} alignItems="center" justifyContent={'space-between'}>
                <Text>{`$ ${item.price}`}</Text>
                <Text>{`$ ${item.price}`}</Text>
            </View>
            <Text>{item.name}</Text>
        </TouchableOpacity>

    }, [])

    return (
        <View>
            <IntroductionBar title={RECOMMENDATION_TEXT} pressText={SEE_ALL_BUTTON_TEXT} onPress={onPressSeeAllRecommendations}/>
            <View height={10}/>
            <FlatList
                scrollEnabled={false}
                data={data}
                renderItem={renderItem}
                numColumns={2}
            />
        </View>
    )
}