import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    
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
        paddingTop: 20,
        paddingHorizontal: 20,
    },

    text_headercard: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    },
      text_contentcard: {
        fontSize: 16.75,
        fontWeight: '500',
        color: '#686262',
    },

});

export default styles;