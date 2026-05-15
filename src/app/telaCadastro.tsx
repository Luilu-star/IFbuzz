import "../../global.css";
import { useState } from "react";
import { View, Text, Button } from "react-native";
import { Cat } from '@/components/Cat';
import { createTamagui, TamaguiProvider} from 'tamagui'
import { defaultConfig } from '@tamagui/config/v5'

const config = createTamagui(defaultConfig)


export default function telaCadastro() {

    const [isHungry, setIsHungry] = useState(true);

    return (
        <TamaguiProvider config={config} defaultTheme={'light'}>

            <View className="flex-1 justify-center items-center">
                <Text className="text-[24px] font-bold">Essa é a tela de cadastro!</Text>

                <Cat nome={'Frajola'} idade={3} cor={'preto e branco'}/>
                                <Button onPress={() => setIsHungry(false)} disabled={!isHungry} title={isHungry ? "Quero comer" : "Obregado"} />
            </View>

        </TamaguiProvider>
        
    )
}