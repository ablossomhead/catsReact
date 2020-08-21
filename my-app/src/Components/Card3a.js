import React from 'react';
import stormplays from './assets/stormplays.gif';


const Card3a = () => {
return (
    <div>
        <article className="mw6 h10center bg-white br4 pa3 mv3 ba b--black-20">
            <div>
                <img alt="two" src={stormplays} className="photo" title="two cats"></img>
                <h1 className="stormy">Storm</h1>
            </div>
        </article>
    </div>
);
}
    
export default Card3a;