import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import perfil from './assets/perfil.jpeg'
import Icon from 'react-native-vector-icons/Feather'

const App = () => {
  return (
    <>
      <View style={styles.page} >
        <View style={styles.containerperfil} >
          <Image source={perfil} style={styles.imageperfil} />
          <Text style={styles.name_style}>Victor Souza</Text>
          <Text style={styles.role}>Desenvolvedor Mobile</Text>
          <View style={styles.containericons}>
            <Icon style={styles.icons} name='github' size={24}/>
            <Icon style={styles.icons} name='twitter' size={24}/>
            <Icon style={styles.icons} name='linkedin' size={24}/>
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
  },
  containerperfil: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containericons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 0.5,
  },
  
  // Componentes
  icons: {
    paddingHorizontal: 10.75,
  },
  imageperfil: {
    width: 125,
    height: 125,
    borderRadius: 70,
  },
  name_style: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10
  },
  role: {
    color: '#939393',
    fontSize: 15,
    fontWeight: '300',
    marginBottom: 10,
  },
}); 

export default App;