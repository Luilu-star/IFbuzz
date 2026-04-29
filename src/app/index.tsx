import { View, Text,  StyleSheet, ImageBackground, TextInputComponent, TextInput } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    background: {
        flex: 1,
        padding: 40,
        resizeMode: "cover",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    Text : {
        marginTop: 200,
        fontSize: 24,
        fontWeight: "bold",
        color: '#FFFFFF'
    },
})


export default function App() {
    return (
        <ImageBackground source={require('@/assets/fundo.jpeg')} style={styles.background}>
            <Text style={styles.Text}>Você deve se matar agora</Text>
            <Text style={{fontSize: 18, color: '#FFFFFF', marginTop: 20, textAlign: 'center'}}>Eulalia, essa mensagem é pra você, viu</Text>
            <TextInput placeholder="Nome usuário" style={{width: 200, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, marginTop: 20, backgroundColor: '#FFFFFF'}}/>
        </ImageBackground>
    );
};