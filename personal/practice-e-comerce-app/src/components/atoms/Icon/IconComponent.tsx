import {AntDesign, Entypo, Feather, FontAwesome, Foundation, Ionicons} from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export type IconComponentType = 'search' |
    'notification' |
    'home' |
    'heart-outline' |
    'heart-fill' |
    'product' |
    'favorite' |
    'profile'
export type IconProps = {
    type: IconComponentType
    size?: number
    color?: string
}
export default function IconComponent({type, size = 20, color = 'black', ...rest}: IconProps) {


    switch (type) {
        case 'heart-outline':
            return <AntDesign name="hearto" size={size} color={color} {...rest} />
        case 'heart-fill':
            return <AntDesign name="heart" size={size} color={color} {...rest} />
        case 'search':
            return <Feather name="search" size={size} color={color} {...rest} />
        case 'notification':
            return <Ionicons name="notifications-outline" size={size} color={color} {...rest} />
        case 'home':
            return <Foundation
                name="home" size={size} color={color} {...rest} />
        case 'product':
            return <Entypo name="grid" size={size} color={color} {...rest} />
        case 'favorite':
            return <MaterialIcons name="favorite" size={size} color={color} {...rest} />
        case 'profile':
            return <FontAwesome name="user" size={size} color={color} {...rest} />
        default:
            return <AntDesign name="question" size={size} color={color} {...rest} />;
    }
}
