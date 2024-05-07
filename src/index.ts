// Imports use relative file paths or Node.js package names

//Mannschaft erstellen
import { Team, getTeams, newTeam } from './data/Team';
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
import { Player } from './data/Player';

//select Team
import { selectTeam } from './dom-utils';

// CSS IMPORT IN TS NUR ÜBER VITE MÖGLICH
import './styles/styles.css';


//THIS IS THE ENTRY FILE - WRITE YOUR MAIN LOGIC HERE

// init App
// textInput.addEventListener('input', (e) => {
//     //log input value
//     console.log((e.target as HTMLInputElement).value);
// })

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

    const player : Player = {
        id: Math.floor(Math.random() * 10000),
        name: addName.value,
        birthdate: new Date(birthdate.value),
        number: parseInt(playerNumber.value),
        position: playerPosition.value
    };

    const team = {id: id, name: teamName, players: [player]};

    console.log("punkt")
    newTeam(team);
    renderTeams();
});


// const createMemberButton = (team: Team) => {
//     const memberButton = document.createElement("div");
//         memberButton.className = "memberButton";
//         memberButton.textContent = "Spieler hinzufügen";
//         const plusMember = document.createElement("img");
//         plusMember.src = "./src/icon/plus.svg";

//         memberButton.addEventListener("click", () => {
//             if (createTeam.style.display = "none"){
//                 createTeam.style.display = "block"
//             }
//             //localStorage
//             //newMember(team);
//         })
//         memberButton.appendChild(plusMember);
//         return memberButton;
// } 

const renderTeams = () => {
    const teams: Team[] = getTeams();
    myTeams.innerHTML = "";
    for(let team of teams) {
        const teamContainer = document.createElement("div");
        teamContainer.className = "teamContainer";
        const teamName = document.createElement("span");
        teamName.className = "teamName";
        teamName.textContent = team.name;
        // const memberButton = createMemberButton(team);

        teamContainer.appendChild(teamName);
        // teamContainer.appendChild(memberButton);
        // memberButton.appendChild(plusMember);
        myTeams.appendChild(teamContainer);

    }
}
renderTeams();

const teams = getTeams();

teams.forEach((team: Team) => {
    const optionTeam = document.createElement("option");
    optionTeam.value = team.id.toString();
    optionTeam.textContent = team.name;
    selectTeam.appendChild(optionTeam);
})

const formatDate = (date: Date): string => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}. ${month}. ${year}`;
};

addPlayer.addEventListener("click", () => {
    if (createTeam.style.display = "none"){
        createTeam.style.display = "block"
    }
})

addplayerButton.addEventListener("click", () => {
    const namePlayer : string = addName.value;
    const id : number = Math.floor(Math.random() * 10000);
    const name = {id: id, mName: namePlayer};

    const playerBdate : string = birthdate.value;
    const playerBirthdate = new Date(playerBdate);
    const formatedDate = formatDate(playerBirthdate);

    const playNumber : string = playerNumber.value;

    const posPlayer : string = playerPosition.value;

    console.log("Player Name:", namePlayer);
    console.log("Birthdate: ", formatedDate);
    console.log("Player Number: ", playNumber);
    console.log("Player Position", posPlayer);

    
    const selectedTeamId = selectTeam.value;
    const selectedTeam = teams.find((team: Team) => team.id.toString() === selectedTeamId);
    // if (selectedTeam) {
    //     selectedTeam.members.push(namePlayer);
    // } else {
    //     console.log("Team wurde nicht gefunden")
    // }
    renderTeams();
})

