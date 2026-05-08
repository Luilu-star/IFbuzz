import { StyleSheet, Text, TextInput, View, Image, Button, TouchableOpacity } from "react-native";

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

                <Text style={{marginTop: 70, marginBottom: 10, fontWeight: 'bold', fontSize: 20}}>Matricula</Text>
                <TextInput placeholder="Matricula" style={{padding: 13, borderRadius: 12, backgroundColor: '#D9D9D9'}} />

                <Text style={{marginTop: 35, marginBottom: 10, fontWeight: 'bold', fontSize: 20}}>Senha</Text>
                <TextInput placeholder="Senha" secureTextEntry={true} style={{padding: 13, borderRadius: 12, backgroundColor: '#D9D9D9'}} />
                
                <TouchableOpacity>
                    <Text style={{color: '#007BFF', marginTop: 10, marginBottom: 120, marginRight: 10, alignSelf: 'flex-end'}}>Esqueci minha senha</Text>
                </TouchableOpacity>

                <Button title="Entrar"  color={'#B8E891'} />

            </View>


        </View>
        </>
    );
};