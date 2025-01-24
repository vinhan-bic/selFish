import {TouchableOpacity, TouchableOpacityProps} from "react-native";
import IconComponent, {IconProps} from "@/src/components/atoms/Icon/IconComponent";
import {View} from '@tamagui/core'
import {useTheme} from "tamagui";

type Props = TouchableOpacityProps & {
    iconProps: IconProps
}
export default function IconButton(props: Props) {
    const {iconProps, ...rest} = props;
    const theme = useTheme();
    return <TouchableOpacity
        activeOpacity={0.6}
        {...rest}>
        <View
            width={50}
            height={50}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={50}
            backgroundColor={theme.accentBackground.val}>
            <IconComponent  {...iconProps}  />
        </View>
    </TouchableOpacity>;
}