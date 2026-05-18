import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { defaultConfig } from '@tamagui/config/v5';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, KeyboardAvoidingView} from "react-native";
import { useRouter } from 'expo-router';
import { Button, createTamagui, Separator, TamaguiProvider } from 'tamagui';
import "../../global.css";
import SignInput from '@/components/SignInput';


const config = createTamagui(defaultConfig)
const styles = StyleSheet.create({

    profileBubble: {
        width: 150,
        height: 150,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 8,
    },

})
export default function telaCadastro() {

    const router = useRouter();

    function Voltar(){
        router.push("/");
    }
    return (
        <TamaguiProvider config={config} defaultTheme={'light'}>

            <KeyboardAvoidingView behavior={'padding'} className='flex-1 pt-10 bg-white'>

                <ScrollView showsVerticalScrollIndicator={false}>

                    <View className='ml-8 mt-5'>
                        <Button onPress={Voltar} unstyled={true}><FontAwesomeIcon size={30} icon={faArrowLeft} /></Button>
                    </View>

                    <View style={styles.profileBubble} className='self-center mt-[50px] border-2 rounded-[100%] bg-white justify-center'>
                        <Image className='self-center' source={require('@/assets/estudante.png')}></Image>
                    </View>

                    <View style={{width:'100%', minHeight:'60%'}}
                        className='bg-white mt-[75px] border shadow rounded-[40px] pl-8 pr-8'>

                        <Text className='self-center font-bold mt-5 text-[28px]'>Cadastre-se</Text>

                        <View className='pt-6 mb-3 flex-row items-center justify-center'>

                            <View style={{width: 55, height: 55}} className='border-[2.5px] rounded-[100%] justify-center bg-[#B8E891]'>
                                <Text className='font-bold self-center text-[28px]'>1</Text>
                            </View>

                            <Separator borderWidth={1} borderColor={"#858585"}></Separator>

                            <View style={{width: 55, height: 55}} className='border-[2.5px] rounded-[100%] justify-center bg-[#B8E89135]'>
                                <Text className='font-bold self-center text-[28px]'>2</Text>
                            </View>

                            <Separator borderWidth={1} borderColor={"#858585"}></Separator>

                            <View style={{width: 55, height: 55}} className='border-[2.5px] rounded-[100%] justify-center bg-[#B8E89135]'>
                                <Text className='font-bold self-center text-[28px]'>3</Text>
                            </View>
                        </View>

                        <View className='flex-row justify-between mb-7'>
                            <Text className='text-center font-bold w-[65px]'>Dados Pessoais</Text>
                            <View className='items-center'><Text className='text-center w-[65px]'>Dados</Text><Text className='text-center'>Academicos</Text></View>
                            
                            <Text className='text-center w-[65px]'>Dados de Login</Text>
                        </View>

                        <View className='mb-5'>
                            <SignInput label='Nome Completo' placeholder='Nome'/>
                        </View>

                        <View className='flex-row gap-6 mb-6'>
                            <SignInput label='CPF' placeholder='CPF' width={150}/>

                            <SignInput label='Data de Nascimento' placeholder='DD/MM/AAAA'/>
                        </View>
                        
                        <TouchableOpacity onPress={Voltar}>
                            <Text className='self-center font-bold text-[24px] underline'>Continuar</Text>
                        </TouchableOpacity>

                    </View>

                
                </ScrollView>
            
            </KeyboardAvoidingView>    

        </TamaguiProvider>
    )
}