import React from 'react';
import two from './assets/two.jpg';


const Card3b = () => {
return (
    <div>
        <article className="mw6 h10center bg-white br4 pa3 ba b--black-20">
            <div>
                <img alt="two" src={two} className="photo" title="two cats"></img>
                <h1 className="stormy">Two cute kits</h1>
            </div>
        </article>
    </div>
);
}
    
export default Card3b;