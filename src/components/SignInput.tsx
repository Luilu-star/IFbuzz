import { Text, TextInput, View } from "react-native"
import { useFonts, Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold } from '@expo-google-fonts/sora';
import "../../global.css"

export default function SignInput (props : {label : string, placeholder : string, width?: number}) {

    let [fontsLoaded] = useFonts({ Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold });
    if (!fontsLoaded) return null;

    return (
        <View>
            <Text style={{fontFamily: 'Sora_700Bold'}} className=' text-[16px] mb-2'>{props.label}</Text>
            <TextInput style={{width: props.width, fontFamily: 'Sora_500Medium'}} placeholder={props.placeholder} className='bg-[#D9D9D943] border border-[#85858550] rounded-[18px] p-4 ml-[-5px]'></TextInput>
        </View>
    )
}