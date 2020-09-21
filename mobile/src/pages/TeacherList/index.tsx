import React, { useState } from 'react'
import { View, ImageBackground, Text, TextInput } from 'react-native';
import { Feather} from '@expo/vector-icons'

import styles from './styles'
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { ScrollView, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';

import AsyncStorage from '@react-native-community/async-storage'
import { useFocusEffect } from '@react-navigation/native';



function TeacherList() {
    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorite] = useState<number[]>([])
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if(response) {
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
                   return teacher.id 
                })

                setFavorite(favoritedTeachersIds)
            }
        })
    }

    useFocusEffect(
        React.useCallback(() => {
          loadFavorites();
        }, [])
      )

   

    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible);
    }

    async function handleFiltersSubmit() {
        loadFavorites();

        const response =  await api.get('classes', {
            params: {
              week_day,
              subject,
              time
            }
          })

          setIsFiltersVisible(false)
          setTeachers(response.data)
    }

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');


    return (
        <View style={styles.container}>
            <PageHeader title="Proffys Disponiveis" headerRight={(
                <BorderlessButton onPress={handleToggleFiltersVisible}>
                    <Feather name="filter" size={20} color="#FFF" />
                </BorderlessButton>
            )}>
                {isFiltersVisible && (<View style={styles.searchForm}>
                    <Text style={styles.label}>Matéria</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Qual a matéria?"
                        value={subject}
                        onChangeText={text => setSubject(text)}
                        placeholderTextColor='#c1bccc'
                    />

                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Dia da Semana</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Qual o dia?"
                                value={week_day}
                                onChangeText={text => setWeekDay(text)}
                                placeholderTextColor='#c1bccc'
                            />
                        </View>

                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Horário</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Qual o horário?"
                                value={time}
                                onChangeText={text => setTime(text)}
                                placeholderTextColor='#c1bccc'
                            />
                        </View>
                    </View>
                    <RectButton style={styles.submitButton} onPress={handleFiltersSubmit}> 
                        <Text style={styles.submitButtonText}>Filtrar</Text>
                    </RectButton>

                </View>)}
            </PageHeader>
            <ScrollView style={styles.teacherList} contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16,
            }}>
                {teachers.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited={favorites.includes(teacher.id)}
            />
          );
        })}
            </ScrollView>

        </View>
    )
}

export default TeacherList;