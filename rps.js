let hands = ['rock' , 'paper', 'scissors'];
function getHand(myArray) 
{let hand= (parseInt(Math.random()*10)%3);
if (hand === 0) {
    return 'rock';
}
else if (hand === 1) {
    return 'paper';
}
else {
    return 'scissors';}
};

let player1={
    name: 'Player 1',
    method: getHand(hands)
};
let player2={
    name: 'Player 2',
    method: getHand(hands)
};
//this is the point when I started getting really confused...

function playRound(player1object,player2object){
 
return player1object= player1.method, player2object=player2.method;


    if (player1object===player2object){return "It's a tie!"}
    else if (player1object === "rock" && player2object === "scissors") {
        return "Player 1 wins!";}
    else if (player1object=== "scissors" && player2object === "paper") {
        return "Player 1 wins!";}
    else if (player1object === "paper" && player2object === "rock") {
        return "Player 1 wins!";}

    else if (player1object === "paper" && player2object === "scissors") {
        return "Player 2 wins!";}
    else if (player1object === "scissors" && player2object === "rock") {
        return "Player 2 wins!";}
    else if (player1object === "rock" && player2object === "paper") {
        return "Player 2 wins!";}
 
    else {null;}
}
   
    playRound(player1hand, player2hand);