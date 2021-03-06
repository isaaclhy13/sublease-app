import React, {useState, useEffect, useRef, useCallback} from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Dimensions,
    Button,
    Keyboard,
    TextInput,
    Image,
    ActivityIndicator
  } from 'react-native';

import styled from 'styled-components/native';

import { SharedElement } from 'react-navigation-shared-element';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
FontAwesome.loadFont()
import Animated, {useAnimatedStyle, useSharedValue, withDecay, withSpring, withTiming, Easing, runOnJS, runOnUI,} from 'react-native-reanimated';
import { FlatList, Gesture, GestureDetector, TouchableOpacity,  } from 'react-native-gesture-handler';

const PRIMARYCOLOR = '#4050B5'
const PRIMARYGREY = '#5e5d5d'
const TEXTGREY = '#969696'


const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

const CardContainer = styled.Pressable`
    width: ${WIDTH*0.9}px;
    height: ${HEIGHT*0.375}px;
    align-self: center;
    border-radius: 15px;
    padding-top: ${HEIGHT*0.01}px;
    padding-bottom: ${HEIGHT*0.01}px;
`

const PropertyInfoContainer = styled.View`
  width: ${WIDTH*0.9}px;
  height:${WIDTH*0.2}px;
 
  padding-left: ${WIDTH*0.03}px;
  padding-right: ${WIDTH*0.03}px;
  flex-direction: row;
`

const LocationFont = styled.Text`
  font-size: 17px;
  font-weight: 400;
  height: ${HEIGHT*0.05}px;
  width: ${WIDTH*0.57}px;
  
`
const PropertyInfoContainerLeft = styled.View`
    padding-top: ${HEIGHT*0.02}px;
    width: ${WIDTH*0.6}px;

`

const PropertyInfoContainerRight = styled.View`
    width: ${WIDTH*0.3}px;
    justify-content: flex-end;
`
const DateFont = styled.Text`
    margin-top: ${HEIGHT*0.0025}px;
    font-size: 12px;
    font-weight: 400;
    color: #5e5d5d
`
const PriceFont = styled.Text`
  justify-content: center;
  font-size: ${HEIGHT*0.02}px;
  color: ${PRIMARYCOLOR}
  font-weight: 400;
`

const PropertyImageContainer = styled.View`
  position: relative;
`

const OpenMapIconContainer = styled.Pressable`
  height: ${HEIGHT*0.05}px;
  width: ${HEIGHT*0.05}px;
  border-radius: ${HEIGHT*0.025}px;
  background-color: rgba(0,0,0,0.8);
  bottom: ${HEIGHT*0.02}px;
  right: ${WIDTH*0.05}px;
  position: absolute;
  justify-content:center;
  align-items: center
`

const DragGreyLineContainer = styled.View`
  height: ${HEIGHT*0.05}px;
  width: ${WIDTH}px;
  align-items: center
  padding-top: ${HEIGHT*0.02}px;
`  
const DragGreyLine = styled.View`
  height: ${HEIGHT*0.005}px;
  width: ${WIDTH*0.3}px;
  border-radius: 15px;
  background-color: ${TEXTGREY}
`

export default function PropertyCard({navigation, setSelectedPin, loadMoreProperties,
    filteredPropertiesData, markerClickIndex, flatlistRefreshing, currentLocation,
    onMarkerClick
}){
    const flatlistRef = useRef(0);
    const [previewing, setPreviewing] = useState(false)
    // const [propertiesData, setPropertiesData] = useState([]);
    const [propertyPage, setPropertyPage] = useState(0);
    useEffect(()=>{
       console.log("UseEffect Refreshing...")
    //    loadProperty()
        // console.log(propertiesData)
        translateY.value = withSpring(HEIGHT/40, {stiffness: 50, mass: 0.3, damping:15})

    }, [currentLocation])

    // Swipable Bottom Sheet
    const translateY = useSharedValue(0)

    function enableFlatlistScroll(arg){
        setPreviewing(arg);
    }


    const context = useSharedValue({y:0})

    const gesture = Gesture.Pan().onStart(()=>{
    
    context.value = {y: translateY.value}
    }).onUpdate((event)=>{
    translateY.value = event.translationY + context.value.y
    
    translateY.value = Math.max(translateY.value, HEIGHT/40);
   
    }).onEnd(()=>{
        
    if(translateY.value  < HEIGHT/3.5 && translateY.value < HEIGHT/3){
        translateY.value = withSpring(HEIGHT/40, {stiffness: 50, mass: 0.3, damping:15})
        runOnJS(enableFlatlistScroll)(false)
    }

    else if (translateY.value  > HEIGHT/3.5 ){
        translateY.value = withSpring(HEIGHT/1.4, {stiffness: 50, mass: 0.3, damping:15})
        runOnJS(enableFlatlistScroll)(true)
    }
    })
    
    
    const bottomSheetStyle = useAnimatedStyle(()=>{
        return{
            transform:[{translateY: translateY.value}]
        }
    })

    function MoveMapToPin(data){
        onMarkerClick(data.item._id)
        translateY.value = withSpring(HEIGHT/1.4, {stiffness: 50, mass: 0.3, damping:15})
        
    }


    function renderCards(data, index){
   
        return(
            <CardContainer  onPress={()=> navigation.navigate('PropertyDetail', {data: data})} >
                {/* <SharedElement id="0"> */}
                    <PropertyImageContainer>
                        <Image style={{width:WIDTH*0.9, height:WIDTH*0.5, borderRadius:15,}} source={{uri:data.item.imgList[0]}}/>
                        <OpenMapIconContainer onPress={()=>MoveMapToPin(data)}>
                            <FontAwesome name='location-arrow' size={HEIGHT*0.02} color='white'/>
                        </OpenMapIconContainer>
                    </PropertyImageContainer>
                {/* </SharedElement> */}
                <PropertyInfoContainer>
                    <PropertyInfoContainerLeft>
                        <LocationFont>{data.item.location}</LocationFont>
                        <DateFont>10 May - 15 August</DateFont>
                        <DateFont>20 miles away from search</DateFont>
                    </PropertyInfoContainerLeft>
                    <PropertyInfoContainerRight>
                        <PriceFont><Text style={{fontWeight:'700'}}>${data.item.price}</Text>/month</PriceFont>
                    </PropertyInfoContainerRight> 
                </PropertyInfoContainer>   
                <SharedElement id="view">
                    <View style={{backgroundColor:'white'}}></View>
                </SharedElement>
               
            </CardContainer>
        )
    }

    
    return(
    <View  style={{flex:1}}>
        
    <GestureDetector  gesture={gesture}>
    
      <Animated.View style={[bottomSheetStyle,{width: WIDTH, height: HEIGHT*0.75, alignItems:'center', borderRadius: 25,backgroundColor: 'white',
        shadowColor: 'black', shadowRadius: 15,shadowOffset: {width: 0, height: 0},  shadowOpacity: 0.2, elevation: 5,
      }]}>
        <DragGreyLineContainer>
          <DragGreyLine></DragGreyLine>
        </DragGreyLineContainer>
        {flatlistRefreshing ?
        <ActivityIndicator size="large" color= {PRIMARYCOLOR} style={{marginTop: HEIGHT*0.1}} />
        :
        <FlatList
        onEndReachedThreshold = {0.5}
       
        onEndReached={()=>{
            loadMoreProperties()
        }
        }
        bounces = {true}
        style={{paddingBottom: HEIGHT*0.1}}
        scrollEnabled={!previewing}
        showsVerticalScrollIndicator={false}
        ref={flatlistRef}
        data = {filteredPropertiesData}
       
        // key={propertiesData}
        keyExtractor={(item, index) => String(index)}
        renderItem={(data, index)=>renderCards(data, index)}
        />
        }   
        </Animated.View>
    
   </GestureDetector>
   </View>
    )
}