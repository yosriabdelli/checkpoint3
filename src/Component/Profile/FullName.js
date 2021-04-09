import React from 'react';
import Hero from '../../hero.svg';

import { Container } from 'react-bootstrap';

const NameProfil = () => {
    return (
        <div>
            <Container>
                <p style={{ color: "#000", fontSize: '50px',lineHeight:'45px',marginBottom:'30px' }}><strong>Yosri <br/>Abdelli</strong></p>
                <div className="hero-foot">
                    <div className="container">
                        <img className="is-bottom" src={Hero}/>
                    </div>
                </div>
            </Container>
        </div>
  );
};

export default NameProfil;