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
import { avisos } from '@/components/modules/avisos';

const config = createTamagui(defaultConfig)

export default function telaAvisosHistorico() {

    let [fontsLoaded] = useFonts({ Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold });
    if (!fontsLoaded) return null;

    
    return (
        <TamaguiProvider config={config} defaultTheme={'light'}>
            
            <KeyboardAvoidingView behavior={'padding'} className='flex-1 pt-10 bg-white'>

                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 12, marginTop: 40, gap:30}}>
                                      
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

                    <View> 
                        {avisos.map((aviso) => (
                        
                        <View key={aviso.id}style={{ backgroundColor: '#FFFFFF', marginTop: 20, width: 340, marginLeft: 23, borderRadius: 10, padding: 15, elevation: 3, height: 190}}>
                            <View style={{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}}> 
                                <Text style={{fontFamily: 'Sora_700Bold', fontSize: 14, textDecorationLine: 'underline'}}>
                                  {aviso.titulo}
                                </Text>

                                <Text style={{ color: '#666', fontSize: 11}}>
                                  {aviso.data}
                                </Text>

                            </View>

                        <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'flex-start',}}> 

                            <Text style={{flex:1,  marginTop: 10 }}>
                                <Text style={{fontFamily: 'Sora_700Bold', fontSize: 15 }}>
                                  Conteúdo:
                            </Text>{' '}
                                {aviso.conteudo}
                            </Text>


                              <View style={{marginTop: 70,alignItems: 'center',}}>                       
                                <Avatar circular size="$5" >
                                    <Avatar.Image src="" />
                                    <Avatar.Fallback style={{backgroundColor:'#CFCFCF', justifyContent: 'center', alignItems: 'center'}}>
                                        <FontAwesomeIcon style={{}} icon={faUser} size={25} color="#333" />
                                    </Avatar.Fallback>
                                </Avatar>

                              </View>      
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', bottom:5   }}>
                          <Text style={{fontFamily: 'Sora_700Bold'}}> Rota:</Text> 
                          <Text style={{fontFamily: 'Sora_500Medium', fontSize: 12}}> Olho d'agua - Cedro </Text>
                        </View>
                      </View>
                           ))}
                      
                    </View>
   
                </ScrollView>
            
            </KeyboardAvoidingView>    

        </TamaguiProvider>
    )
}
