import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";

export default function Head(props) {
    return (
        <SafeAreaView>
            <View>
                <Text style={style.head}>Encurtador de links</Text>
            </View>
        </SafeAreaView>



    )
}

const style = StyleSheet.create({
    head: {
        backgroundColor: '#3D5A73',
        color: '#F2F2F2',
        textAlign: 'center',
        fontSize: 30,
        paddingTop: 45,
        paddingBottom: 15,
        marginBottom: 20,
        borderRadius: 5,
        shadowColor: 'black',
        shadowOpacity: 2,
        shadowRadius: 150,
        elevation: 250,
    }
})

