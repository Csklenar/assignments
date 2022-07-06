//constructor class
class Player {
    constructor(name, totalCoins, status, hasStar) {
        this.name = name;
        this.totalCoins = 20;
        this.status = "Big";
        this.hasStar = false;
    }
    /*here I set a function setName to have a parameter of namePicked so it grabs the name of Mario or Luigi */
    setName(namePicked){
        console.log(this.name = namePicked);
    }
    /*The gotHit function will be called when the player is hit by an enemy and will set the 
    status property as "big", "small", "powered up", or "dead"
    - I am saying if the status is = small then be dead. Becuase in Mario if they are small and hit you die
    - Then I have clearInterval becuase once you are dead then that is when the game ends
    - next I am doing if the status is equal to "big" then make the status small since in Mario if you are hit
    when you are big you go back to being small
    - Then I say if status is = to powered up then let the status be "Big since you go from powered up and if 
    you are hit you go back to being big"
    - lastly I am saying if status equals powered up and has a star then be "big".
    if you are powered up and hit this function you get a star so that is why we have that last else if statement 
     */
   gotHit() {
        if(this.status === "Small") {
            this.status = "Dead"
            console.log(`${this.name} has died `)
            clearInterval(myInterval) //stops the game
        } else if(this.status === "Big") {
            this.status = "Small"
            console.log(`${this.name} You got hit and shrunk back to being small`)
        } else if(this.status === "Powered Up") {
            this.status = "Big"
        }
        else if(this.status === "Powered Up" && this.hasStar) {
            this.status = "Big"
            this.hasStar = false;
            console.log(`${this.name} was hit and lost power`)
        }
    }
    /*Description: called when a powerup is received and sets the status accordingly 
    Here we say if you have a power up and you are small then you go to big
    If you are big and receive a power up you get Powered Up
    then we say if the status is powered up then they have a star so we set it to true*/
    gotPowerUp() {
        if(this.status === "Small"){
        this.status = "Big"
    } else if(this.status === "Big"){
        this.status = "Powered Up"
    } else if(this.status === "Powered Up") {
        this.hasStar = true;
    } 
}
// use one equal sign in the this.status to change the status 

addCoin() {
    this.totalCoins++;  //using ++ increment the count by 1 to totalCoins
    console.log(`${this.name} a coin was added to totalCoins`);
}

print() {
        console.log(
        `
        Name: ${this.name}, 
        Status: ${this.status}, 
        TotalCoins: ${this.totalCoins}, 
        Star: ${this.hasStar}`
        
    )}
};
// set the variable here to start the game
/* */
const player = new Player();
player.setName("Mario")
    /*here we create a setInterval to run the range function 
    Here we are doing a ES6 of the function inside setInterval that prints 
    a random number. SO if random number equals 0 then do the gotHit(), 
    if random number equals 1 then do the gotPowerUp(),
    if random number equals 2 then do addCoin().
    we user the player. because its within the scope of Player 
    at the end after the } we say 3000 meaning it will run the function every 3 seconds*/
    const myInterval = setInterval(() => {
        player.print()
    let randomNum = Math.floor(Math.random()*3)
        if(randomNum === 0) {
            player.gotHit()
        } else if(randomNum === 1) {
            player.gotPowerUp()
        } else if(randomNum === 2) {
            player.addCoin()
        }
    
}, 3000)

    


