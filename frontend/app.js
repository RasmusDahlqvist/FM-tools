console.log('Toimii')




const tickerContainer = document.getElementById("ticker-container");



const fixtureBox2 = document.createElement("div");
const fixtureBox3 = document.createElement("div");
const fixtureBox4 = document.createElement("div");
const fixtureBox5 = document.createElement("div");


const fixtureScore = 0; 


const howManyFixtures = document.getElementById("gameWeekSelecter");
//const limit = Number(howManyFixtures.value);
const sortSelector = document.getElementById("sortFixtures");

function getNextFixtures(teamName, limit) {
    const nextFixtures = [];
for(let i = 0; i < fixtures.length; i++) {
    if(teamName ===  fixtures[i].hometeam || teamName === fixtures[i].awayteam) {
        nextFixtures.push(fixtures[i]);
        if(nextFixtures.length === limit) {
            console.log("pituus"+ nextFixtures.length);
            break;
        }
    }
     
}
console.log("getnexfixture palauttaa :: " + nextFixtures)
 return nextFixtures;
}

function showSelectedFixtures() {
    tickerContainer.innerHTML = "";

teams.forEach(element => {
    const nextFixturesList = getNextFixtures(element.name,Number(howManyFixtures.value));
    console.log(nextFixturesList)
    makeFixturerow(element.name, nextFixturesList);
    
});

console.log("weekvalue"+howManyFixtures.value);

}



function makeFixturerow(team, fixtureList) {
    const teamRow1 = document.createElement("div");
    const teamNameDiv = document.createElement("div");
    teamRow1.classList.add("flex-container");
    tickerContainer.appendChild(teamRow1);
    teamRow1.appendChild(teamNameDiv);
    teamNameDiv.innerText = team;
    for(let i = 0; i < fixtureList.length; i++) {
    if(fixtureList[i].hometeam === team) {
         const fixtureBox1 = document.createElement("div");
        fixtureBox1.innerText = fixtureList[i].awayteam;
        const teamRating = getTeamRating(fixtureList[i].awayteam);
        if(teamRating === 1) {
            fixtureBox1.classList.add("difficulty-1");
        }
        if(teamRating === 2) {
            fixtureBox1.classList.add("difficulty-2");
        }
        if(teamRating === 3) {
            fixtureBox1.classList.add("difficulty-3");
        }
       
        teamRow1.appendChild(fixtureBox1);
    }
    if(fixtureList[i].awayteam === team) {
         const fixtureBox1 = document.createElement("div");
        fixtureBox1.innerText = fixtureList[i].hometeam;
         const teamRating = getTeamRating(fixtureList[i].hometeam);
        if(teamRating === 1) {
            fixtureBox1.classList.add("difficulty-1");
        }
        if(teamRating === 2) {
            fixtureBox1.classList.add("difficulty-2");
        }
        if(teamRating === 3) {
            fixtureBox1.classList.add("difficulty-3");
        }
        teamRow1.appendChild(fixtureBox1);
    }
   
}
}

function getTeamRating(teamName) {
    for(let i = 0; i < teams.length; i++) {
        if(teams[i].name === teamName) {
           // console.log("Joukkueen rating: "+teams[i].rating)
            return teams[i].rating;
        }
    }
}

teams.forEach(element => {
    makeFixturerow(element.name, fixtures);
});




function showAllMatches() {
    for(let i = 0; i < fixtures.length; i++) {
    const card = document.createElement("div")
    card.innerText = "GW: "+fixtures[i].round+ "  "
    card.innerText = fixtures[i].hometeam +" vs " + fixtures[i].awayteam+ "  \n"
    card.className = "fixture"
    container.appendChild(card)
}
}


//showAllMatches();
function showSelectedMatches(number) {

}



/*
const showTeam = () => {
    const selectTeam = document.getElementById("teamSelect")
    console.log("selected jotai" + selectTeam.value)
    container.innerHTML = "";
    for (let i = 0; i < fixtures.length; i++) {
        if(fixtures[i].hometeam === selectTeam.value || fixtures[i].awayteam === selectTeam.value ) {
        const card = document.createElement("div")
        card.innerText = "GW: "+fixtures[i].round+ "  "
        card.innerText += fixtures[i].hometeam +" vs " + fixtures[i].awayteam+ "  \n"
        card.className = "fixture"

        if(selectTeam.value != fixtures[i].hometeam) {
            for (let k = 0; k < teams.length; k++) {
                if(teams[k].name === fixtures[i].hometeam) {
                console.log("vastustajan rating: "+ teams[k].rating)
                if(teams[k].rating === 1) {
                    card.classList.add("difficulty-1");
                    console.log("adding green");
                }
                if(teams[k].rating === 2) { 
                     card.classList.add("difficulty-2"); 
                }
                 if(teams[k].rating === 3) {
                     card.classList.add("difficulty-3"); 
                }
                }
             }
            }
        if(selectTeam.value != fixtures[i].awayteam) {
            for (let j = 0; j < teams.length; j++) {
                if(teams[j].name === fixtures[i].awayteam) {
                if(teams[j].rating === 1) {
                   card.classList.add("difficulty-1");
                   console.log("adding green");
                }
                if(teams[j].rating === 2) {
                     card.classList.add("difficulty-2"); 
                }
                 if(teams[j].rating === 3) {
                    card.classList.add("difficulty-3"); 
                }
                
                }
             }
            }
             
        
        container.appendChild(card)
        
        
        }
    }

}

*/

function getFixtureScore(team, limit) {
    let opponentData = null;
    const nextFixtures = getNextFixtures(team, limit);
    let ratingSum = 0; 
    let opponentNames = []; 
    
  
    for(let i = 0; i < nextFixtures.length; i++) {
        if(nextFixtures[i].awayteam != team) {
            const opponent = nextFixtures[i].awayteam; 
            opponentData = teams.find(t => t.name === opponent);
            ratingSum += opponentData.rating;
            opponentNames.push(nextFixtures[i].awayteam);
            
            }
             if(nextFixtures[i].hometeam != team) {
            const opponent = nextFixtures[i].hometeam; 
            opponentData = teams.find(t => t.name === opponent);
            ratingSum += opponentData.rating;
            opponentNames.push(nextFixtures[i].hometeam);
            }
        }
        return {team, ratingSum,  opponentNames};  
    }   




function sortFixtures(limit) {
    let scorelist = [];
    teams.forEach(element => {
       scorelist.push(getFixtureScore(element.name,limit));
    });
    scorelist.forEach(element => {
        //console.log("EI JÄRJESTETTY SCORELIST:  "+ element.team + " " + element.ratingSum);
        
    });    

    scorelist.sort((a, b) => a.ratingSum - b.ratingSum);
     scorelist.forEach(element => {
        //console.log("JÄRJESTETTY SCORELIST:  "+ element.team + " " + element.ratingSum);
        
    });  
    return scorelist;
}  

function showSortedFixtures() {
    const sortFixturesSelector = document.getElementById("sortFixtures");
    tickerContainer.innerHTML = "";

    if (sortFixturesSelector.value === "easiest") {
        const sortedList = sortFixtures(Number(howManyFixtures.value));

        sortedList.forEach(item => {
            const fixtureList = getNextFixtures(item.team, Number(howManyFixtures.value));
            makeFixturerow(item.team, fixtureList);
        });
    }

    if (sortFixturesSelector.value === "hardest") {
        const sortedList = sortFixtures(Number(howManyFixtures.value));
        sortedList.reverse();

        sortedList.forEach(item => {
            const fixtureList = getNextFixtures(item.team, Number(howManyFixtures.value));
            makeFixturerow(item.team, fixtureList);
        });
    }
}
    
  

    /*
    tickerContainer.innerHTML = "";
    let d;
    const s = sortFixtures(Number(howManyFixtures.value));
    teams.forEach(element => {
         d = getFixtureScore(element.name, Number(howManyFixtures.value)); 
    });
    

d.fixtures.forEach(element => {
    //const nextFixturesList = getNextFixtures(element.name,Number(howManyFixtures.value));
    console.log("!!!! " + d.name + " " + d.fixtures)
    makeFixturerow(element.name, d.fixtures);
    
   
});
*/
