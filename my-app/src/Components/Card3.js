import React from 'react';
import adopted from './assets/adopted.jpg';


const Card3 = () => {
return (
    <div className="adoptedcard">
        <article className="mw7 h10center bg-white br4 pa3 mv3 ba b--black-20">
            <div>
                <img alt="adopted" src={adopted} className="photo" title="Adopted"></img>
                <h1 className="stormy">Forever Home</h1>
                <hr className="mw3 bb bw1 b--black-10"></hr>
            </div>
        <p className="lh-copy measure center f6 black-70">
            <div>Adopted from our local</div>
            <div>animal shelter in July 2016,</div>
            <div>Storm and Athena found their</div>
            <div>forever home with us.</div>
        </p>
        </article>
    </div>
);
}
    
export default Card3;