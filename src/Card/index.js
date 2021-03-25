import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles'


const Cards = (props) => {
    return (
        <View style={styles.container_container_cards}>
          <View style={styles.container_cards}>
            <View style={styles.header_card}>
              <Text style={styles.text_headercard}>{props.title}</Text>
            </View>

            <View style={styles.content_card}>
              <Text style={styles.text_contentcard}>{props.content}</Text>
              <Text style={styles.text_contentcard}>{props.content2}</Text>
            </View>
          </View>
        </View>
    ); 
}

export default Cards;