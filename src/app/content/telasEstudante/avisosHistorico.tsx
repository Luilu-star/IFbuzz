import { Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold, useFonts } from '@expo-google-fonts/sora';
import { defaultConfig } from '@tamagui/config/v5';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TextInput, View, Text, KeyboardAvoidingView, ScrollView, Pressable } from "react-native";
import { Avatar, Button, createTamagui, TamaguiProvider, Image} from 'tamagui';
import "../../../../global.css";
import { faMagnifyingGlass, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import { router } from 'expo-router';


const config = createTamagui(defaultConfig)

export default function telaCadastro() {

    let [fontsLoaded] = useFonts({ Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold });
    if (!fontsLoaded) return null;

    return (
        <TamaguiProvider config={config} defaultTheme={'light'}>
            
        
            <KeyboardAvoidingView behavior={'padding'} className='flex-1 pt-10 bg-white'>

                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 12, marginTop: 4, gap:30}}>
                                      
                        <View style={{ flex:1, backgroundColor:'#D1EEB9', borderRadius: 100, height:45, marginLeft: 1, marginRight:2, marginTop: 8, paddingHorizontal: 15, flexDirection: 'row', alignItems: 'center'}}>          
                            <TextInput placeholder="Pesquise pela rota desejada..." style={{flex: 1,color: '#3A3A3A'}}/>
                            <FontAwesomeIcon icon={faMagnifyingGlass}size={15} color="#000"/>          
                        </View>
                        <View> 
                            <Avatar circular size="$3" style={{marginTop: 6, }}>
                                <Avatar.Image src='' />
                                <Avatar.Fallback background='#858585' />
                                <FontAwesomeIcon icon={faUser} size={20} color="#3A3A3A"/>
                            </Avatar>     
                        </View>
                                       
                    </View>

                    <View> 
                        <Pressable onPress={() => router.back()} style={{flexDirection: 'row',alignItems: 'center', marginTop: 30, marginLeft: 20, gap: 8,}}>
                            <FontAwesomeIcon icon={faArrowLeft} size={20} color="#000"/>
                            <Text style={{ fontFamily: 'Sora_700Bold' }}>
                                Tela Inicial
                            </Text>
                        </Pressable>

                    </View>
                    
            

                </ScrollView>
            
            </KeyboardAvoidingView>    

        </TamaguiProvider>
    )
}