import { Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold, useFonts } from '@expo-google-fonts/sora';
import { defaultConfig } from '@tamagui/config/v5';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TextInput, View, Text, KeyboardAvoidingView, ScrollView, Pressable } from "react-native";
import { Avatar, Button, createTamagui, TamaguiProvider, Image} from 'tamagui';
import "../../../../global.css";
import { faMagnifyingGlass, faArrowLeft, faStar, faCalendar, faClock, faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import { router } from 'expo-router';

const config = createTamagui(defaultConfig)

export default function telaAvisosHistorico() {

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
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                        <View style={{flexDirection: 'row', alignItems:'center', marginTop: 25, gap:6, marginLeft: 10, marginRight: 10}}>

                            <Button rounded={3000} border={ '2px solid #ccc'} style={{ height:30, width: 78, backgroundColor: '#FF9292'}}> 
                                <Text style={{fontFamily:'Sora_700Bold', fontSize: 12, }}>
                                    Todas
                                </Text>
                            </Button>

                            <Button rounded={3000} style={{ height:30, width: 108, backgroundColor: '#FFD6D7'}}> 
                                <Text style={{fontFamily:'Sora_400Regular', fontSize: 12}}>
                                    Solicitadas
                                </Text>
                            </Button>

                            <Button rounded={3000} style={{ height:30, width: 110, backgroundColor: '#FFD6D7'}}> 
                                <Text style={{fontFamily:'Sora_400Regular', fontSize: 12}}>
                                    Minha rotas 
                                </Text>
                            </Button>

                            <Button rounded={3000} style={{ height:30, width:105, backgroundColor: '#FFD6D7'}}> 
                                <Text style={{fontFamily:'Sora_400Regular', fontSize: 12}}>
                                    Favoritas
                                </Text>
                                <FontAwesomeIcon icon={faStar} size={15} color="#000"/>
                            </Button>
                    
                        </View>
                    </ScrollView>

                    <View style={{backgroundColor: '#fff', alignContent: 'center', height: 185,marginTop: 28, width:340, marginLeft:23, borderRadius:10,  shadowColor: '#00000',shadowOffset: { width: 5, height:50  },shadowOpacity: 0.15, shadowRadius: 2, elevation: 3}}>

                                       
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', gap: 30, }}> 
                                           
                            <View style={{flex: 1, marginTop: 10, marginLeft:15 }}>
                                                    
                                <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}> 
                                    <FontAwesomeIcon icon={faLocationDot} size={18} color="#000"/>
                                    <Text style={{fontSize:15, fontFamily:'Sora_600SemiBold'}}> Lavras da mangabeira - Cedro </Text> 
                                </View>
                                                    
                                <View style={{flexDirection: 'row', alignItems: 'center', gap: 6, marginTop:6}}>
                                    <FontAwesomeIcon icon={faClock} size={18} color="#000"/>
                                    <Text style={{fontSize:15, fontFamily:'Sora_600SemiBold'}}> 06:10 - 07:00</Text>     
                               </View>
                    
                                <Button rounded={10} style={{marginTop: 40, width:190, height:55, backgroundColor:'#D4FFB3', shadowColor: '#000', shadowOffset: {width: 0, height:4,},shadowOpacity: 0, shadowRadius: 5, elevation: 5 }}>
                                    <Text style={{fontSize: 16, fontFamily:'Sora_600SemiBold' }}>Solicitar cadastro </Text>
                                </Button>
                    
                                <View style={{position: 'absolute', right: 18, top: 45, alignItems: 'center',}}>
                                            
                                    <Avatar circular size="$7">
                                        <Avatar.Image src="" />                                               
                                        <Avatar.Fallback style={{backgroundColor:'#CFCFCF', justifyContent: 'center', alignItems: 'center', flex: 1}}>
                                            <FontAwesomeIcon style={{}} icon={faUser} size={35} color="#333" />
                                        </Avatar.Fallback>
                                    </Avatar>
                                    <Text style={{marginTop: 8, fontSize: 14,fontFamily: 'Sora_600SemiBold',}}> Josino</Text>
                                            
                                </View>
                    
                            </View> 
                    
                        </View>

                    </View>

                    

   
                </ScrollView>
            
            </KeyboardAvoidingView>    

        </TamaguiProvider>
    )
}
