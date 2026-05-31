import { Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold, useFonts } from '@expo-google-fonts/sora';
import { defaultConfig } from '@tamagui/config/v5';
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { Button, Circle, createTamagui, TamaguiProvider,} from 'tamagui';
import { useState } from 'react';
import "../../global.css";
import { useRouter } from 'expo-router';

const config = createTamagui(defaultConfig);
const styles = StyleSheet.create({
    card: {
        width: 140,
        height: 226,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#858585',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 8,
    },

    profileBubble: {
        width: 120,
        height: 120,
    },
})


export default function Teste() {

    const [IsPressedE, SetIsPressedE] = useState(false)
    const [IsPressedM, SetIsPressedM] = useState(false)

    const router = useRouter();

    function LoginE() {
        router.push({
            pathname: '/Auth/Login',
            params: {
                IsEstudante: '1'
            }
        })
        
    }

    function LoginM() {
        router.push({
            pathname: '/Auth/Login',
            params: {
                IsEstudante: '0'
            }
        })
    }

    let [fontsLoaded] = useFonts({ Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold });
    if (!fontsLoaded) return null;

    return (
        <TamaguiProvider config={config} defaultTheme={'light'}>

            <View className='flex-1 p-5'>

                <Image className='self-center mt-[70px]' source={require('@/assets/logo.png')}></Image>

                <View className='flex-row gap-8 justify-around mt-[100px] mb-10'>
                    
                    <Pressable onPress={() => {SetIsPressedE(true), SetIsPressedM(false)}}>
                        <View style={[styles.card, {borderColor: IsPressedE ? '#B8E891' : '#858585', borderWidth: IsPressedE ? 3 : 1, transform: [{scale: IsPressedE ? 1.1 : 1}], transitionDuration: '0.2s'}]}>
                            <View style={styles.profileBubble} className='self-center mt-[30px] border-2 border-[#858585] rounded-[100%] bg-white justify-center'>
                                <Image style={{width: 64, height: 95}} className='self-center' source={require('@/assets/estudante.png')}></Image>
                            </View>

                            <Text style={{fontFamily: 'Sora_600SemiBold'}} className=' self-center text-center mt-3 text-[18px] w-[100px]'>Sou Estudante</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={() => {SetIsPressedM(true), SetIsPressedE(false)}}>

                        <View style={[styles.card, {borderColor: IsPressedM ? '#B8E891' : '#858585', borderWidth: IsPressedM ? 3 : 1, transform: [{scale: IsPressedM ? 1.1 : 1}], transitionDuration: '0.2s'}]}>
                            
                            <View className='mt-[30px]'>
                                <Circle className='self-center justify-center'>
                                    <Image source={require("@/assets/icone_motorista.png")} style={{borderWidth: 2,borderColor: '#858585', borderRadius: 100, width: 120, height: 120 }} />
                                </Circle>
                            </View>

                            <Text style={{fontFamily: 'Sora_600SemiBold'}} className=' self-center text-center mt-3 text-[18px] w-[100px]'>Sou Motorista</Text>
                        </View>

                    </Pressable>

                     
                </View>

                <View className='self-center mt-[150px]'>
                    <Button onPress={IsPressedE ? LoginE : LoginM} disabled={!IsPressedE && !IsPressedM} disabledStyle={{bg: "#858585"}} rounded={25} bg={'#B8E891'} style={{ color: '#FFFFFF', width: 240, height: 50}}><Text style={{fontSize: 22, fontFamily: 'Sora_600SemiBold'}}>Continuar</Text></Button>
                </View>
                

            </View>

        </TamaguiProvider>
    )
}
