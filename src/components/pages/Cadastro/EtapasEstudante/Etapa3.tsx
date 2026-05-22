import SignInput from '@/components/elements/SignInput';
import { Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold, useFonts } from '@expo-google-fonts/sora';
import { Text, TouchableOpacity, View } from "react-native";
import { Separator } from 'tamagui';
import "../../../../../global.css";


export default function Etapa3(props : {SetEtapa: (placeholder : number) => void}) {

    let [fontsLoaded] = useFonts({ Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold });
    if (!fontsLoaded) return null;

    return (

        <View style={{width:'100%', minHeight:'60%'}}
            className='bg-white mt-[75px] border shadow rounded-[40px] pl-8 pr-8'>

            <Text style={{fontFamily: 'Sora_700Bold'}} className='self-center mt-5 text-[28px]'>Cadastre-se</Text>

            <View className='pt-6 mb-3 flex-row items-center justify-center'>

                <View style={{width: 55, height: 55}} className='border-[2.5px] rounded-[100%] justify-center bg-[#B8E89135]'>
                    <Text style={{fontFamily: 'Sora_700Bold'}} className='self-center text-[28px]'>1</Text>
                </View>

                <Separator borderWidth={1} borderColor={"#858585"}></Separator>

                <View style={{width: 55, height: 55}} className='border-[2.5px] rounded-[100%] justify-center bg-[#B8E891]'>
                    <Text style={{fontFamily: 'Sora_700Bold'}} className='self-center text-[28px]'>2</Text>
                </View>

                <Separator borderWidth={1} borderColor={"#858585"}></Separator>

                <View style={{width: 55, height: 55}} className='border-[2.5px] rounded-[100%] justify-center bg-[#B8E89135]'>
                    <Text style={{fontFamily: 'Sora_700Bold'}} className='self-center text-[28px]'>3</Text>
                </View>
            </View>

            <View className='flex-row justify-between mb-7'>
                <Text style={{fontFamily: 'Sora_600SemiBold'}} className='text-center w-[65px]'>Dados Pessoais</Text>
                <View className='items-center'><Text style={{fontFamily: 'Sora_500Medium'}} className='text-center w-[65px]'>Dados</Text><Text style={{fontFamily: 'Sora_500Medium'}} className='text-center'>Academicos</Text></View>
                
                <Text style={{fontFamily: 'Sora_500Medium'}} className='text-center w-[65px]'>Dados de Login</Text>
            </View>

            <View className='mb-5'>
                <SignInput label='Matricula' placeholder='Matricula'/>
            </View>

            <View className='flex-row gap-6 mb-6'>
                <SignInput label='Turno' placeholder='Turno' width={150}/>

                <SignInput label='Curso' placeholder='Curso' width={160}/>
            </View>
            
            <TouchableOpacity onPress={() => props.SetEtapa(4)}>
                <Text style={{fontFamily: 'Sora_700Bold'}} className='self-center text-[20px] underline'>Continuar</Text>
            </TouchableOpacity>

        </View>

    )
}