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
}

export const getPlayer = () => {
    const players = localStorage.getItem("players");
    return players ? JSON.parse(players) : [];
}

export const getPlayerOfTeam = (teamId: string) => {
    const players = getPlayer();
    if (players) return players.filter((play: Player) => play.teamId === teamId);
}

export const deletePlayer = (id: number) => {
    const players = localStorage.getItem("players");
    if (players){
        const removePlayer = JSON.parse(players);
        localStorage.setItem("players", JSON.stringify(removePlayer.filter((player: Player) => player.id !== id)));
    }
}