import { Text, View, StyleSheet } from 'react-native';

export function Cat(propsCat : {nome : string; cor : string; idade : number}) {

    return (
        <View style={{padding: 20}}>
            <Text>
                Olá, sou {propsCat.nome}, tenho {propsCat.idade} anos e sou da cor {propsCat.cor}!
            </Text>
        </View>
    )
}