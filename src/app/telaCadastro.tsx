import { Etapa1, Etapa2, Etapa3, Etapa4 } from "../components/pages/Cadastro/EtapasEstudante";
import { Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold, useFonts } from '@expo-google-fonts/sora';
import { defaultConfig } from '@tamagui/config/v5';
import { Text, View, StyleSheet, Touchable, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';
import { Button, createTamagui, TamaguiProvider, Avatar, Circle, Separator } from 'tamagui';
import SignInput from '@/components/SignInput'
import "../../global.css";


const config = createTamagui(defaultConfig)

const style = StyleSheet.create({
    
    card: {
        width: '100%',
        height: '80%',
        padding: 20,
        elevation: 5,
        boxShadow: '1px 4px 8px rgba(0, 0, 0, 0.1)',
        justifyContent: 'flex-start',
        alignContent: 'center', 
    }
})

export default function telaCadastro() {

    const router = useRouter(); //Comando gerenciador de telas

    function Voltar() {
        router.back() //função mudar para a tela anterior
    }

    return (
        <TamaguiProvider config={config} defaultTheme={'light'}>

            <View className='flex-1 pt-8 mt-2 bg-white'>

                <View className='ml-5'>
                    <Button unstyled={true} onPress={Voltar}><FontAwesomeIcon size={35} icon={faArrowLeft} /></Button>     
                </View>
            
                <View className='self-center mt-[50px]'> 
                    <Avatar border='2px solid' circular size={150}> 
                    <Avatar.Image src={require('@/assets/icone_motorista.png')}></Avatar.Image>
                    <Avatar.Fallback bg={'$accent10'}></Avatar.Fallback>
                    </Avatar>
                </View>

                <View style={style.card} className='mt-[80px] border-2 rounded-[48px] bg-white'> 
                    <Text className='font-bold text-[24px] self-center'> Cadastre-se </Text>

                    <View className='flex-row items-center mt-7 pl-3 pr-3'>
                        <Circle bg={'#CAEEAD'} size={50} border='2'>
                            <Text className='font-bold text-[28px]'>1</Text>
                        </Circle>
                        <Separator borderWidth={1} borderColor={'#858585'}></Separator>
                        <Circle bg={'#CAEEAD'} size={50} border='2'>
                            <Text className='font-bold text-[28px]'>2</Text>
                        </Circle>
                        <Separator borderWidth={1} borderColor={'#858585'}></Separator>
                        <Circle bg={'#CAEEAD'} size={50} border='2'>
                            <Text className='font-bold text-[28px]'>3</Text>
                        </Circle>
                    </View>

                    <View className='flex-row justify-between p-1 mt-2'>
                        <Text className='font-bold text-[16px] w-[70px] text-center'> Dados pessoais</Text>
                        <Text className='font-bold text-[16px] text-center'> Endereço</Text>
                        <Text className='font-bold text-[16px] w-[70px] text-center'> Dados de login</Text>
                    </View>

                    <View className='mt-5'> 
                        <SignInput placeholder='Nome' label='Nome Completo' />
                    </View>

                    <View className='flex-row gap-7 mt-5'>
                        <SignInput placeholder='CPF' label='CPF' width={150} />
                        <SignInput placeholder='DD/MM/AAAA' label='Data de Nascimento' />
                    </View>

                    <TouchableOpacity onPress={Voltar} className='mt-5'>
                        <Text className='font-bold underline self-center text-[22px]'>Continuar</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </TamaguiProvider>
    )
}