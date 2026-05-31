import { defaultConfig } from '@tamagui/config/v5';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useFonts, Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold } from '@expo-google-fonts/sora';
import { createTamagui, Button, TamaguiProvider, Input } from 'tamagui';
import { LoginE, LoginM } from '@/components/pages/Login';
import { useLocalSearchParams } from 'expo-router';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    background: {
        flex: 1,
        padding: 40,
        resizeMode: "cover",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    Text : {
        fontSize: 24,
        fontWeight: "bold",
    },
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 15,
        borderBottomWidth: 3,
        borderBottomColor: '#ccc',
    },
    /*card: {
        width: '90%',
        height: '70%',
        backgroundColor: '#f7f7f7',
        borderRadius: 10,
        padding: 20,
        margin: 10,
        elevation: 5,
        boxShadow: '1px 4px 8px rgba(0, 0, 0, 0.1)',
        justifyContent: 'flex-start',
        alignContent: 'center',
        
    },
    
    form: {
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        marginTop: 20,
        gap: 12,
    },*/
})

const config = createTamagui(defaultConfig)

export default function Login() {

    const { IsEstudante } = useLocalSearchParams();


    let [fontsLoaded] = useFonts({ Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold });
    if (!fontsLoaded) return null;


    return (
        <TamaguiProvider config={config} defaultTheme={'light'}>

        {IsEstudante == '1' ? <LoginE></LoginE> : <LoginM></LoginM>}

        </TamaguiProvider>
    );
};