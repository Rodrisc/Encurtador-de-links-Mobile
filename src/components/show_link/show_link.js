import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native"

export default function Show_url(props){
    return(
        <View style={style.view}>
            <Text style={style.text}>Seu link curto</Text>
            <TextInput
            style={style.input}
            value={props.value}
            placeholder='Seu link será exibido aqui'
            editable={false} 
            selectTextOnFocus={false}
            
            />
            <TouchableOpacity
            style={style.button}
            onPress={props.onClick}
            // onPress={ola}
            >
                <Text style={style.text2}>Copiar</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    view:{
        marginTop: 50,
        alignItems: 'center'
    },
    button:{
        backgroundColor: '#3D5A73',
        width: 250,
        height: 45,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 7

    },

    text:{
        fontSize: 25,
        color: 'white',
        
    },

    input:{
        backgroundColor: 'rgb(215,210,210)',
        padding: 10,
        width: 250,
        height: 45,
        color: 'black',
        margin: 15,
        borderRadius: 7
    },

    text2:{
        color: 'white',
        fontSize: 20
    }
})