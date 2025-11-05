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

export const HistoryView = styled.ScrollView.attrs(() => ({
  contentContainerStyle: { padding: 12, flexGrow: 1, justifyContent: 'flex-end' },
  keyboardShouldPersistTaps: 'handled',
  showsVerticalScrollIndicator: true,
  alwaysBounceVertical: true, // <-- permite "puxar"/rolar mesmo quando o conteúdo é menor
}))`
  flex: 1;
  width: 80%;
  border-radius: 16px;
  background-color: #474242ff;
`;

export const UserMessageBalloon = styled.View`
  background-color: #3b82f6ff;
  align-self: flex-end;
  margin: 8px;
  padding: 12px;
  border-radius: 16px;
  max-width: 80%;
  flex-shrink: 1;
`;

export const BotMessageBalloon = styled.View`
  background-color: #6b7280ff;
  align-self: flex-start;
  margin: 8px;
  padding: 12px;
  border-radius: 16px;
  max-width: 80%;
  flex-shrink: 1;
`;