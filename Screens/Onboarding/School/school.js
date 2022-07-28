import React, {useState, useEffect} from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Dimensions,
    Pressable,
    Animated,
    KeyboardAvoidingView
} from 'react-native';

import uniList from '../../../universityList.json'

import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont()

  
import { HEIGHT, WIDTH , LIGHTGREY, DARKGREY} from '../../../sharedUtils';

import {Picker} from '@react-native-picker/picker';


import {Header, ProgressBarContainer, SubtitleText, TitleText, ContinueText, ContinueButton, FollowUpContainer, FollowUpText,
    GeneralTextInput, TextInputContainer} from './schoolStyle';

export default function SchoolScreen({navigation, route}){
    const [school, setSchool] = useState("")
    const [showPicker, setShowPicker] = useState('')

    function checkInput(){
        navigation.navigate("Occupation",
        {
            firstName: route.params.firstName, 
            lastName: route.params.lastName,
            age: route.params.age,
            gender: route.params.gender,
            profilePic: route.params.profilePic,
            school: school.trim(),
        })
    }

    return(
        <SafeAreaView style={{flex: 1, backgroundColor:'white', height:HEIGHT, width:WIDTH}} >
           
            <Header>
                <Pressable style={{height:'50%', width:'50%'}} onPress={()=> navigation.goBack() }>
                    {/* <FontAwesome name='arrow-left' size={25} /> */}
                    <Ionicons name='arrow-back-outline' size={25} />
                </Pressable>
            </Header>
                
            <ProgressBarContainer>

            </ProgressBarContainer>
           
            <ScrollView scrollEnabled={false}>
                <TitleText>School (Optional)</TitleText>
                <SubtitleText>Choose your latest education</SubtitleText>
                <TextInputContainer >
                    <GeneralTextInput  value={school} onChangeText={(value)=> setSchool(value)} placeholder="Ex: University of Wisconsin - Madison"  />
                </TextInputContainer>

                <FollowUpContainer>
                    <Pressable onPress={() => setShowPicker(!showPicker)}>
                        <Ionicons size={20} name={showPicker ? 'checkbox' : 'checkbox-outline'} color={DARKGREY} style={{ paddingVertical: HEIGHT * 0.01 }} />
                    </Pressable>
                    <FollowUpText>Show selection</FollowUpText>
                </FollowUpContainer>


                { showPicker ? 

                    <Picker
                    style={{flex:1}}
                    itemStyle={{fontSize: HEIGHT*0.0175}}
                    selectedValue={school}
                    onValueChange={(itemValue, itemIndex) =>
                        setSchool(itemValue)
                    }>
                        {uniList.map((item)=>(
                            <Picker.Item key={item.name} label={item.name} value={item.name} />
                        ))}
                    </Picker>
                :
                null
                }
            </ScrollView>
          

            <ContinueButton onPress={()=> checkInput()}>
                <ContinueText>Continue</ContinueText>
            </ContinueButton>
                        
        </SafeAreaView>
    )
}