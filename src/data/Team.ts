export type Team = {
    id: number;
    name: string;
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

export const deleteTeam = (id: number) => {
    const teams = localStorage.getItem("teams");
    if (teams){
        const removeTeam = JSON.parse(teams);
        localStorage.setItem("teams", JSON.stringify(removeTeam.filter((team: Team) => team.id !== id)));
    }
    
}