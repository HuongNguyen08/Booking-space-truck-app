import React from 'react';

const CheckSpace = ({handleSpace, onSubmit}) => {
    return (
        <div className=" bg-lightest-blue br3 ba b--white-10 mv4 w-100 w-50-m w-50-l mw6 shadow-5 center">
            <form className='pa4 black flex'>
                    <fieldset id="check" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Steg 1: Velg størrelse på pakken din</legend>
                        <div className='bg-yellow'>
                            <p>Pakker måles i lastemeter.</p>
                            <p>1 lastemeter ca 2,4 kvm (2,4 m bredde x 1 m lengde)</p>
                        </div>
                        <div className='flex'>  
                            <button className='b w-30 pa3 mr2 grow f6 link ph3 pv2 dib white bg-light-purple' >Fra 1-5 lastemeter Pris 1200-</button>
                            <button className='b w-30 pa3 mr2 grow f6 link ph3 pv2 dib white bg-light-purple' >Fra 5-10 lastemeter Pris 1000-</button>
                            <button className='b w-30 pa3 mr2 grow f6 link ph3 pv2 dib white bg-light-purple' >Over 10 lastemeter Pris 800-</button>
                        </div> 
                        <p>Hvor mange Lastemeter skal du sende?</p>
                        <div>
                            <input onChange={ handleSpace } className='f4 pa2 w-70 center' type='text' placeholder='Skriv inn tallene' />
                            <button onClick={ onSubmit }  className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' >Enter</button>
                        </div>
                    </fieldset>
                </form>
             <form className='pa4 black flex'>
                
                
             </form>
            
        </div>
    )
}

export default CheckSpace;