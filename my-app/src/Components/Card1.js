import React from 'react';
import athena from './assets/athena.jpg';

const Card1 = () => {
return (
    <div>
        <article className="mw5 h10 center bg-white br4 pa3 mv3 ba b--black-20">
            <div>
                <img alt='catface' src={athena} className="catface br-100 h4 w4 dib" title="Athena" ></img>
                <h1 className="stormy">Athena</h1>
                <hr className="mw3 bb bw1 b--black-10"></hr>
            </div>
        <p className="lh-copy measure center f6 black-70">
            <div>Reserved but curious.</div>
            <div>She loves to eat Storm's food</div>
            <div>and play with strings.</div>
            <div>Catnip is her secret pleasure.</div>
        </p>
        </article>
    </div>
    )
}

export default Card1;