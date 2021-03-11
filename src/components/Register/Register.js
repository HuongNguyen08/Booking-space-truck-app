import React from 'react';
import './Register.css';

const Register = ({ onRouteChange }) => {
    return (
        <article className="bg-lightest-blue br3 ba b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <main className="pa4 black">
                <form className="measure">
                    <fieldset id="register" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Registrer</legend>
                        <div className="input-container">
                            <i className="fa fa-user icon"></i>
                            <input className="input-field " type="text" placeholder="Brukernavn" name="usrnm" />
                        </div>
                        <div className="input-container">
                            <i className="fa fa-envelope icon"></i>
                            <input className="input-field" type="text" placeholder="E-post" name="email" />
                        </div>
                        <div className="input-container">
                            <i className="fa fa-key icon"></i>
                            <input className="input-field" type="password" placeholder="Password" name="psw" />
                        </div>
                    </fieldset>
                <div className=" ">
                    <input 
                    onClick={() => onRouteChange('home')}
                    className="b ph3 black pv2 input-reset ba b--white bg-transparent grow pointer f6 dib bg-red" 
                    type="submit" 
                    value="Registrer" 
                    />
                </div>
                </form>
            </main> 
        </article> 
        );
}

export default Register;