import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import DefaultButton from '../components/DefaultButtonComponent';
import TextInput from '../components/TextInputComponent';

const Login = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        console.log(text);
        navigate('/chat', { state: { username: text } });
    };
    const [text, setText] = useState('');

    return (
        <div className="container">
            <div className="login-box">
                <div className='title'>
                    <h1>Login</h1>
                </div>
                <TextInput value={text} onChange={setText}  className="login-text-input" />
                <div className='vertical-spacing'></div>
                <DefaultButton onClick={handleLogin} text={'Entrar'}/>
            </div>
        </div>
    );
};

export default Login;
