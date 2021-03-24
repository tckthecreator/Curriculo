import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import perfil from './assets/perfil.jpeg'
import Icon from 'react-native-vector-icons/Feather'

const App = () => {
  return (
    <>
      <View style={styles.page} >
        <View style={styles.container_perfil} >
          <Image source={perfil} style={styles.imageperfil} />
          <Text style={styles.name_style}>Victor Souza</Text>
          <Text style={styles.role}>Desenvolvedor Mobile</Text>
          <View style={styles.container_icons}>
            <Icon style={styles.icons} name='github' size={24}/>
            <Icon style={styles.icons} name='twitter' size={24}/>
            <Icon style={styles.icons} name='linkedin' size={24}/>
          </View>
        </View>
        <View style={styles.container_container_cards}>
          <View style={styles.container_cards}>
            <View style={styles.header_card}>
              <Text style={styles.text_headercard}>Formação Acadêmica</Text>
            </View>

            <View style={styles.content_card}>
              <Text style={styles.text_contentcard}>Graduando em Ciência da Computação na Universidade Estácio de Sá</Text>
            </View>
          </View>
        </View>
        <View style={styles.container_container_cards}>
          <View style={styles.container_cards}>
            <View style={styles.header_card}>
              <Text style={styles.text_headercard2}>Habilidades</Text>
            </View>

            <View style={styles.content_card}>
              <Text style={styles.text_contentcard}>JavaScript</Text>
              <Text style={styles.text_contentcard}>React Native</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  
  // Containers
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
    alignItems: 'center',
  },
  container_perfil: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 45
  },
  container_icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  container_container_cards: {
    justifyContent: 'flex-start',
    alignItems: 'baseline',
  }, 
  container_cards: {
    marginTop: 20,
    width: 360,
    height: 125,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#939393',
  },
  header_card: {
    paddingTop: 10,
    justifyContent: 'center'
  },
  content_card: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  
  // Componentes
  icons: {
    paddingHorizontal: 16,
  },
  imageperfil: {
    width: 140,
    height: 140,
    borderRadius: 120,
  },
  name_style: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10
  },
  role: {
    color: '#686262',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 2,
  },
  text_headercard: {
    marginStart: 80,
    fontWeight: 'bold',
    fontSize: 20,
  },
  text_headercard2: {
    marginStart: 120,
    fontWeight: 'bold',
    fontSize: 20,
  },
  text_contentcard: {
    fontSize: 16.75,
    fontWeight: '500',
    color: '#686262',
  },
}); 

export default App;