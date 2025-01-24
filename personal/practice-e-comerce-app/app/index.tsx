import {getConfig, TamaguiProvider} from "tamagui";
import {Redirect} from "expo-router";
import config from "@/tamagui.config";
import {Theme} from "@tamagui/core";

// @ts-ignore
export default function Index() {


    return (
        <Redirect href='/(tabs)/home'/>
    );
}
