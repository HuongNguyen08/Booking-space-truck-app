import React from 'react';
import './Booktruck.css';

const Booktruck = ({ handlePris }) => {
    return (
        <div>
            <div className="bg-lightest-blue br3 ba b--white-10 mv4 w-100 w-50-m w-50-l mw6 shadow-5 center">
                <div className='f4'>Steg 2: Få varene dine levert, skriv inn dine detajer nedenfor</div>
                <form className=' pa4 black flex'>
                <fieldset id="sender" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Sender | Hvor sendes pakken fra?</legend>
                        <div>
                            <input className="input-field " type="text" placeholder="Hvem sender pakken" name="usrnm" />
                        </div>
                        <div className="input-container">
                            <input className="input-field " type="text" placeholder="Gatenavn" name="usrnm" />
                            <button className='w-20 grow f4 link ph3 pv2 dib white bg-light-purple' ><i className='fa fa-search'></i></button>
                        </div> 
                        <div className="flex">   
                            <input className="pa3 mr2" type="text" placeholder="Poststed" name="psw" />
                            <input className="" type="number" placeholder="Postnummer" name="psw" />
                        </div>
                    </fieldset>
                </form>
                <form className='pa4 black flex'>
                <fieldset id="mottaker" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Mottaker | Hvor skal du sende pakken til?</legend>
                        <div>
                            <input className="input-field " type="text" placeholder="Hvem skal du sende pakken til" name="usrnm" />
                        </div>
                        <div className="input-container">
                            <input className="input-field " type="text" placeholder="Gatenavn" name="usrnm" />
                            <button className='w-20 grow f4 link ph3 pv2 dib white bg-light-purple' ><i className='fa fa-search'></i></button>
                        </div> 
                        <div className="flex">   
                            <input className="pa3 mr2" type="text" placeholder="Poststed" name="psw" />
                            <input className="" type="number" placeholder="Postnummer" name="psw" />
                        </div>
                    </fieldset>
                </form>
                <form className='pa4 black flex'>
                <fieldset id="pris" className="ba b--transparent ph0 mh0">
                        
                        <div className="input-container">
                            <button onClick={handlePris} className='grow f4 link ph3 pv2 dib white bg-light-purple'>Vis Pris</button>
                        </div> 
                    </fieldset>
                </form>
            </div>
        </div>

    );
}

export default Booktruck;