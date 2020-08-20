import React from 'react';
import family from './assets/family.jpg';


const Card4 = () => {
return (
    <div>
        <article className="family pa3">
            <div>
                <img alt="family " src={family} className="photo" title="family"></img>
                <h1 className="stormy">Family of 6</h1>
                <hr className="mw3 bb bw1 b--black-10"></hr>
            </div>
        <p className="lh-copy measure center f6 black-70">
        </p>
        </article>
    </div>
);
}

export default Card4;