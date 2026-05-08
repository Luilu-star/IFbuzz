import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
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


export default function App() {
    return (
        <>
        <View style={styles.container}>

            <View></View>
        
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 50, alignSelf: 'center'}}> 
                <Text style={{fontWeight: 700, fontSize: 45, color: '#2BB846'}}>LO</Text><Text style={{ fontWeight: 700, fontSize: 45, color: '#CC191E'}}>GIN</Text>
            </View>

            <View style={styles.separator} />

            <View style={{padding: 30,}}>

                <Text style={{marginTop: 60, marginBottom: 10, fontWeight: 'bold', fontSize: 20}}>Matricula</Text>
                <TextInput placeholder="Matricula" style={{padding: 13, borderRadius: 12, backgroundColor: '#F5F5F5'}} />

                <Text style={{marginTop: 45, marginBottom: 10, fontWeight: 'bold', fontSize: 20}}>Senha</Text>
                <TextInput placeholder="Senha" secureTextEntry={true} style={{padding: 13, borderRadius: 12, backgroundColor: '#F5F5F5'}} />
                
                <TouchableOpacity>
                    <Text style={{textDecorationLine: 'underline', marginTop: 10, marginBottom: 150, marginRight: 10, alignSelf: 'flex-end'}}>Esqueci minha senha</Text>
                </TouchableOpacity>

                <Button title="Entrar"  color={'#B8E891'} />

                <Text style={{fontSize: 16, marginTop: 40, marginBottom: 5, alignSelf: 'center', fontWeight: 500}}>Não tem uma conta?</Text>
                <TouchableOpacity>
                    <Text style={{fontSize: 20, color: '#007BFF', textDecorationLine: 'underline', marginBottom: 120, alignSelf: 'center', fontWeight: 500 }}>Cadastre-se</Text>
                </TouchableOpacity>

            </View>


        </View>
        </>
    );
};