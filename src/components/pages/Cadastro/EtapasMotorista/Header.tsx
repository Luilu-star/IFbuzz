import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useFonts, Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold } from '@expo-google-fonts/sora';
import { View, Image, StyleSheet,} from "react-native";
import { useRouter } from 'expo-router';
import { Button, Circle } from 'tamagui';
import "../../../../../global.css";


export const styles = StyleSheet.create({

    profileBubble: {
        width: 150,
        height: 150,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
        borderRadius: 100,
    },

})

export default function CadastroHeader() {

    let [fontsLoaded] = useFonts({ Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold });
    if (!fontsLoaded) return null;

    const router = useRouter();

    function Voltar(){
        router.back();
    }

    return (
        <>
            <View className='ml-8 mt-5'>
                <Button onPress={Voltar} unstyled={true}><FontAwesomeIcon size={30} icon={faArrowLeft} /></Button>
            </View>
            
            <View className='self-center mt-[60px]'>
                <Circle style={styles.profileBubble}>
                    <Image source={require("@/assets/icone_motorista.png")} style={{borderWidth: 2, borderRadius: 100, width: 150, height: 150 }} />
                </Circle>
            </View>
        </>
    )
}