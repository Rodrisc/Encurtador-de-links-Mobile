import { View, TextInput, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Form(props) {



    return (
        <View style={style.view}>
            <Text style={style.text}>Cole o link abaixo</Text>

            <TextInput
                style={style.input1}
                onChangeText={(e) => props.Input(e)}
                value={props.value}
                placeholder='Cole aqui'
                keyboardType="url"
                autoCapitalize="none"
            />

            <TouchableOpacity
                style={style.button}
                onPress={props.onClick}
            // onPress={ola}
            >
                <Text style={style.text2}>Encurtar</Text>
            </TouchableOpacity>

        </View>
    )

}

const style = StyleSheet.create({
    view: {
        alignItems: 'center'
    },

    text: {
        fontSize: 25,
        color: 'white',

    },

    input1: {
        backgroundColor: 'rgb(215,210,210)',
        padding: 10,
        width: 250,
        height: 45,
        color: 'black',
        margin: 15,
        borderRadius: 7
    },

    button: {
        backgroundColor: '#3D5A73',
        width: 250,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7

    },

    text2: {
        color: 'white',
        fontSize: 20
    }
})