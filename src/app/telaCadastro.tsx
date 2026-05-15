import { useState } from "react";
import { View, Text, Button } from "react-native";
import { Cat } from '@/components/Cat';

export default function telaCadastro() {

    const [isHungry, setIsHungry] = useState(true);

    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text style={{fontSize: 24,fontWeight: 600}}>Essa é a tela de cadastro!</Text>

            <Cat nome={'Frajola'} idade={3} cor={'preto e branco'}/>
                            <Button onPress={() => setIsHungry(false)} disabled={!isHungry} title={isHungry ? "Quero comer" : "Obregado"} />
        </View>
        
    )
}