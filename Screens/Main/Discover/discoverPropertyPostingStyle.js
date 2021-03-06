import React, {useState, useEffect} from 'react';
import {Dimensions,} from 'react-native';

import styled from 'styled-components/native';

const PRIMARYCOLOR = '#4050B5'
const PRIMARYGREY = '#5e5d5d'

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

export const ModalView = styled.View`
    position: absolute;
    bottom:0;
    left:0;
    width: ${WIDTH}px;
    height: ${HEIGHT*0.9}px
    backgroundColor:black
    borderTopLeftRadius:20px
    borderTopRightRadius:20px;
    align-items: center;
`

export const Heading = styled.Text`
    font-size: ${HEIGHT*0.03}px;
    font-weight:700;
    text-align: left;
    width: ${WIDTH*0.8}px;
    color: white
`

export const ButtonContainer = styled.View`
    width: ${WIDTH*0.9}px;
    justify-content: flex-start;
    height: ${HEIGHT*0.1}px;
    justify-content: center
`

export const ImageContainer = styled.View`
    border-radius: 20px;
    background-color: transparent
    shadow-offset: 0 0
    shadow-color: white;
    shadow-radius: 20px;
    shadow-opacity: 0.5;
`

export const NextContainer = styled.View`
    position: absolute;
    bottom:0;
    width: ${WIDTH}px;
    padding-bottom: ${HEIGHT*0.075}px;
    align-items:center
`
export const InfoText = styled.Text`
    width: ${WIDTH*0.8}px;
    color: white;
    text-align: center
    font-size: ${HEIGHT*0.02}px;
    font-weight: 300;
    margin-top: ${HEIGHT*0.02}px;
    align-self: center
    
`

export const ContinueButton = styled.Pressable`
    width: ${WIDTH*0.8}px;
    height: ${HEIGHT*0.075}px;
    background-color: ${PRIMARYCOLOR};
    align-self:center;
    margin-top:${HEIGHT*0.03}px;
    border-radius: 20px;
    justify-content: center;
    align-items:center
`

export const ContinueText = styled.Text`
    font-size: ${HEIGHT*0.03}px;
    font-weight:700;
    align-self: center
    color: white
   
`

export const PostingSection = styled.View`
    width:${WIDTH}px; 
    height: ${HEIGHT*0.8}px;
    align-items: center;
   
`

export const InfoTextSection2 = styled.Text`
    width: ${WIDTH*0.8}px;
    color: white;
    text-align: left
    font-size: ${HEIGHT*0.02}px;
    font-weight: 300;
    margin-top: ${HEIGHT*0.01}px;
    
`

export const SearchInput = styled.TextInput`
  width: ${WIDTH*0.8}px;
  height: ${HEIGHT*0.06}px;
  border-radius: 15px;
  border-width: 1px;
  border-color: #A7A7A7
  padding-left: ${WIDTH*0.05}px;
  background-color: white

`

export const SearchContainer = styled.View`
  height: ${HEIGHT*0.06}px;
  width: ${WIDTH*0.9}px;
  justify-content: center;
  align-items: center
  flex-direction: row
  align-self: center
  margin-top: ${HEIGHT*0.03}px;

`
export const Subheading = styled.Text`
    font-size: ${HEIGHT*0.025}px;
    font-weight:700;
    text-align: left;
    width: ${WIDTH*0.8}px;
    color: white
`

export const InputContainer = styled.View`
    width: ${WIDTH}px;
    align-items: center;
    margin-top: ${HEIGHT*0.03}px;
`
export const DateSelectContainer = styled.View`
    width: ${WIDTH*0.8}px;
    flex-direction: row;
    justify-content: space-between;
`   
export const DateContainer = styled.View`
    width: ${WIDTH*0.4}px;
    height: ${HEIGHT*0.1}px;
    justify-content: space-around
    margin-top: ${HEIGHT*0.02}px;
    
`
export const DateSelectPressable = styled.Pressable`
    width: ${WIDTH*0.325}px;
    height: ${HEIGHT*0.05}px;
    background-color: white
    justify-content: center
    border-radius: 10px;
`

export const BedBathPressable = styled.Pressable`
    width: ${WIDTH*0.15}px;
    height: ${HEIGHT*0.05}px;
    background-color: white
    justify-content: center
    border-radius: 10px;
`
export const BedBathInput = styled.TextInput`
    width: ${WIDTH*0.15}px;
    height: ${HEIGHT*0.05}px;
    background-color: white
    border-radius: 10px;
    font-size: ${HEIGHT*0.025}px;
    font-weight: 400;
    text-align: center
    
`

export const AmenitiesContainer = styled.Text`
    width: ${WIDTH*0.8}px;
    height: ${HEIGHT*0.4}px;
    marginTop: ${HEIGHT*0.02}px;
    
`

export const AmenitiesItem = styled.View`
    height: ${HEIGHT*0.02}px;
    border-radius: 10px;
    border-color: white;
    border-width: 1px;
    margin-left: ${WIDTH*0.01}px;
`

export const PropertyPhotoContainer = styled.View`
    width: ${WIDTH}px;
    height: ${HEIGHT*0.15}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const PhotoContainer = styled.View`
    width: ${WIDTH*0.15}px;
    height: ${WIDTH*0.15}px
    border-radius:15px;
    background-color: white;
    justify-content:center
    align-items:center
`

export const PropertyDescriptionInput = styled.TextInput`
    width: ${WIDTH*0.8}px;
    height: ${HEIGHT*0.2}px;
    background-color: white;
    border-radius: 15;
    margin-top: ${HEIGHT*0.02}px;
    padding-left: ${HEIGHT*0.02}px;
    padding-top: ${HEIGHT*0.02}px;
`

export const Divider = styled.View`
    width: ${WIDTH*0.9}px;
    height: ${HEIGHT*0.0005}px;
    background-color: #E0E0E0

`

export const ReviewInfoText = styled.Text`
    width: ${WIDTH*0.9}px;
    font-size: ${HEIGHT*0.02}px;
    font-weight: 300;
    color: #E0E0E0
    margin-top: ${HEIGHT*0.01}px;
`
export const ReviewSectionContainer = styled.View`
    padding-top: ${HEIGHT*0.02}px;
    padding-bottom: ${HEIGHT*0.02}px;;
`

export const BedAndBathContainer = styled.View`
    margin-top: ${HEIGHT*0.02}px;
    height: ${HEIGHT*0.1}px;
    width: ${WIDTH*0.8}px;
    flex-direction: row
    align-items: center;
    justify-content: space-between;
`

export const BedBathLogo = styled.View`
    height: ${HEIGHT*0.1}px;
    width: ${WIDTH*0.375}px;
    border-width: 1px;
    border-color: ${PRIMARYGREY};
    border-radius: 20px;
    padding: ${WIDTH*0.02}px;
`
export const LocationText = styled.Text`
    font-size: ${HEIGHT*0.02}px;
    font-weight: 400;
    color: white
`

export const ReviewPropertyDescriptionInput = styled.TextInput`
    width: ${WIDTH*0.9}px;
    height: ${HEIGHT*0.2}px;
    background-color: ${PRIMARYGREY};
    border-radius: 15;
    margin-top: ${HEIGHT*0.02}px;
    padding-left: ${HEIGHT*0.02}px;
    padding-top: ${HEIGHT*0.02}px;
    color: white
`
export const Footer = styled.View`
    width: ${WIDTH}px;
    height: ${HEIGHT*0.125}px;
    justify-content: space-around;
    align-items: center
    flex-direction: row
    padding-bottom: ${HEIGHT*0.02}px;
    borderTopWidth: 1px;
    borderTopColor: #E0E0E0;

`
export const ContactTanentButton = styled.Pressable`
    width: ${WIDTH*0.4}px;
    height: ${HEIGHT*0.06}px;
    background-color: ${PRIMARYCOLOR};
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`

export const PricePerMonth = styled.Text`
    font-size: ${HEIGHT*0.025}px;
    font-weight: 700;
    color: white
`