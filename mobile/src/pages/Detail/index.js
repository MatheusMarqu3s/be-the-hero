import React from 'react';
import {View,Image, TouchableOpacity,Text,Linking} from 'react-native';
import logoImg from '../../assets/logo.png';
import styles from './styles.js';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

export default function Detail(){

    const navigation = useNavigation(); 
    const message = 'Olá APAD, estou entrando em contato, pois gostaria de ajudar no caso "cachorro atropelado" com o valor de R$ 120,00'
    function navigateBack(){
        navigation.goBack('incidents');
    }

    function sendEmail(){
        MailComposer.composeAsync({
            subject: 'Herói do caso: Cachorro atropelado !',
            recipients: ['marques29matheus@gmail.com']
        });
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=+5585986073749&text=${message}`);
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28}color="#e02041"/>
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, {marginTop: 0 }]}>ONG:</Text>
                <Text style={styles.incidentValue}>APAD</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>R$ 120,00</Text>

            </View>
            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia !</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
                <Text style={styles.heroDescription}>Seja o herói desse caso.</Text>
                <Text style={styles.heroActions}>Seja o herói desse caso.</Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendEmail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}