import {Text, View} from "@tamagui/core";
import {TouchableOpacity} from "react-native";

type IntroductionBarProps = {
    title:string;
    pressText:string;
    onPress: () => void;
}

export default function IntroductionBarComponent({onPress,pressText,title}: IntroductionBarProps) {
    return (
        <View flexDirection="row" justifyContent="space-between" alignItems="center">
            <Text >{title}</Text>
            <TouchableOpacity onPress={onPress}>
                <Text>{pressText}</Text>
            </TouchableOpacity>
        </View>
    )
}