import { GoogleGenAI } from "@google/genai";
import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import Markdown from 'react-native-markdown-display';
import Icon from 'react-native-vector-icons/AntDesign';
import * as S from './chat.styles';

export default function Chat() {
  const [prompt, setPrompt] = React.useState("");
  const [messages, setMessages] = React.useState<Array<{ role: 'user' | 'model'; content: string; number: number }>>([]);

  const apiKey = process.env.EXPO_PUBLIC_GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('Missing EXPO_PUBLIC_GEMINI_API_KEY');
  }
  const ai = new GoogleGenAI({ apiKey });

  async function handleSend() {
    const trimmed = prompt.trim();
    if (trimmed === "") return;

    setPrompt("");
    setMessages(prev => [...prev, { role: 'user', content: trimmed, number: prev.length + 1 }]);

    const historyContents = [...messages].map(m => ({
      type: "text",
      text: m.content
    }));

    const contents = [
      ...historyContents, { type: "text", text: trimmed }
    ];
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash-lite",
        contents: [...contents],
        config: {
          responseMimeType: "text/plain",
          systemInstruction: "Responda somente perguntas relacionadas ao tema: 'tratamento de incontinência urinária pós prostatectomia radical com terapia comportamental' Você é um assistente que auxiliará pacientes que estão em tratamento de incontinência urinária pós prostatectomia radical por meio de terapia comportamental. Forneça respostas claras, empáticas e baseadas em evidências para ajudar os pacientes a gerenciar seus sintomas e melhorar sua qualidade de vida.",
        }
      });

      const botText = response.text;
      if (typeof botText === "string" && botText.length > 0) {
        setMessages(prev => [...prev, { role: 'model', content: botText, number: prev.length + 1 }]);
      }

    } catch (error) {
      console.error("Error generating content:", error);
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#474242ff" }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 65 : 0} // ajuste se houver header
    >
      <S.Container>
        <S.HistoryView>
          {messages.map((msg, index) => (
            msg.role === 'user' ? (
              <S.UserMessageBalloon key={index}>
                <Markdown>
                  {msg.content}
                </Markdown>
              </S.UserMessageBalloon>
            ) : (
              <S.BotMessageBalloon key={index}>
                <Markdown>
                  {msg.content}
                </Markdown>
              </S.BotMessageBalloon>
            )
          ))}
        </S.HistoryView>
        <S.InputContainer>
          <S.Input placeholder='Escreva aqui...' value={prompt} onChange={e => setPrompt(e.nativeEvent.text)} />
          <S.SendButtonTouchable onPress={() => { handleSend() }} accessibilityLabel="Enviar">
            <Icon name="send" size={25} color={'#fff'} />
          </S.SendButtonTouchable>
        </S.InputContainer>
      </S.Container>
    </KeyboardAvoidingView>
  )
}