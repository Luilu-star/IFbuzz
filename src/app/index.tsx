import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

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
                    <View style={{ flex: 1}}>
                    <Text style={{ fontSize: 40, textAlign: 'center', marginTop: 3, color: '#CC191E', fontWeight: 'bold' }}>
                        LOGIN
                    </Text>

                    <Text style={{
                        position: 'absolute',
                        top:0.5,
                        left: 6,
                        fontSize: 40,
                        fontWeight: 'bold'

                    }}>
                        ←
                    </Text>

                    </View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Matricula </Text>
                    <TextInput placeholder="Matricula" style={{marginTop:10, padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5}} />
                    <Text style={{ marginTop: 20, fontSize: 20, fontWeight: 'bold' }}> Senha </Text>
                    <TextInput placeholder="Senha" secureTextEntry={true} style={{marginTop: 10, padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5}} />
                    
                    <TouchableOpacity>
                        <Text style={{color: '#007BFF', marginTop: 3, marginBottom: 120, marginRight: 10, alignSelf: 'flex-end'}}>Esqueci minha senha</Text>
                    </TouchableOpacity>
        
                    <Button title="Entrar"  color={'#B8E891'} />
                    <View style={styles.separator} />

                    <Text style={{ fontSize: 15, textAlign: 'center', marginTop: 2 }}>
                        Não tem uma conta?
                    </Text>
                    <TouchableOpacity>
                        <Text style={{color: '#007BFF', marginTop: 3, marginRight: 10, textAlign: "center", fontSize: 25}}>Cadastre-se</Text>
                    </TouchableOpacity>



                </View>

        </View>
        </>
    );
};