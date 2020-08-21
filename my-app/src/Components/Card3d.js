import React from 'react';
import adoptionday1 from './assets/adoptionday1.jpg';


const Card3d = () => {
return (
    <div>
        <article className="mw6 h10center bg-white br4 pa3 ba b--black-20">
            <div>
                <img alt="athenaplaying" src={adoptionday1} className="photo" title="athena playing"></img>
                <h1 className="stormy">Athena & Ethan</h1>
            </div>
        </article>
    </div>
);
}
    
export default Card3d;