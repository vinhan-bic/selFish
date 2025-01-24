import {TouchableOpacity} from "react-native";
import {IconComponentType} from "@/src/components/atoms/Icon/IconComponent";
import {Icon} from "@/src/components";
import {useTheme} from "tamagui";

type TabBarButtonProps = {
    icon: IconComponentType;
    onPress: () => void;
    isFocused?: boolean;
}

export default function TabBarButton(
    {
        icon,
        isFocused,
        onPress
    }: TabBarButtonProps) {
    const theme = useTheme()
    return (
        <TouchableOpacity hitSlop={10} onPress={onPress}>
            <Icon size={20} color={isFocused ? theme.color.val : theme.accentColor.val} type={icon}/>
        </TouchableOpacity>
    )
}