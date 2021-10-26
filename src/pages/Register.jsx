import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { signup } from '../actions';
import loginImg from '../assets/images/login.png';
import logoSvg from '../assets/svg/logo.svg';
import FormGroup from '../components/MembershipFormGroup';

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const userSignUp = (e) => {
        e.preventDefault();
        const user = {
            email, password
        }
        dispatch(signup(user));
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
                    <h2 className="membership-form-wrapper__title">Üye Ol</h2>
                    <p className="membership-form-wrapper__text">Fırsatlardan yararlanmak için üye ol!</p>
                    <form className="membership-form" onSubmit={userSignUp}>
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
                        />
                        <button className="membership-form__button">Üye Ol</button>
                    </form>
                    <div className="membership-form-wrapper__bottom">
                        Hesabın var mı? <Link to="/login" className="membership-form-wrapper__link">Giriş Yap</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Register
