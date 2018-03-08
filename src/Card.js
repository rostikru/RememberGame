import React from 'react';
import ImgIndexes from './Imgindexes.js';

export default class Card extends React.Component {
 
    render() {
        var classname;
        if(this.props.card.dissapear){
            classname= "card hidden"
        }else{
            classname="card"
        }        
        var output;
        if(this.props.card.flipped){
            var imgArr = ImgIndexes();
            var imgIndex=  this.props.card.flipped?this.props.card.cardValue:"";
            var path= "../img/" + imgArr[imgIndex];
            output = <img src={path} />
        }else{
            output = <img src="../img/beckground.jpg"/>
        }
        return (
           <div className ={classname}>
              <span>{output}</span>
           </div>
        );
    }    
} 