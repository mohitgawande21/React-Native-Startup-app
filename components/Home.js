import React from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View>
            <div>Home</div>
            <Button onPress={() => navigation.navigate('dashboard')} title="Go Dashboard"></Button>
        </View>

    )
}
