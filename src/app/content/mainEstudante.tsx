import { Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold, useFonts } from '@expo-google-fonts/sora';
import { defaultConfig } from '@tamagui/config/v5';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TextInput, View, Text, KeyboardAvoidingView, ScrollView} from "react-native";
import { Avatar, Button, createTamagui, TamaguiProvider} from 'tamagui';
import "../../../global.css";
import { faMagnifyingGlass, faClock, faBell, faBus, faCheckCircle, faCalendar,faStar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import SelectTurno from '@/components/elements/SelectTurno';
import AvisoCard from '@/components/elements/cardAvisos';
import { router } from 'expo-router';
import { avisos } from '@/components/modules/avisos';

const config = createTamagui(defaultConfig)

export default function telaMainEstudante() {

    let [fontsLoaded] = useFonts({ Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold });
    
    const [horaAtual, setHoraAtual] = useState('');
    

    useEffect(() => {
        const atualizarHora = () => {
            const agora = new Date();
            const horas = String(agora.getHours()).padStart(2, '0');
            const minutos = String(agora.getMinutes()).padStart(2, '0');

            setHoraAtual(`${horas}:${minutos}`);
        };

        atualizarHora();

        const intervalo = setInterval(atualizarHora, 1000);

        return () => clearInterval(intervalo);
    }, []);

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
            
                    <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center', marginHorizontal: 20, marginTop: 25 }}>
                        
                        <Text style={{fontSize:20,  fontWeight: 'bold', fontFamily: 'Sora_700Bold'}}> Bom dia, Safira! </Text> 
                        <View style={{flexDirection: 'row', alignItems: 'center',backgroundColor: '#D1EEB9',paddingHorizontal: 12, paddingVertical: 8, borderRadius: 10, gap: 6}}>
                            <FontAwesomeIcon icon={faClock} size={16} color="#000"/>
                            <Text style={{fontWeight: 'bold'}}>{horaAtual}</Text>
                        </View>

                    </View>

                <View style={{backgroundColor: '#FFFFFF', alignContent: 'center',marginTop: 28, width:340, marginLeft:23, borderRadius:10,  shadowColor: '#00000',shadowOffset: { width: 5, height:50  },shadowOpacity: 0.15, shadowRadius: 2, elevation: 3}}>
                     
                     <View style={{  backgroundColor: '#DEF0DE', borderTopLeftRadius:10, borderTopRightRadius:10, height:45, paddingHorizontal: 12, flexDirection:'row', justifyContent: 'space-between', alignItems:'center'}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', fontFamily: 'Sora_700Bold'}}> Avisos </Text>
                        <FontAwesomeIcon icon={faBell} size={20} color="#000"/>
                     </View>
                   
                    <View> {avisos.slice(0, 2).map((aviso) => 
                        (<AvisoCard key={aviso.id} id={aviso.id} titulo={aviso.titulo} conteudo={aviso.conteudo} data={aviso.data} onPress={() => {
                            router.push('/content/telasEstudante/avisosHistorico');  }} /> ))} 
                    </View>

                </View>

                <View style={{marginTop:30, alignItems:'center', flexDirection: 'row', justifyContent: 'center', gap: 35 }}> 
                    
                    <View style={{alignItems:'center', justifyContent:'space-between'}}> 
                        <Button style={{height:50, width:80, backgroundColor:'#FA7070' }} pressStyle={{ scale: 0.95,}}> 
                            <FontAwesomeIcon icon={faBus} size={30} color="#FFFFFF"/>
                        </Button>
                        <Text style={{fontSize: 13, fontFamily: 'Sora_600SemiBold'}}> Rotas</Text>
                    </View>

                    <View style={{alignItems:'center', justifyContent:'space-between'}}> 
                        <Button style={{height:50, width:80, backgroundColor:'#FA7070' }} pressStyle={{ scale: 0.95,}}> 
                            <FontAwesomeIcon icon={faCheckCircle} size={30} color="#FFFFFF"/>
                        </Button>
                        <Text style={{fontSize: 13, fontFamily: 'Sora_600SemiBold'}}> Presenças</Text>
                    </View>

                    <View style={{alignItems:'center', justifyContent:'space-between'}}> 
                        <Button style={{height:50, width:80, backgroundColor:'#FA7070' }} pressStyle={{scale: 0.95,}}> 
                            <FontAwesomeIcon icon={faCalendar} size={30} color="#FFFFFF"/>
                        </Button>
                        <Text style={{fontSize: 13, fontFamily: 'Sora_600SemiBold'}}> Calendário</Text>
                    </View>
    
                </View>

                <View style={{backgroundColor: '#fffafa', alignContent: 'center', height: 245,marginTop: 28, width:340, marginLeft:23, borderRadius:10,  shadowColor: '#00000',shadowOffset: { width: 5, height:50  },shadowOpacity: 0.15, shadowRadius: 2, elevation: 3}}>
                     
                    <View style={{  backgroundColor: '#FEE5E5', borderTopLeftRadius:10, borderTopRightRadius:10, height:45, paddingHorizontal: 12, flexDirection:'row', justifyContent: 'space-between', alignItems:'center'}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', fontFamily: 'Sora_700Bold'}}> Rota favorita </Text>
                        <FontAwesomeIcon icon={faStar} size={20} color="#000"/>
                    </View>
                   
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', gap: 30, }}> 
                       
                            <View style={{flex: 1, marginTop: 10, marginLeft:15 }}>
                                
                                <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}> 
                                    <FontAwesomeIcon icon={faLocationDot} size={18} color="#000"/>
                                    <Text style={{fontSize:13, fontFamily:'Sora_600SemiBold'}}> Lavras da mangabeira - Cedro </Text> 
                                </View>
                                
                                <View style={{flexDirection: 'row', alignItems: 'center', gap: 6, marginTop:6}}>
                                    <FontAwesomeIcon icon={faClock} size={18} color="#000"/>
                                    <Text style={{fontSize:13, fontFamily:'Sora_600SemiBold'}}> 06:10 - 07:00</Text>     
                                </View>

                        <View style={{backgroundColor: '#FFF', borderWidth: 1,borderColor: '#CCC',borderRadius: 10 , height:100, marginTop: 20, width: 240, justifyContent: 'space-between', flexDirection:'row'}}>
                                
                                <Text style={{fontFamily:'Sora_600SemiBold', marginTop:5, marginLeft: 10}}>Vou para passar:</Text>
                                
                                <View style={{flexDirection: 'row', marginTop: 7, marginRight:5}}>
                                    <FontAwesomeIcon icon={faCalendar} size={20} color="#000"/>
                                    <Text style={{fontSize:12, fontFamily:'Sora_600SemiBold'}}> 17/06</Text>     
                                </View>

                                <View style={{position: 'absolute', bottom: 10, left: 10, flexDirection: 'row', alignItems: 'center', gap: 10}}>
                                    <View style={{backgroundColor:'#DEF0DE'}}> 

                                        <SelectTurno></SelectTurno>
                                     </View>

                                    <Button rounded={360}  style={{backgroundColor: '#000',height: 30, width:95 , color:'#FFFFFF'}} pressStyle={{ scale: 0.95 }}> <Text style={{color: '#FFFF', fontSize:10, fontFamily: 'Sora_700Bold', textAlign:'center'}}> Confirmar </Text></Button>
                                </View>

                        </View>

                        <View style={{position: 'absolute', right: 15, top: 0, alignItems: 'center',}}>
                            
                            <Avatar circular size="$6">
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


