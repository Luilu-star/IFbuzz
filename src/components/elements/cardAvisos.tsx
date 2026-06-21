import React from 'react';
import { View, Text, Pressable} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBus, faBusAlt, faBusinessTime, faBusSide, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { AvisoItem } from '../modules/card';

type Props = AvisoItem & {
  onPress?: () => void;
};

export default function AvisoCard({
  titulo,
  conteudo,
  data,
  onPress
}: Props) {
  return (
    <Pressable  onPress={onPress} style={{flexDirection: 'row', paddingHorizontal: 12, paddingVertical: 10, borderBottomWidth: 1,borderBottomColor: '#E5E5E5'}}>
        
        <View style={{ flex: 1, marginTop: 5 }}>
            <Text  style={{fontSize: 16,fontWeight: '700'}}>
                {titulo}
            </Text>

            <Text numberOfLines={2} style={{color: '#666', fontSize: 14,marginTop: 4,paddingRight: 45,}}>
                <Text style={{ fontWeight: '700' }}>
                    Conteúdo:
                </Text>{' '}
                    {conteudo.length > 50
                        ? conteudo.substring(0,50) + '...'
                        : conteudo}
            </Text>

            <Text style={{position: 'absolute',right: 2,bottom:-10, color: '#777', fontSize: 11}}>
                {data}
            </Text>
        </View>

    <View style={{ position: 'absolute', right: 12, top: 25}}>
        <FontAwesomeIcon icon={faCircleExclamation} size={30} color="#000"/>
    </View>

</Pressable>

  );}