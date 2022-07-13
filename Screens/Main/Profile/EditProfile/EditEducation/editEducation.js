import React , {useContext, useState, useRef} from 'react';
import {
  SafeAreaView,
  Switch,
  Pressable,
  Animated,
  View
} from 'react-native';
import { User } from 'realm';


import { HEIGHT, WIDTH, PRIMARYCOLOR, DARKGREY} from '../../../../../sharedUtils'

import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont()


import { HeaderContainer, BackButtonContainer, NameContainer, Header, ResetButtonContainer,
    RowContainer, CategoryName, PhoneNumberContainer, HelpText } from './editEducationStyle';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
FontAwesome.loadFont()

export default function EditEducationScreen({navigation}){
    const [education, setEducation] = useState('')
    return(
        <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
          <HeaderContainer>
                <BackButtonContainer>
                    <Pressable style={{height:'50%', width:'50%', alignItems:'center'}} onPress={()=> navigation.goBack()}>
                        <Ionicons name='arrow-back-outline' size={25} style={{paddingHorizontal:WIDTH*0.02}}/>
                    </Pressable>
                </BackButtonContainer>
                <NameContainer>
                    <Header>Change Education</Header>
                </NameContainer>
                <ResetButtonContainer>
                    <Pressable style={{height:'50%', width:'50%', alignItems:'center'}} onPress={()=>navigation.navigate("OTPEdit")}>
                        <Ionicons name='checkmark-done' size={25} style={{paddingHorizontal:WIDTH*0.02}} color={PRIMARYCOLOR}/>
                    </Pressable>
                </ResetButtonContainer>
            </HeaderContainer>

            <View style={{width:WIDTH, height: HEIGHT*0.03}}/>

            <RowContainer>
                <CategoryName>Old Education</CategoryName>
                <PhoneNumberContainer editable={false} value="Harvard University" />
            </RowContainer>
            <RowContainer>
                <CategoryName>Latest Education</CategoryName>
                <PhoneNumberContainer onChangeText={(value)=> setEducation(value)}  value={education} />
            </RowContainer>
           
        </SafeAreaView>
    )
}