import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #221f1fff;
`;

export const Text = styled.Text`
  color: #ffffff;
  font-size: 18px;
`;
