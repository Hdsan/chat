import { randomUUID } from "node:crypto";
import fs from 'fs';
import path from 'path';
import messagesData from '../database/database.json';
interface Message {
  id: string;
  content: string;
  sender: string;
  timestamp: string;
}

let messages: Message[] = messagesData as Message[];

export function saveUserMessages(message: string, sender: string): void {
  const messages: Message[] = getAllMessages();
  let id = randomUUID().toString();
  const newMessage: Message = {
    id: id,
    sender: sender,
    content: message,
    timestamp: new Date().toString(),
  };
  messages.push(newMessage);
  updateJson();
}


export function getAllMessages(): Message[] {
  return messages;
}


function updateJson() {
  const filePath = path.join(__dirname, '../database/database.json');
  fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));
}
