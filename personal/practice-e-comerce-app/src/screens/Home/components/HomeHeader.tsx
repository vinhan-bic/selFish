import {View, Text, Theme} from '@tamagui/core'
import test from '@/src/tests'
import {IconButton} from "@/src/components";
import {useTheme} from "tamagui";
import {router} from "expo-router";

type Props = {
    name: string,
}

const WELCOME_BACK = 'Welcome back!'

export default function HomeHeader({name = test.longText}: Props) {
    const theme = useTheme()

    const onPressSearch = () => {
        router.push('/search')
    }

    const onPressNotification = () => {
        router.push('/notification')
    }

    return (
        <View flexDirection='row' alignItems={'center'} gap={10}>
            <View flex={1}>
                <Text color={"$color"} numberOfLines={1} fontWeight="300" fontSize={16}>{WELCOME_BACK}</Text>
                <Text color={"$color"} numberOfLines={1} fontWeight='bold' fontSize={16}>{name}</Text>
            </View>
            <View flexDirection="row" gap={10}>
                <IconButton
                    onPress={onPressSearch}
                    iconProps={{
                        type: 'search',
                        color: theme.color.val,
                    }}/>
                <IconButton
                    onPress={onPressNotification}
                    iconProps={{
                        type: 'notification',
                        color: theme.color.val,
                    }}/>
            </View>
        </View>
    )
}