export type Player= {
    id: number;
    name: string;
    birthdate: string;
    number: number;
    position: string;
    teamId: string;
}

export const newPlayer = (player: Player) => {
    const players = localStorage.getItem("players");

    if (players) {
        const playerObjects = JSON.parse(players);
        localStorage.setItem("players", JSON.stringify([...playerObjects, player]))
    } else {
        localStorage.setItem("players", JSON.stringify([player]));
    }
    // const names = localStorage.getItem("names");

    // if (names){
    //     const nameObjects = JSON.parse(names);
    //     console.log(nameObjects);
    //     localStorage.setItem("names", JSON.stringify([...nameObjects, player]));
    // } else {
    //     localStorage.setItem("names", JSON.stringify([player]));
    // }

    // const birthdates = localStorage.getItem("birthdate");

    // if (birthdates){
    //     const birthdateObjects = JSON.parse(birthdates);
    //     console.log(birthdateObjects);
    //     localStorage.setItem("birthdates", JSON.stringify([...birthdateObjects, player]));
    // } else {
    //     localStorage.setItem("birthdates", JSON.stringify([player]));
    // }

    // const numbers = localStorage.getItem("numbers");

    // if (numbers){
    //     const numberObjects = JSON.parse(numbers);
    //     console.log(numberObjects);
    //     localStorage.setItem("numbers", JSON.stringify([...numberObjects, player]));
    // } else {
    //     localStorage.setItem("numbers", JSON.stringify([player]));
    // }

    // const positions = localStorage.getItem("positions");

    // if (positions){
    //     const positionObjects = JSON.parse(positions);
    //     console.log(positionObjects);
    //     localStorage.setItem("positions", JSON.stringify([...positionObjects, player]));
    // } else {
    //     localStorage.setItem("positions", JSON.stringify([player]));
    // } 
}

export const getPlayer = () => {
    const players = localStorage.getItem("players");
    return players ? JSON.parse(players) : [];
}

export const getPlayerOfTeam = (teamId: string) => {
    const players = getPlayer();
    if (players) return players.filter((play: Player) => play.teamId === teamId);
}