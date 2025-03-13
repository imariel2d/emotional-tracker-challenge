import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { AuthContext } from '../context/AuthContext';
import styled from "styled-components";
import {EmotionContext} from "../context/EmotionContext";
import {translateEmotion} from "../fixtures/translateEmotion";
import {ActivityList} from "../components/ActivityList";

const Title = styled.h1`
  color: #2c3e50;
    margin-bottom: 8px;
`;

const Subtitle = styled.p`
  color: #7f8c8d;
  margin-bottom: 8px;
    display: inline-block;
`;

const Emotion = styled.span`
    color: black;
    font-weight: bold;
`

export default function Activities() {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  const { loading: emotionLoading, frequentEmotion, getMostFrequentEmotion } = useContext(EmotionContext);


  useEffect(() => {
    getMostFrequentEmotion();
  }, []);


  // Basic auth protection
  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [loading, user, router]);

  if (loading || !user) {
    return (
      <Layout title="Emociones - Terapia Emocional">
        <p>Cargando...</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <Title>El día de hoy puedes hacer</Title>
      <Subtitle>Porque creemos que te sientes <Emotion>{translateEmotion(frequentEmotion.emotion)}</Emotion></Subtitle>

      <ActivityList activities={frequentEmotion.activities} />
    </Layout>
  )
}
