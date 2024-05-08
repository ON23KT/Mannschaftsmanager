// Imports use relative file paths or Node.js package names

//Mannschaft erstellen
import { Team, getTeams, newTeam, deleteTeam } from './data/Team';
import { TeamInput, playerPosition } from './dom-utils';
import { create } from './dom-utils';
import { teamNameInput } from './dom-utils';
import { submitTeamName } from './dom-utils';
import { myTeams } from './dom-utils';
import { createTeam } from './dom-utils';
//Spieler hinzufügen
import { addName } from './dom-utils';
import { addPlayer } from './dom-utils';
import { addplayerButton } from './dom-utils';
import { birthdate } from './dom-utils';
import { playerNumber } from './dom-utils';
import { Player, getPlayer, getPlayerOfTeam, newPlayer, deletePlayer } from './data/Player';

//select Team
import { selectTeam } from './dom-utils';

// CSS IMPORT IN TS NUR ÜBER VITE MÖGLICH
import './styles/styles.css';


//THIS IS THE ENTRY FILE - WRITE YOUR MAIN LOGIC HERE

//my Code

create.addEventListener("click", () => {
    if (TeamInput.style.display ="none"){
        TeamInput.style.display ="block";
        console.log("it worked");
    }
        
});

//speichern des Team Names
 submitTeamName.addEventListener("click", () => {
    const teamName : string = teamNameInput.value;
    const id : number = new Date().getTime();

    const team = {id: id, name: teamName};

    console.log("punkt")
    newTeam(team);
    renderTeams();
});

const renderTeams = () => {
    const teams: Team[] = getTeams();
    myTeams.innerHTML = "";
    selectTeam.innerHTML="";
    for(let team of teams) {
        const teamContainer = document.createElement("div");
        teamContainer.className = "teamContainer";
        const teamName = document.createElement("span");
        teamName.className = "teamName";
        teamName.textContent = team.name;

        teamContainer.appendChild(teamName);
        myTeams.appendChild(teamContainer);

        teamContainer.onclick = () => {
            renderPlayers(team);
        }

        const removeTeam = document.createElement("div");
        removeTeam.className = "deleteTeam";
        removeTeam.textContent = "Team löschen";
        removeTeam.onclick = (event) => {
            event.stopPropagation();
            deleteTeam(team.id);
            renderTeams();
            playGif();
        }
        teamContainer.appendChild(removeTeam);

        const optionTeam = document.createElement("option");
        optionTeam.value = team.id.toString();
        optionTeam.textContent = team.name;
        selectTeam.appendChild(optionTeam);        
    }

}

renderTeams();

const teams = getTeams();

const formatDate = (date: Date): string => {
    if (date){
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${String(day).padStart(2,"0")}.${String(month).padStart(2,"0")}.${year}`;
    } else {
        return "";
    }  
};

addPlayer.addEventListener("click", () => {
    if (createTeam.style.display = "none"){
        createTeam.style.display = "block"
    }
})

addplayerButton.addEventListener("click", () => {

    if (addName.value && birthdate.value && playerNumber.value && playerPosition.value && selectTeam.value){

        const namePlayer : string = addName.value;
        const id : number = Math.floor(Math.random() * 10000);
        const name = {id: id, mName: namePlayer};
    
        const playerBdate : string = birthdate.value;
        const playerBirthdate = new Date(playerBdate);
        const formatedDate = formatDate(playerBirthdate);
        console.log(playerBirthdate, formatedDate);
    
        const playNumber : string = playerNumber.value;
    
        const posPlayer : string = playerPosition.value;
    
        const selectedTeamId = selectTeam.value;
        const selectedTeam = teams.find((team: Team) => team.id.toString() === selectedTeamId);
    
        const player: Player = {
            id: Math.floor(Math.random() * 10000),
            name: namePlayer,
            birthdate: formatedDate,
            number: parseInt(playNumber),
            position: posPlayer,
            teamId: selectedTeamId,
        };
        console.log(selectedTeamId);
        
    
        newPlayer(player);
    
        renderTeams();
    } else {
        alert("Bitte füllen Sie alle Spielerinformationen aus.")
    }
})

const showTeams = () => {
    renderTeams();
}
const renderPlayers = (team: Team) => {
    const teams: Team[] = getTeams();
    const teamPlayer = getPlayerOfTeam(team.id.toString());

    myTeams.innerHTML = "";
    for (const player of teamPlayer) {
        const playerContainer = document.createElement("div");
        playerContainer.className = "playerContainer";
        const playerInfo = document.createElement("div");
        playerInfo.className = "playerInfo";

        const member = document.createElement("p");
        member.textContent = `Spieler: ${player.name},\n Geburtsdatum: ${player.birthdate}, \n Nummer: ${player.number},\n Position: ${player.position} \n Teams: ${team.name}`;
        
        playerInfo.appendChild(member);
        playerContainer.appendChild(playerInfo);  
        myTeams.appendChild(playerContainer); 
        
        const removePlayer = document.createElement("div");
        removePlayer.className = "deletePlayer";
        removePlayer.textContent = "Spieler löschen";

        removePlayer.onclick = (event) => {
            event.stopPropagation();
            deletePlayer(player.id);
            renderPlayers(team);
            playGif();

           
        }
        playerContainer.appendChild(removePlayer);

    }
    console.log("render players wurde ausgeführt");

    const backButton = document.createElement("div");
    backButton.className = "backButton";
    backButton.textContent = "Zurück zu den Teams";
    backButton.onclick = showTeams;
    myTeams.appendChild(backButton);
}

const playGif = () => {
    const key = "5bJS3F3V87nezw1gtvBIkgRHk1AbRpxW";
    let gif = `https://api.giphy.com/v1/gifs/random?api_key=${key}&tag="explosion"`
    console.log(gif);

    fetch(gif)
        .then(response => response.json())
        .then(content => {
            // Das GIF-Element erstellen
            let gifImg = document.createElement("img");
            gifImg.className = "gif";
            gifImg.src = content.data.images.downsized.url; // URL des GIFs aus der API-Antwort
            gifImg.alt = content.data.title; // Alternativer Text für das GIF

            // Das GIF-Element in das Dokument einfügen
            document.body.appendChild(gifImg);

            setTimeout(() => {
                gifImg.remove(); // Entfernt das GIF-Element aus dem Dokument
            }, 2500);
        })
        .catch(err => {
            console.error("Fehler beim Laden des GIFs:", err);
        });
};
