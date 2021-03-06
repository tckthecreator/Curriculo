import React from 'react';
import {StyleSheet, View, Text, Image, Alert} from 'react-native';
import perfil from '../assets/perfil.jpeg';
import Icon from 'react-native-vector-icons/Feather';
import Cards from './Card';
import styles from './styles'
import handleicon from './Linking'

const App = () => {
  return (
    <>
      <View style={styles.page} >
        <View style={styles.container_perfil} >
          <Image source={perfil} style={styles.imageperfil} />
          <Text style={styles.name_style}>Victor Souza</Text>
          <Text style={styles.role}>Desenvolvedor Mobile</Text>
          <View style={styles.container_icons}>
            <Icon style={styles.icons} name='github' size={24} onPress={() => handleicon('github')}/>
            <Icon style={styles.icons} name='twitter' size={24} onPress={() => handleicon('twitter')}/>
            <Icon style={styles.icons} name='linkedin' size={24} onPress={() => handleicon('linkedin')}/>
          </View>
        </View>
        <Cards title='Formação Acadêmica' content='Graduando em Ciência da computação na universidade Estácio de Sá' />
        <Cards title='Habilidades' content='JavaScript' content2='React Native' />
      </View>
    </>
  );
}

export default App;