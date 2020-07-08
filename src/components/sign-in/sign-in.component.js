import React, { useState } from 'react'
import Button from '../button/button.component'
import userServices from '../../services/user.services';
import Input from '../input/input.component';

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handlerLoginSubmit = (e) => {
        e.preventDefault();
        userServices.signInWithEmailAndPasswors(email, password)
    }

    return (
        <div className="sign-in">
            <form action="POST" onSubmit={handlerLoginSubmit}>

                <Input type="text" label="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email-signin" />

                <Input type="pasword"
                    label="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    id="password-signin" />
                <div className="input-group">
                    <Button className="btn--main">Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignIn
