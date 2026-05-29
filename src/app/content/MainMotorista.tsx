
import { Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold, useFonts } from '@expo-google-fonts/sora';
import { defaultConfig } from '@tamagui/config/v5';
import { View, Text, KeyboardAvoidingView, ScrollView, TextInput } from "react-native";
import { createTamagui, TamaguiProvider } from 'tamagui';
import "../../../global.css";

const config = createTamagui(defaultConfig)

export default function telaCadastro() {

    let [fontsLoaded] = useFonts({ Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold });
    if (!fontsLoaded) return null;

    return (
        <TamaguiProvider config={config} defaultTheme={'light'}>

            <KeyboardAvoidingView behavior={'padding'} className='flex-1 bg-white'>

                <ScrollView showsVerticalScrollIndicator={false}>

                    <View>

                        <Text className='self-center'>NOssa senhora</Text>

                    </View>
                
                </ScrollView>
            
            </KeyboardAvoidingView>    

        </TamaguiProvider>
    )
}