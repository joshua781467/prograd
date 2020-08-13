const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
function initPlayers(PLAYERS){
    let detailedPlayers=[];
    for(let i=0;i<PLAYERS.length;i++){
        let obj =new Object();
        obj.name=PLAYERS[i];
        obj.strength=76;
        obj.image=`images/super-${i+1}.png`
        obj.type="hero|villain"
        detailedPlayers.push(obj);
    }
    return detailedPlayers
}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
   return Math.floor((Math.random()*10+1))
}

const buildPlayers = (players, type) => {
    let fragment = '';

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here


}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}