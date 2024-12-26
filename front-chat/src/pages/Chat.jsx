import { useState, useEffect, useRef } from 'react';
import DefaultButton from '../components/DefaultButtonComponent';
import TextInput from '../components/TextInputComponent';
import MessageComponent from '../components/MessageComponent';
import { getMessages, sendMessage } from '../services/ChatService'
import { useNavigate, useLocation } from 'react-router-dom';

const Chat = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const messagesEndRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const { username } = location.state || {};

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const getPosts = async () => {
    try {
      const data = await getMessages();
      setMessages(data);
    } catch (error) {
      console.error('Erro ao carregar os posts:', error);
    }
  };
  const logout = () => {
    navigate('/');
  }
  const sendTippedMessage = async () => {
    if (!text.trim()) {
      return;
    }
    await sendMessage({ text, username }).then(() => {
      getPosts();
      scrollToBottom();
    });
    setText('');
  }
  const searchEveryFiveSeconds = () => {
    setInterval(() => {
      getPosts();
    }, 5000);
  };

  useEffect(() => {
    if (!username) {
      navigate('/');
    }
    getPosts();
    searchEveryFiveSeconds();
  }, []);

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <MessageComponent key={index} message={msg} username={username} />
        ))}
        <div ref={messagesEndRef}></div>
      </div>
      <div className='chat-input'>
        <DefaultButton text={'Enviar'} onClick={sendTippedMessage} />
        <div className='horizontal-spacing'></div>
        <TextInput value={text} onChange={setText} />
        <div className='horizontal-spacing'></div>
        <DefaultButton text={'Log out'} onClick={logout}/>
      </div>
    </div>
  );
};

export default Chat;
