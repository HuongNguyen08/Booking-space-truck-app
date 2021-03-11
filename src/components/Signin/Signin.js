import React from 'react';
import './Signin.css';

const Signin = ({ onRouteChange }) => {
    return (
        <article className=" bg-lightest-blue br3 ba b--white-10 mv4 w-100 w-50-m w-50-l mw6 shadow-5 center">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <main className="pa4 black flex">
                <form className='w-50 br pa3 mr2 '>
                <div className='flex flex-column '> 
                    <p className=' bg-blue br3 grow'><i className="fa fa-facebook"></i>     Logg in med Facebook</p>
                    <p className='bg-light-blue br3 grow'><i className="fa fa-twitter"></i>     Logg in med Twitter</p>
                    <p className='bg-red br3 grow'><i className="fa fa-google"></i>     Logg in med Google+</p>
                </div>
                </form>
                <form className="measure w-50">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                        <div className="input-container">
                            <i className="fa fa-user icon"></i>
                            <input className="input-field " type="text" placeholder="Brukernavn" name="usrnm" />
                        </div>
                        <div className="input-container">
                            <i className="fa fa-key icon"></i>
                            <input className="input-field" type="password-signin" placeholder="Password" name="psw" />
                        </div>
                    </fieldset>
                <div className=" ">
                    <input 
                    onClick={() => onRouteChange('home')}
                    className="b ph3 black pv2 input-reset ba b--white bg-red grow pointer f6 dib" 
                    type="submit" 
                    value="LOGG IN" 
                    />
                </div>
                
                <div className="lh-copy mt3">
                    <p onClick={() => onRouteChange('register')} className="f6 link dim black db pointer">Registrer nå </p>
                </div>
                <div className="lh-copy mt3">
                    <p onClick={() => onRouteChange('register')} className="f6 link dim black db pointer">Glemt password? </p>
                </div>
                </form>
                
            </main> 
        </article> 
        );
}

export default Signin;