import { centerGrow, bgBlack, textWhite } from "@/style";
import { View, Text } from "react-native";

export default function EventoNaoEncontrado() {
    return (
        <View style={[centerGrow, bgBlack]}>
            <Text style={[textWhite]}>Evento não econtrado!</Text>
        </View>
    )
}