import { Keyboard, KeyboardAvoidingView, Platform, Text, TouchableWithoutFeedback } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import * as S from './chat.styles';

export default function Chat() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#474242ff" }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 65 : 0} // ajuste se houver header
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.Container>
          <S.HistoryView>
            <Text>Olá, mundo!</Text>
          </S.HistoryView>

          <S.InputContainer>
            <S.Input placeholder='Escreva aqui...' />
            <S.SendButtonTouchable onPress={() => {/* handle send */ }} accessibilityLabel="Enviar">
              <Icon name="send" size={25} color={'#fff'} />
            </S.SendButtonTouchable>
          </S.InputContainer>
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}