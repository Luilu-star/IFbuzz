import { defaultConfig } from '@tamagui/config/v5';
import {StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import "../../global.css";
import { createTamagui, Button, TamaguiProvider, Input } from 'tamagui';

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

export default function App() {

    const router =  useRouter();

    function irTelaCadastro(){
        router.push('/telaCadastro')
    }

    return (
        <TamaguiProvider config={config} defaultTheme={'light'}>

            <View style={styles.container}>
            
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 50, alignSelf: 'center'}}> 
                    <Text style={{fontWeight: 700, fontSize: 45, color: '#2BB846'}}>LO</Text><Text style={{ fontWeight: 700, fontSize: 45, color: '#CC191E'}}>GIN</Text>
                </View>

                <View style={styles.separator} />

                <View style={{padding: 30}}>

                    <Text style={{marginTop: 60, marginBottom: 10, fontWeight: 'bold', fontSize: 20}}>Matricula</Text>
                    <Input border='none' bg={'#F5F5F5'} rounded={18} height={56} placeholder='Matricula'></Input>

                    <Text style={{marginTop: 45, marginBottom: 10, fontWeight: 'bold', fontSize: 20}}>Senha</Text>
                    <Input border='none' bg={'#F5F5F5'} rounded={18} height={56} placeholder='Senha'></Input>

                    <TouchableOpacity>
                        <Text style={{textDecorationLine: 'underline', marginTop: 10, marginBottom: 150, marginRight: 10, alignSelf: 'flex-end'}}>Esqueci minha senha</Text>
                    </TouchableOpacity>

                    <Button rounded={25} bg={'#B8E891'} style={{ color: '#FFFFFF' }}><Text className='text-[22px] font-bold'>Entrar</Text></Button>

                    <Text style={{fontSize: 16, marginTop: 40, marginBottom: 5, alignSelf: 'center', fontWeight: 500}}>Não tem uma conta?</Text>
                    <TouchableOpacity onPress={irTelaCadastro}>
                        <Text style={{fontSize: 20, color: '#007BFF', textDecorationLine: 'underline', marginBottom: 120, alignSelf: 'center', fontWeight: 500 }}>Cadastre-se</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </TamaguiProvider>
    );
};