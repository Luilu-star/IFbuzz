import React, { useState } from 'react'
import { View } from 'react-native'
import { Picker } from '@react-native-picker/picker'

export default function SelectTurno() {
  const [turno, setTurno] = useState('')

  return (
    <View
      style={{
        width: 120,
        height: 40, 
        borderColor: '#CCC',
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: '#DEF0DE',
      }}
    >
      <Picker
       mode="dropdown"
        selectedValue={turno}
        onValueChange={setTurno}
        style={{
          marginTop: -5,
          width: '100%',
          height: 50,
          color: '#000',
          fontWeight: 'bold'
        }}
        itemStyle={{
          height: 50
        }}
      >
        <Picker.Item label="Turno" value="" />
        <Picker.Item label="Dia todo" value="dia todo" />
        <Picker.Item label="Manhã" value="manha" />
        <Picker.Item label="Tarde" value="tarde" />
        <Picker.Item label="Noite" value="noite" />
      </Picker>
    </View>
  )
}