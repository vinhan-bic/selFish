import {View} from '@tamagui/core';
import {Dimensions, FlatList, Image, TouchableOpacity} from "react-native";
import {useCallback, useEffect, useRef, useState} from "react";

export type CarouselProps = {
    id: number;
    name: string;
    image: string;
}
type Props = {
    isLoop: boolean;
    data: CarouselProps[]
    onPressBanner: (id: number) => void;
}

export default function HomeCarousel({isLoop, data, onPressBanner}: Props) {
    let index = 0
    const [displayList, setDisplayList] = useState(data)
    const [currentIndex, setCurrentIndex] = useState(0);
    const FlatlistRef = useRef<FlatList>(null);
    const maxWidth = Dimensions.get("window").width;
    const ITEM_HEIGHT = maxWidth;
    const CAROUSEL_DURATION = 1500
    // const carouselData = [...data, data[0]]
    const renderItem = useCallback(({item}: { item: CarouselProps }) => {
        return <TouchableOpacity
            key={item.id}
            onPress={() => onPressBanner(item.id)}
            style={{
                width: maxWidth,
                height: 120,
            }}>
            <View
                width={maxWidth}
                height={120}
            >
                <Image
                    source={item.image as any}
                    style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'stretch'
                    }}
                />
            </View>
        </TouchableOpacity>
    }, []);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         const nextIndex = index + 1;
    //         FlatlistRef?.current?.scrollToIndex({
    //             index: nextIndex,
    //         })
    //         setCurrentIndex(nextIndex)
    //         index = nextIndex;
    //     }, CAROUSEL_DURATION)
    //     return () => clearInterval(interval)
    // }, [])

    return (
        <View gap={10}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                ref={FlatlistRef}
                getItemLayout={(data, index) => {
                    return (
                        {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
                    )
                }}
                horizontal
                data={displayList}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                onEndReachedThreshold={0.5}
                onEndReached={() => setDisplayList([...displayList, ...data])}
                snapToAlignment={"start"}
                snapToInterval={maxWidth}
                decelerationRate="fast"
            />
            <View flexDirection="row" justifyContent="center" alignItems={'center'} gap={10}>
                {data.map((item, index) => {
                    if (index === currentIndex % data.length) {
                        return <View key={index} borderWidth={1} width={12} height={12} borderRadius={50}/>
                    }
                    return <View key={index} borderWidth={1} width={8} height={8} backgroundColor={'gray'}
                                 borderRadius={50}/>
                })}
            </View>
        </View>
    )
}