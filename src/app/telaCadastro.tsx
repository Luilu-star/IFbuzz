import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { defaultConfig } from '@tamagui/config/v5';
import { Text, View, Image} from "react-native";
import { useRouter } from 'expo-router';
import { Button, createTamagui, TamaguiProvider } from 'tamagui';
import "../../global.css";


const config = createTamagui(defaultConfig)

export default function telaCadastro() {

    const router = useRouter();

    function Voltar(){
        router.push("/");
    }
    return (
        <TamaguiProvider config={config} defaultTheme={'light'}>

            <View className='flex-1 pt-10 bg-white'>

                <View className='ml-8 mt-5'>
                    <Button onPress={Voltar} unstyled={true}><FontAwesomeIcon size={30} icon={faArrowLeft} /></Button>
                </View>

                <View style={{
                    width: 150,
                    height: 150,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 6 },
                    shadowOpacity: 0.3,
                    shadowRadius: 10,
                    elevation: 8,
                }} className='self-center mt-[50px] border-2 rounded-[100%] bg-white justify-center'>
                    <Image className='self-center' source={require('@/assets/estudante.png')}></Image>
                </View>

                <View style={{width:'100%', height:'60%',
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: -2 },
                    shadowOpacity: 0.5,
                    shadowRadius: 5,
                    elevation: 1,}} className='bg-white mt-[75px] border shadow rounded-[40px]'>

                </View>

                
                
                
            </View>


        </TamaguiProvider>
        
    )
}