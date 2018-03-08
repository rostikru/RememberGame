import React from 'react';
import Card from './Card.js';

const gamekrok = {
    FC: "Choose The First Card", SC: "Choose The Second Card",
    WRONG: "WRONG", CR: "Correct:)", WIN: "Congratulation!!! You Win"
}


function shuffleArray(numbers) {
   for (var i = numbers.length - 1; i > 0; i--){
        var j = Math.floor(Math.random() * (i + 1));
        var temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
    }
}


function createArray(x,y) {
    return Array.apply(null, Array(x)).map(function(e){
        return Array(y);
    });
}

export default class Layout extends React.Component {
    constructor(props){
         super(props);
         var cards = createArray(props.height, props.width);
         var numbers=[];
         for (var oneDIndex = 0; oneDIndex < props.height * props.width; oneDIndex++){
             numbers.push(Math.floor(oneDIndex/2)+1);
         }
         shuffleArray(numbers);
         for (var rowIndex = 0; rowIndex < props.height; rowIndex++){
             for (var collumnIndex = 0; collumnIndex < props.width; collumnIndex++){                 
                 cards[rowIndex][collumnIndex] = {
                     cardValue:numbers[rowIndex * props.width + collumnIndex], 
                     flipped: false, 
                     rowIndex:rowIndex, 
                     collumnIndex:collumnIndex, 
                     dissapear: false
                 };
             }             
         }         
         this.state = {
             counter: 2,
             hidden: false,
             cards: cards,
             gameState: gamekrok.FC,
             firstCard:null,
             secondCard:null
         };
         
     }
    
        
    cardClick(card){
        if (!card.flipped){
            switch(this.state.gameState){
                case gamekrok.FC:
                    this.state.cards[card.rowIndex][card.collumnIndex].flipped=true;
                    this.setState({cards:this.state.cards, firstCard: card, gameState: gamekrok.SC});
                break;                    
                case gamekrok.SC:
                    this.state.cards[card.rowIndex][card.collumnIndex].flipped=true;
                    if (this.state.firstCard.cardValue == card.cardValue){            
                        if (this.state.counter == this.props.height*this.props.width){
                           this.setState({gameState: gamekrok.WIN, cards:this.state.cards});
                        setTimeout(()=>{
                            this.state.cards[this.state.firstCard.rowIndex][this.state.firstCard.collumnIndex].dissapear = true;           this.state.cards[card.rowIndex][card.collumnIndex].dissapear = true;
                            this.setState({gameState: gamekrok.WIN, cards:this.state.cards});
                        },1000);
                        break;
                        }
                        this.setState({gameState: gamekrok.CR, cards:this.state.cards, counter:this.state.counter+2});
                        setTimeout(()=>{
                            this.state.cards[this.state.firstCard.rowIndex][this.state.firstCard.collumnIndex].dissapear = true;           
                            this.state.cards[card.rowIndex][card.collumnIndex].dissapear = true;
                            this.setState({gameState: gamekrok.FC, cards:this.state.cards});
                        },1000);                    
                     }else{
                        this.setState({gameState: gamekrok.WRONG, cards:this.state.cards});                    
                        setTimeout(()=>{
                                this.state.cards[this.state.firstCard.rowIndex][this.state.firstCard.collumnIndex].flipped = false;
                                this.state.cards[card.rowIndex][card.collumnIndex].flipped = false;
                                this.setState({gameState: gamekrok.FC, cards:this.state.cards});
                        }, 1000);                     
                    }
                break; 
              }       
           }
        }
    
    
    render(){       
        const cardsRendered = this.state.cards.map((rowOfCards, rowIndex)=>
            <tr key={rowIndex}>
               {rowOfCards.map((card, indexOfCardInRow)=>
                <td onClick ={()=>this.cardClick(card)}>
                  <Card 
                    card={card} 
                  />
                </td>)}
            </tr>
        );
        
        return (
            <div>
                <div>{this.state.gameState}</div>
                <table>
                    <tbody>{cardsRendered}</tbody>
                </table>
            </div>
        );    
    }
    
} 

