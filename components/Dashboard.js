import React from 'react'
import Header from './Header'
import List from './LIst'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

export default function Dashboard() {
    return (
        <View >
            <Header />
            <List />
        </View>
    )
}
