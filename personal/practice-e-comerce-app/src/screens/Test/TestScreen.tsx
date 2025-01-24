import {Theme, View,Text} from "tamagui";

export default function TestScreen() {
    return (
        <Theme name="dark">
           <View backgroundColor="$background">
               <Text color="$color">Test</Text>
           </View>
        </Theme>
    )
}