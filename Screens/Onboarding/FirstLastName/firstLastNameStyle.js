import { WIDTH, HEIGHT, PRIMARYCOLOR, TEXTINPUTBORDERCOLOR } from '../../../sharedUtils';
import styled from 'styled-components/native';

export const Header = styled.View`
  width: ${WIDTH*0.9}px
  height: ${HEIGHT*0.05}px
  justify-content: center;
  align-items: flex-start;
  align-self: center
 
`

export const ProgressBarContainer = styled(View).attrs`
    width: ${WIDTH}px;
    height: ${HEIGHT*0.05}px
`


export const TitleText = styled.Text`
    font-size: ${HEIGHT*0.045}px;
    font-weight: 500;
    width: ${WIDTH*0.7}px
    padding-left: ${WIDTH*0.1}px
`

export const TextInputContainer = styled.View`
    padding-top: ${HEIGHT*0.025}px
`

export const GeneralTextInput = styled.TextInput`
    width: ${WIDTH*0.8}px;
    height: ${HEIGHT*0.075}px
    border-bottom-width: 2px;
    padding-left: ${WIDTH*0.025}px
    border-color: ${TEXTINPUTBORDERCOLOR}
    align-self: center   
`

export const ContinueButton = styled.Pressable`
    width: ${WIDTH*0.7}px;
    height: ${ HEIGHT*0.07}px;
    background-color: ${PRIMARYCOLOR}
    align-self: center
    border-radius: 25px
    justify-content: center
    align-items: center
    margin-bottom: ${HEIGHT*0.025}px;
`
export const ContinueText = styled.Text`
    font-size: ${ HEIGHT*0.025}px;
    font-weight: 500
    color: white
`