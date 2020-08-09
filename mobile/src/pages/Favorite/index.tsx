import React from 'react'
import { View, ImageBackground, Text } from 'react-native';


import styles from './style'
import PageHeader from '../../components/PageHeader';

function Favorite() {


    return (
        <View style={styles.container}>
            <PageHeader title="Meus proffy disponíveis" />
        </View>
    )
}

export default Favorite;