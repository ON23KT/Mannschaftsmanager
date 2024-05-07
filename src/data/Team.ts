import { Player } from "./Player";

export type Team = {
    id: number;
    name: string;
    players: Player[];
};

export const newTeam = (team: Team) => { 
    const teams = localStorage.getItem('teams');

    if (teams){
        const teamObjects = JSON.parse(teams);
        console.log(teamObjects);
        // if (!teamObjects.some((teamObject: Team)=>teamObject.id === team.id)){
        localStorage.setItem('teams', JSON.stringify([...teamObjects, team]));
        // }
    } else {
        localStorage.setItem('teams', JSON.stringify([team]));
    }
};

export const getTeams = () => {
    const teams = localStorage.getItem("teams");

    return teams ? JSON.parse(teams) : [];
}
