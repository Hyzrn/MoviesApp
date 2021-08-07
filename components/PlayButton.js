import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class PlayButton extends React.PureComponent { 
    render() {
        return (
            <Pressable style={styles.button}>
                <Icon name={'caret-forward-outline'} size={20} color='white'></Icon>
            </Pressable>
        );
    }
}

const styles = StyleSheet.create({
    button: {
      borderRadius: 50,
      alignContent: 'center',
      width: 60,
      padding:20,
      backgroundColor:'#4481FC'
    }
  });

export default PlayButton;