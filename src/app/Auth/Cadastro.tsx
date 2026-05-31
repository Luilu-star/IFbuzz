import { CadastroHeaderE, DPessoaisE, DPessoaisE2, DAcademicos, DLogin } from "@/components/pages/Cadastro/EtapasEstudante";
import { CadastroHeaderM, DPessoaisM, DEndereço, DLoginM, DLoginM2 } from "@/components/pages/Cadastro/EtapasMotorista";
import { Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold, useFonts } from '@expo-google-fonts/sora';
import { defaultConfig } from '@tamagui/config/v5';
import { KeyboardAvoidingView, ScrollView } from "react-native";
import { createTamagui, TamaguiProvider } from 'tamagui';
import { useState } from 'react';
import "../../../global.css";
import { useLocalSearchParams } from "expo-router";


const config = createTamagui(defaultConfig)

export default function telaCadastro() {

    const { IsEstudante } = useLocalSearchParams();
    const [Etapa, SetEtapa] = useState(1)

    let [fontsLoaded] = useFonts({ Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold });
    if (!fontsLoaded) return null;

    return (
        <TamaguiProvider config={config} defaultTheme={'light'}>

            <KeyboardAvoidingView behavior={'padding'} className='flex-1 pt-10 bg-white'>

                <ScrollView showsVerticalScrollIndicator={false}>

                    {IsEstudante === '1' ? <CadastroHeaderE /> : <CadastroHeaderM />}

                    {IsEstudante === '1' ? (
                        Etapa === 1 ? (
                            <DPessoaisE SetEtapa={SetEtapa} />
                        ) : Etapa === 2 ? (
                            <DPessoaisE2 SetEtapa={SetEtapa} />
                        ) : Etapa === 3 ? (
                            <DAcademicos SetEtapa={SetEtapa} />
                        ) : Etapa === 4 ? (
                            <DLogin SetEtapa={SetEtapa} />
                        ) : null
                    ) : (
                        Etapa === 1 ? (
                            <DPessoaisM SetEtapa={SetEtapa} />
                        ) : Etapa === 2 ? (
                            <DEndereço SetEtapa={SetEtapa} />
                        ) : Etapa === 3 ? (
                            <DLoginM SetEtapa={SetEtapa} />
                        ) : Etapa === 4 ? (
                            <DLoginM2 SetEtapa={SetEtapa} />
                        ) : null
                    )}

                    
                
                </ScrollView>
            
            </KeyboardAvoidingView>    

        </TamaguiProvider>
    )
}