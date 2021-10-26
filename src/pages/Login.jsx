import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom';
import loginImg from '../assets/images/login.png';
import logoSvg from '../assets/svg/logo.svg';
import { login } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import FormGroup from '../components/MembershipFormGroup';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();


    const userLogin = (e) => {
        e.preventDefault();
        const user = {
            email, password
        }
        console.log(user);
        dispatch(login(user));
    }

    if (auth.authenticate) {
        return <Redirect to="/" />
    }

    return (
        <main className="membership">
            <section className="membership__img">
                <img src={loginImg} alt="" />
            </section>
            <section className="membership__content">
                <img className="membership__logo" src={logoSvg} alt="" />
                <div className="membership-form-wrapper">
                    <h2 className="membership-form-wrapper__title">Giriş Yap</h2>
                    <p className="membership-form-wrapper__text">Fırsatlardan yararlanmak için giriş yap!</p>
                    <form className="membership-form" onSubmit={userLogin}>
                        <FormGroup
                            label="Email"
                            placeholder="Email@example.com"
                            type="email"
                            value={email}
                            setInput={setEmail}
                        />
                        <FormGroup
                            label="Şifre"
                            placeholder=""
                            type="password"
                            value={password}
                            setInput={setPassword}
                        >
                            <Link to="/" className="membership-form__forgot-password" >Şifremi Unuttum</Link>
                        </FormGroup>
                        <button className="membership-form__button">Giriş</button>
                    </form>
                    <div className="membership-form-wrapper__bottom">
                        Hesabınız yok mu? <Link to="/register" className="membership-form-wrapper__link">Üye Ol</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Login
