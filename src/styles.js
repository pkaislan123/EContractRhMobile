import React from 'react';
import { StyleSheet } from 'react-native';
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputWrapper: {
        borderBottomWidth: 1,
        borderColor: '#fff'

    },
    backgroundImage: {
        resizeMode: 'cover',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    cardContent: {
        flexDirection: 'row',
        marginTop: 5,
        padding: 2,
        marginLeft: 200,
        borderColor: '#FFF',
        backgroundColor: 'rgba(0,0,0,0.0)', // 40% opaque
        color: 'white',
        fontSize: 16,
        borderRadius: 10
    },


    input: {
        marginTop: 10,
        padding: 10,
        width: 300,
        borderColor: '#FFF',
        backgroundColor: 'rgba(255,255,255,0.1)', // 40% opaque
        color: 'white',
        fontSize: 16,
        borderRadius: 10
    },
    texto: {
        marginTop: 2,
        padding: 2,
        width: 300,
        borderColor: '#FFF',
        backgroundColor: 'rgba(0,0,0,0.0)', // 40% opaque
        color: 'white',
        fontSize: 16,
        borderRadius: 10
    },
    texto2: {
        flexDirection: "row",
        margin: 5,
        padding: 5,
        width: 300,
        borderColor: '#FFF',
        backgroundColor: 'green',
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'

    },

    texto3: {
        flexDirection: "row",
        margin: 5,
        padding: 5,
        width: 150,
        borderColor: '#FFF',
        backgroundColor: 'rgba(0,0,0,0.0)', // 40% opaque
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'

    },
});


export { styles};