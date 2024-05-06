// Imports use relative file paths or Node.js package names

//Mannschaft erstellen
import { Team, getTeams, newTeam } from './data/Team';
import { TeamInput } from './dom-utils';
import { create } from './dom-utils';
import { teamNameInput } from './dom-utils';
import { submitTeamName } from './dom-utils';
import { myTeams } from './dom-utils';
import { createTeam } from './dom-utils';
//Spieler hinzufügen


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
    const team = {id: id, name: teamName};

    console.log("punkt")
    newTeam(team);
    renderTeams();
});

const createMemberButton = (team: Team) => {
    const memberButton = document.createElement("div");
        memberButton.className = "memberButton";
        memberButton.textContent = "Spieler hinzufügen";
        const plusMember = document.createElement("img");
        plusMember.src = "./src/icon/plus.svg";

        memberButton.addEventListener("click", () => {
            if (createTeam.style.display = "none"){
                createTeam.style.display = "block"
            }
            //localStorage
            addMember(team);
        })
        memberButton.appendChild(plusMember);
        return memberButton;
} 

const renderTeams = () => {
    const teams: Team[] = getTeams();
    myTeams.innerHTML = "";
    for(let team of teams) {
        const teamContainer = document.createElement("div");
        teamContainer.className = "teamContainer";
        const teamName = document.createElement("span");
        teamName.className = "teamName";
        teamName.textContent = team.name;
        const memberButton = createMemberButton(team);

        // const addMemberButton = document.createElement ("div");
        // addMemberButton.className = "memberButton";
        // addMemberButton.textContent = "Spieler hinzufügen";
        // const plusMember = document.createElement("img");
        // plusMember.src = "./src/icon/plus.svg";

        // addMemberButton.addEventListener("click", () => {
        //     if (createTeam.style.display ="none")
        //         createTeam.style.display ="block";
        // });


        teamContainer.appendChild(teamName);
        teamContainer.appendChild(memberButton);
        // memberButton.appendChild(plusMember);
        myTeams.appendChild(teamContainer);

    }
}
renderTeams();



