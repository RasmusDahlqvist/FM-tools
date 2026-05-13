console.log('Toimii')




const tickerContainer = document.getElementById("ticker-container");


//const fixtureBox1 = document.createElement("div");
const fixtureBox2 = document.createElement("div");
const fixtureBox3 = document.createElement("div");
const fixtureBox4 = document.createElement("div");
const fixtureBox5 = document.createElement("div");

const fixtureScore = 0; 


const weekValue = document.getElementById("gameWeekSelecter");
function getNextFixtures(teamName, limit) {
    const emptyList = [];
for(let i = 0; i < fixtures.length; i++) {
    if(teamName ===  fixtures[i].hometeam) {
        emptyList.push(fixtures[i].awayteam);
        if(emptyList.length === limit) {
            break;
        }
    }
     if(teamName ===  fixtures[i].awayteam) {
        emptyList.push(fixtures[i].hometeam);
        if(emptyList.length === limit) {
            break;
        }
    }
    
    
   
}
emptyList.forEach(element => {
        console.log(element)
    });
 return emptyList;
}

getNextFixtures("HJK", 3);



function makeFixturerow(team) {
    const teamRow1 = document.createElement("div");
    const teamNameDiv = document.createElement("div");
    teamRow1.classList.add("flex-container");
    tickerContainer.appendChild(teamRow1);
    teamRow1.appendChild(teamNameDiv);
    teamNameDiv.innerText = team;
    for(let i = 0; i < fixtures.length; i++) {
    if(fixtures[i].hometeam === team) {
         const fixtureBox1 = document.createElement("div");
        fixtureBox1.innerText = fixtures[i].awayteam;
        const teamRating = getTeamRating(fixtures[i].awayteam);
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
    if(fixtures[i].awayteam === team) {
         const fixtureBox1 = document.createElement("div");
        fixtureBox1.innerText = fixtures[i].hometeam;
         const teamRating = getTeamRating(fixtures[i].hometeam);
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
    makeFixturerow(element.name)
});

//getTeamRating("SJK");


/*
//HJK:n ottelut 
for(let i = 0; i < fixtures.length; i++) {
    if(fixtures[i].hometeam === "HJK") {
         const fixtureBox1 = document.createElement("div");
        fixtureBox1.innerText = fixtures[i].awayteam;
        teamRow1.appendChild(fixtureBox1);
    }
    if(fixtures[i].awayteam === "HJK") {
         const fixtureBox1 = document.createElement("div");
        fixtureBox1.innerText = fixtures[i].hometeam;
        teamRow1.appendChild(fixtureBox1);
    }
   
}
*/



















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

for (let i = 0; i < teams.length; i++) {
    console.log("Joukkueiden rating: "+ teams[i].rating)
}

