import { Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold, useFonts } from '@expo-google-fonts/sora';
import React, { useState, useEffect } from 'react';
import { defaultConfig } from '@tamagui/config/v5';
import { View, Text, ScrollView, TextInput, Pressable } from 'react-native';
import { Avatar, Button, createTamagui, TamaguiProvider} from 'tamagui';
import { Calendar, LocaleConfig  } from 'react-native-calendars';
import { eventos } from '@/components/modules/datas';
import { faMagnifyingGlass, faClock, faBell, faBus, faCheckCircle, faCalendar,faStar, faLocationDot, faUser, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { router } from 'expo-router';


const config = createTamagui(defaultConfig)

export default function TelaCalendario() {

  LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNamesShort: [
    'Jan.',
    'Fev.',
    'Mar.',
    'Abr.',
    'Mai.',
    'Jun.',
    'Jul.',
    'Ago.',
    'Set.',
    'Out.',
    'Nov.',
    'Dez.'
  ],
  dayNames: [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado'
  ],
  dayNamesShort: [
    'D',
    'S',
    'T',
    'Q',
    'Q',
    'S',
    'S'
  ],
  today: 'Hoje'
};

LocaleConfig.defaultLocale = 'pt-br';

  const [dataSelecionada, setDataSelecionada] =
    useState('');

  const eventoDoDia = eventos.filter(
    item => item.data === dataSelecionada
  );

  const datasMarcadas = eventos.reduce((acc, item) => {

    acc[item.data] = {
      marked: true,
      dotColor: '#FA7070'
    };

    return acc;

  }, {} as any);


  return (
    <TamaguiProvider config={config} defaultTheme={'light'}>

      <ScrollView style={{ flex: 1, backgroundColor: '#FFF' }}>
        <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 12, gap:30, marginTop:40}}>
                                              
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

        <View style={{margin: 20,backgroundColor: '#FFF', borderRadius: 10, elevation: 4,overflow: 'hidden', marginTop: 30}}>

            <View style={{backgroundColor: '#FEE5E5',padding: 15, height:50}}>
              <Text style={{fontFamily:'Sora_700Bold', fontSize: 16}}>
                Calendário
              </Text>
            </View>

            <Calendar markedDates={{...datasMarcadas,[dataSelecionada]: {
                  selected: true,
                  selectedColor: '#FA7070',
                  marked: true}}}
              onDayPress={(day) => {
                setDataSelecionada(day.dateString);}} />

        </View>

        {eventoDoDia.length > 0 && (

          <View style={{marginHorizontal: 20, backgroundColor: '#FFF', borderRadius: 10,elevation: 4,overflow: 'hidden', marginTop: 20}}>
              
              <View style={{backgroundColor: '#FEE5E5', padding: 12}}>
                  <Text style={{fontFamily: 'Sora_700Bold', fontSize: 18}} >
                      {eventoDoDia[0].titulo}
                  </Text>
              </View>

              <View style={{ padding: 15 }}>
                  {eventoDoDia.map((item, index) => (
                  <Text key={index} style={{fontSize: 16,marginBottom: 10, fontFamily:'Sora_500Medium' }}>
                      {item.evento}
                  </Text>
                  ))}
              </View>

          </View>

        )}

      </ScrollView>
    </TamaguiProvider>
  );
}