console.log('Toimii')
/**
 AC OuluFC Inter (Turku)
 FC LahtiFF Jaro (Pietarsaari)HJK (Helsinki)IF Gnistan
  (Helsinki)IFK MariehamnIlves (Tampere)KuPS (Kuopio)SJK (Seinäjoki)TPS
   (Turku)VPS (Vaasa)
 */

const teams = [
    {
        name: "Ac Oulu",
        rating: 3
    },
    {
        name: "Fc Inter",
        rating: 3
    },
    {
        name: "Fc Lahti",
        rating: 2
    },
    {
        name: "IF Gnistan",
        rating: 1
    },
    {
        name: "FF Jaro",
        rating: 1
    },
    {
        name: "IFK Mariehamn",
        rating: 1
    },
    {
        name: "Ilves",
        rating: 2
    },
    {
        name: "SJK",
        rating: 2
    },
    {
        name: "TPS",
        rating: 3
    },
    {
        name: "Vps",
        rating: 2
    },
    {
        name: "HJK",
        rating: 3
    }

]

function checkRating() {
    
}


const fixtures = [
    { 
    round:8,
    hometeam: 'HJK',
    awayteam: 'TPS'
    },
    { round:8,
    hometeam: 'SJK',
    awayteam: 'Fc Inter'
    },
    { round:8,
    hometeam: 'AC Oulu',
    awayteam: 'TPS'
    },
     { 
    round:9,
    hometeam: 'HJK',
    awayteam: 'FF Jaro'
    },
    { round:9,
    hometeam: 'TPS',
    awayteam: 'Fc Inter'
    },
    { round:9,
    hometeam: 'AC Oulu',
    awayteam: 'SJK'
    }
    
]

fixtures.forEach(element => {
    console.log(element)
});

const container = document.getElementById("fixtures")

function showAllMatches() {
    for(let i = 0; i < fixtures.length; i++) {
    const card = document.createElement("div")
    card.innerText = "GW: "+fixtures[i].round+ "  "
    card.innerText = fixtures[i].hometeam +" vs " + fixtures[i].awayteam+ "  \n"
    card.className = "fixture"
    container.appendChild(card)
}
}


showAllMatches();
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
                }
             }
            }
        if(selectTeam.value != fixtures[i].awayteam) {
            for (let j = 0; j < teams.length; j++) {
                if(teams[j].name === fixtures[i].awayteam) {
                console.log("vastustajan rating: "+ teams[j].rating)
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

