import imageRegister from '../../assets/svg/imageRegister.svg';
import './Register.css';
import { Link } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import AppleLogin from 'react-apple-login';
import iconApple from '../../assets/svg/iconApple.svg';
import iconGoogle from '../../assets/svg/iconGoogle.svg';
import { useNavigate } from 'react-router-dom';

import api from '../../api/axios';
import { useState } from 'react';


function Register() {

    const [nome, setName] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setPassword] = useState('');
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
    const payload = {
        nome,
        email,
        senha,
    };

    api.post('/usuarios', payload) 
    .then(response => {
        alert("Dados enviado com sucesso!")
        console.log(response.data);
        navigate('/login');
    })
    .catch(error => {
        alert("Erro ao cadastrar")
        console.error("erro ao cadastrar: ", error);
    });
};

    const handleGoogleLoginSuccess = (response) => {
        console.log("Google login successful:", response);
 
    };

    const handleGoogleLoginFailure = (error) => {
        console.log("Google login failed:", error);
    };

    const handleAppleLoginSuccess = (response) => {
        console.log("Apple login successful:", response);
  
    };

    const handleAppleLoginFailure = (error) => {
        console.log("Apple login failed:", error);
    };

    return (
        // <GoogleOAuthProvider clientId="SUA_CLIENT_ID_GOOGLE">
            <div className='container-register'>
                <div className='form'>
                    <h2>Cadastro</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='input'>
                            <label>Nome</label>
                            <input type="text" name="nome" placeholder='Nome' value={nome}
                            onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className='input'>
                            <label>Email</label>
                            <input type="email" name="email" placeholder='E-mail'
                            value={email} onChange={(e) => setEmail(e.target.value)} required
                            />
                        </div>
                        <div className='input'>
                            <label>Senha</label>
                            <input type="password" name="senha" placeholder='Senha' 
                            value={senha} onChange={(e) => setPassword(e.target.value)} required
                            />
                        </div>
                        <button className='button-register' type="submit">Cadastrar</button>
                        <p className='text-center p-5 pb-2'>ou</p>
                        
                        {/* <div className='button-icons'>
                            <GoogleLogin
                                onSuccess={handleGoogleLoginSuccess}
                                onError={handleGoogleLoginFailure}
                                render={(renderProps) => (
                                    <button onClick={renderProps.onClick}>
                                        <img src={iconGoogle} alt="Google Icon" /> Entrar com Google
                                    </button>
                                )}
                            />
                            <AppleLogin
                                clientId="SUA_CLIENT_ID_APPLE"
                                redirectURI="SUA_REDIRECT_URI"
                                onSuccess={handleAppleLoginSuccess}
                                onFailure={handleAppleLoginFailure}
                                render={(renderProps) => (
                                    <button onClick={renderProps.onClick}>
                                        <img src={iconApple} alt="Apple Icon" /> Entrar com Apple
                                    </button>
                                )}
                            />
                        </div> */}

                        <p className='text-center'>
                            Já tem uma conta? <Link className='link' to='/login'>Entrar</Link>
                        </p>
                    </form>
                </div>

                {/* <div className='imageRegister'> */}
                    <img className='imageRegister' src={imageRegister} alt="Register" />
                {/* </div> */}
            </div>
        // </GoogleOAuthProvider>
    );
}

export default Register;