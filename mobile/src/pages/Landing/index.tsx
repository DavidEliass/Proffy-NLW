import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles'
import {  useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import LandingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'

function Landing() {
    const {navigate} = useNavigation();

    function handleNavigationToGiveClassesPage() {
        navigate('GiveClasses')
    }

    function handleNavigationToGiveTabs() {
        navigate('Tabs')
    }

    return (
        <View style={styles.container}>
            <Image source={LandingImg} style={styles.banner} />
        <View>
            
        </View>
            <Text style={styles.title}>
                Seja bem vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>
                <View style={styles.buttonContainer}>
                    <RectButton style={[styles.button, styles.buttonPrimary]} onPress={handleNavigationToGiveTabs}>
                        <Image source={studyIcon} />
                        <Text style={styles.buttonText}>Estudar</Text>
                    </RectButton>

                    <RectButton style={[styles.button, styles.buttonSecondary]} onPress={handleNavigationToGiveClassesPage}>
                        <Image source={giveClassesIcon} />
                        <Text style={styles.buttonText}>Dar Aula</Text>
                    </RectButton>
                </View>
                <Text style={styles.totalConnections}>
                    Total de 285 conexões já realizadas {' '}
                    <Image source={heartIcon} />
                </Text>
        </View>
    )
}

export default Landing