import { presencas } from '@/components/modules/presencas';
import { Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold, useFonts } from '@expo-google-fonts/sora';
import { faArrowLeft, faMagnifyingGlass, faUser, faLocationDot, faCalendar, faClock} from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle, faUser as faUserRegular } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { defaultConfig } from '@tamagui/config/v5';
import { router } from 'expo-router';
import React from 'react';
import { KeyboardAvoidingView, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { Avatar, Circle, createTamagui, TamaguiProvider } from 'tamagui';
import "../../../../global.css";


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
                        {presencas.map((presenca) => (
                        
                        <View key={presenca.id}style={{ backgroundColor: '#FFFFFF', marginTop: 20, width: 340, marginLeft: 23, borderRadius: 10, padding: 15, elevation: 3, height: 190}}>
                            <View style={{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}}>
                                <View style={{gap: 10, marginTop: 10}}>
                                    <View style={{flexDirection: 'row', gap: 10}}>
                                        <FontAwesomeIcon icon={faLocationDot} size={20} color="#000"/>
                                        <Text style={{fontFamily: 'Sora_700Bold', fontSize: 14}}>
                                        {presenca.rota}
                                        </Text>
                                    </View>
                                    <View style={{flexDirection: 'row', gap: 10}}>
                                        <FontAwesomeIcon icon={faCalendar} size={20} color="#000"/>
                                        <Text style={{fontFamily: 'Sora_700Bold', fontSize: 13}}>
                                        {presenca.data}
                                        </Text>
                                    </View>
                                    <View style={{flexDirection: 'row', gap: 10}}>
                                        <FontAwesomeIcon icon={faClock} size={20} color="#000"/>
                                        <Text style={{fontFamily: 'Sora_700Bold', fontSize: 14}}>
                                        {presenca.turno}
                                        </Text>
                                    </View>

                                    <View style={{flexDirection: 'row', gap: 10, alignItems: 'center', justifyContent: 'center', marginTop: 28}}>
                                        <Text style={{fontFamily: 'Sora_700Bold', fontSize: 15}}>Situação:</Text>
                                        <View style={{flexDirection: 'row', gap: 5, alignItems: 'center',justifyContent: 'center'}}>
                                            <Text style={{fontFamily: 'Sora_700Bold', fontSize: 15, color: 'green'}}>
                                                {presenca.situacao}
                                            </Text>
                                            <FontAwesomeIcon icon={faCheckCircle} size={24} color="green"/>
                                        </View>
                                    </View>
                                </View>
                                <View style={{alignItems: 'center', justifyContent: 'center'}}>

                                    <View style={{backgroundColor: '#ccc', width: 80, height: 80, borderRadius: 100, alignItems: 'center', justifyContent: 'center'}}>
                                        <FontAwesomeIcon icon={faUserRegular} size={50} color="#000"/>
                                    </View>
                                    <Text style={{fontFamily: 'Sora_700Bold', fontSize: 14, marginTop: 10}}>
                                        {presenca.motorista}
                                    </Text>
                                </View>

                            </View>
                        </View>
                        ))}
                        
                      
                    </View>
   
                </ScrollView>
            
            </KeyboardAvoidingView>    

        </TamaguiProvider>
    )
}