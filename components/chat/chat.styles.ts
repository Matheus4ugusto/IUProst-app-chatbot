import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  gap: 16px;
  align-items: center;
  background-color: #221f1fff;
`;

export const Text = styled.Text`
  color: #ffffff;
  font-size: 18px;
`;

export const Input = styled.TextInput`
  width: 80%;
  background-color: #474242ff;
  padding: 12px 6px;
  outline: none;
  border: solid 0px;
  color: white;
`;

export const SendButtonTouchable = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #474242ff;
  padding: 8px;
  margin-right: 8px;
  border-radius: 8px;
`

export const InputContainer = styled.View`
  width: 80%;
  background-color: #474242ff;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  padding: 8px;
`

export const HistoryView = styled.View`
  flex: 1;
  width: 80%;
  border-radius: 16px;
  background-color: #474242ff;
`