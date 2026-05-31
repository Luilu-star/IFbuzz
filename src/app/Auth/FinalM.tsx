import { View, Text, Image } from "react-native";
import { defaultConfig } from "@tamagui/config/v5";
import { Button, createTamagui, TamaguiProvider } from "tamagui";
import { useRouter } from "expo-router";

const config = createTamagui(defaultConfig);

export default function FinalM() {

    const router = useRouter();

    function Voltar() {
        router.push({
            pathname: '/Auth/Login',
            params: {
                IsEstudante: '0'
            }
        })
    }
    
    return (
        <TamaguiProvider config={config} defaultTheme={'light'}>

            <View className="flex-1 p-10">
                <Image className="self-center mt-5" style={{ width: 345, height: 354}} source={require('@/assets/final_cadastroM.png')}></Image>

                <Text className="self-center mt-[100px]" style={{ fontFamily: 'Sora_700Bold', fontSize: 35, width: 300, textAlign: 'center' }}>
                    Cadastro feito com sucesso!
                </Text>

                <View className="self-center mt-[100px]">
                    <Button onPress={Voltar} rounded={10} width={220} height={50} bg={'#B8E891'} style={{ color: '#FFFFFF' }}><Text style={{fontSize: 22, fontFamily: 'Sora_600SemiBold'}}>Voltar</Text></Button>
                </View>

            </View>

        </TamaguiProvider>
    )
}