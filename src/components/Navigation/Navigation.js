import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
        if (isSignedIn) {
            return (
                <div>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>                
                    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p onClick={() => onRouteChange('firstpage')} className='f3 link dim black underline pa3 pointer'><i className="fa fa-sign-out fa_custom"></i> Logg ut</p>
                    
                    </nav>
                </div>
            );
        } else {
            return (
                <div>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'><i className="fa fa-user fa-custom"></i> Logg in</p>
                        <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'><i className="fa fa-users fa-custom"></i> Registrer</p>
                    </nav>
                </div>
            
            );
        }
        
}

export default Navigation;
