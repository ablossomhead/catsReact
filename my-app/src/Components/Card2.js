import React from 'react';
import storm from './assets/storm.jpg';


const Card2 = () => {
return (
    <div>
        <article className="mw5 h10center bg-white br4 pa3  mv3 ba b--black-20">
            <div>
                <img alt="catface" src={storm} className="catface br-100 h4 w4 dib" title="Storm"></img>
                <h1 className="stormy">Storm</h1>
                <hr className="mw3 bb bw1 b--black-10"></hr>
            </div>
            <p className="lh-copy measure center f6 black-70">
                <div>Playful with a mischievous streak.</div>
                <div>He loves belly scratches,</div>
                <div>playing with toys, and</div>
                <div>catching lizards.</div>
            </p>
        </article>
    </div>
    );
}

export default Card2;