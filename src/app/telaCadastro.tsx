
import { Etapa1, Etapa2, Etapa3, Etapa4 } from "../components/pages/Cadastro/EtapasEstudante";
import { Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold, useFonts } from '@expo-google-fonts/sora';
import { defaultConfig } from '@tamagui/config/v5';
import { KeyboardAvoidingView, ScrollView } from "react-native";
import { createTamagui, TamaguiProvider } from 'tamagui';
import CadastroHeader from '../components/pages/Cadastro/Header';
import { useState } from 'react';
import "../../global.css";


const config = createTamagui(defaultConfig)

export default function telaCadastro() {

    const [Etapa, SetEtapa] = useState(1)

    let [fontsLoaded] = useFonts({ Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold });
    if (!fontsLoaded) return null;

    return (
        <TamaguiProvider config={config} defaultTheme={'light'}>

            <KeyboardAvoidingView behavior={'padding'} className='flex-1 pt-10 bg-white'>

                <ScrollView showsVerticalScrollIndicator={false}>

                    <CadastroHeader />

                    {Etapa == 1 && (
                        <Etapa1 SetEtapa={SetEtapa} />
                    ) || Etapa == 2 && (
                        <Etapa2 SetEtapa={SetEtapa} />
                    ) || Etapa == 3 && (
                        <Etapa3 SetEtapa={SetEtapa} />
                    ) || Etapa == 4 && (
                        <Etapa4 SetEtapa={SetEtapa} />
                    )}
                
                </ScrollView>
            
            </KeyboardAvoidingView>    

        </TamaguiProvider>
    )
}