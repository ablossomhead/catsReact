import React from 'react';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Card3a from './Card3a';
import Card3b from './Card3b';
import Card3c from './Card3c';
import Card3d from './Card3d';
import Card4 from './Card4';


const CardList = () => {
        return (
            <div>
                <div className="cardrow">
                    <div className="cardcol"><Card2 /></div>
                    <div className="cardcol"><Card1 /></div>
                </div>
                <div className="cardrow">
                    <div className="dblcardcol">
                        <div className="cardcol"><Card3 /></div>
                        <div className="cardcol"><Card4 /></div>
                    </div>
                    <div className="dblcardcol">
                        <div className="cardcol"><Card3a /></div>
                        <div className="cardcol"><Card3b /></div>
                        <div className="cardcol"><Card3c /></div>
                        <div className="cardcol"><Card3d /></div>
                    </div>
                </div>
                <div className="cardrow">

                </div>
            </div>
        );
}

export default CardList;