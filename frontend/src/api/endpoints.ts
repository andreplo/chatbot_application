import axios, { type AxiosResponse } from 'axios';
import type { UserSentMessage } from './types';

export function sendMessage(message: UserSentMessage): Promise<AxiosResponse<{ message: string }>> {
  return axios.post('http://localhost:8000/chatbot', message);
}

export function resetConversation(): Promise<AxiosResponse> {
  return axios.get('http://localhost:8000/chatbot-reset');
}
