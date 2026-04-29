import { StyleSheet, Text, TextInput, View, Image, Button, TouchableOpacity } from "react-native";

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
        fontSize: 24,
        fontWeight: "bold",
    },
    card: {
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
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    /*form: {
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        marginTop: 20,
        gap: 12,
    },*/
})


export default function App() {
    return (
        <>
        <View style={styles.container}>
            
                <View style={styles.card}>
                    <Image source={require('@/assets/logo.png')} style={{marginTop: 20, alignSelf: 'center'}} />
                    <Text style={[styles.Text, {marginTop: 50}]}>Login</Text>
                    <TextInput placeholder="Matricula" style={{marginTop: 40, padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5}} />
                    <TextInput placeholder="Senha" secureTextEntry={true} style={{marginTop: 20, padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5}} />
                    
                    <TouchableOpacity>
                        <Text style={{color: '#007BFF', marginTop: 10, marginBottom: 120, marginRight: 10, alignSelf: 'flex-end'}}>Esqueci minha senha</Text>
                    </TouchableOpacity>
        
                    <Button title="Entrar"  color={'#B8E891'} />
                    <View style={styles.separator} />

                </View>

        </View>
        </>
    );
};