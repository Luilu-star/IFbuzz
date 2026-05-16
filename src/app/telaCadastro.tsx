import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { defaultConfig } from '@tamagui/config/v5';
import { Text, View } from "react-native";
import { Button, createTamagui, TamaguiProvider } from 'tamagui';
import "../../global.css";


const config = createTamagui(defaultConfig)

export default function telaCadastro() {

    return (
        <TamaguiProvider config={config} defaultTheme={'light'}>

            <View className='flex-1 p-5 bg-white'>
                <Button size={'$4'} width={60} background={'#FFFFFF'}><FontAwesomeIcon size={30} icon={faArrowLeft} /></Button>
                
            </View>


        </TamaguiProvider>
        
    )
}