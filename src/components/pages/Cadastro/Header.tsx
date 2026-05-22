import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useFonts, Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold } from '@expo-google-fonts/sora';
import { View, Image, StyleSheet,} from "react-native";
import { useRouter } from 'expo-router';
import { Button } from 'tamagui';
import "../../../../global.css";


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

export default function CadastroHeader() {

    let [fontsLoaded] = useFonts({ Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold });
    if (!fontsLoaded) return null;

    const router = useRouter();

    function Voltar(){
        router.push("/");
    }

    return (
        <>
            <View className='ml-8 mt-5'>
                <Button onPress={Voltar} unstyled={true}><FontAwesomeIcon size={30} icon={faArrowLeft} /></Button>
            </View>

            <View style={styles.profileBubble} className='self-center mt-[50px] border-2 rounded-[100%] bg-white justify-center'>
                <Image className='self-center' source={require('@/assets/estudante.png')}></Image>
            </View>
        </>
    )
}