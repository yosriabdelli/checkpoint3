import React from 'react';
import PictureProfil from '../../mf-avatar.svg';

const Profil = () => {
    return (
        <div style={{marginTop:'30px'}}>
            <h1>Designer, Front-end Developer & Mentor</h1>
            <h2>I design and code beautifully simple things, and I love what I do.</h2>
            <img src={PictureProfil} />

            
        </div>
  );
};

export default Profil;