import {StyleSheet} from 'react-native';

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
  }); 

export default styles;