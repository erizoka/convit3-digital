import { button, gapY4, itemsCenter, mt3, py1, py4, roundedFull, selfCenter, textLg, textWhite } from "@/style";
import { Image, Pressable, Text, View } from "react-native";
import { useCameraPermissions } from 'expo-camera'
import { Link } from "expo-router";

export default function NovoEvento() {
    const [permissao, solicitarPermissao] = useCameraPermissions()

    if (!permissao || !permissao.granted) {
        return (
            <View style={py4}>
                <Text style={[textWhite, textLg]}>Permissão de câmera negada!</Text>
                <Pressable onPress={solicitarPermissao} style={button}>
                    <Text style={textWhite}>Solicitar Permissão</Text>
                </Pressable>
            </View>
        )
    }

    return (
        <View style={[itemsCenter, gapY4]}>
            <Link href="/qrcode" asChild>
                <Pressable style={itemsCenter}>
                    <Image
                        source={require("@/assets/images/qrcode.png")}
                        style={{ width: 80, height: 80 }}
                    />
                    <View style={[button, py1, roundedFull, mt3]}>
                        <Text style={textWhite}>Novo Evento</Text>
                    </View>
                </Pressable>
            </Link>
        </View>
    )
}