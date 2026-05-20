import { Text, TextInput, View } from "react-native"
import "../../global.css"

export default function SignInput (props : {label : string, placeholder : string, width?: number}) {

    return (
        <View>
            <Text style={{fontFamily: 'Sora_700Bold'}} className='font-bold text-[18px] mb-2'>{props.label}</Text>
            <TextInput style={{width: props.width}} placeholder={props.placeholder} className='bg-[#D9D9D943] border border-[#85858550] rounded-[18px] p-4 ml-[-5px]'></TextInput>
        </View>
    )
}