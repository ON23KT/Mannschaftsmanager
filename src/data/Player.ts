export type Player= {
    id: number;
    name: string;
    birthdate: Date;
    number: number;
    position: string;
}

export const newName = (nameMember: Player) => {
    const names = localStorage.getItem("names");

    if (names){
        const nameObjects = JSON.parse(names);
        console.log(nameObjects);
        localStorage.setItem("names", JSON.stringify([...nameObjects, nameMember]));
    } else {
        localStorage.setItem("names", JSON.stringify([nameMember]));
    }
}

export const getNames = () => {
    const names = localStorage.getItem("names");

    return names ? JSON.parse(names) : [];
}

export const newBirthdate = (playerBirthdate: Player) => {
    const birthdates = localStorage.getItem("birthdate");

    if (birthdates){
        const birthdateObjects = JSON.parse(birthdates);
        console.log(birthdateObjects);
        localStorage.setItem("birthdates", JSON.stringify([...birthdateObjects, playerBirthdate]));
    } else {
        localStorage.setItem("birthdates", JSON.stringify([playerBirthdate]));
    }
}

export const getBirthdate = () => {
    const birthdates = localStorage.getItem("birthdates");

    return birthdates ? JSON.parse(birthdates) : []; 
}

export const newNumber = (playerNumber: Player) => {
    const numbers = localStorage.getItem("numbers");

    if (numbers){
        const numberObjects = JSON.parse(numbers);
        console.log(numberObjects);
        localStorage.setItem("numbers", JSON.stringify([...numberObjects, playerNumber]));
    } else {
        localStorage.setItem("numbers", JSON.stringify([playerNumber]));
    }
}

export const getNumber = () => {
    const numbers = localStorage.getItem("numbers");
    
    return numbers ? JSON.parse(numbers) : [];
}

export const newPosition = (playerPosition: Player) => {
    const positions = localStorage.getItem("positions");

    if (positions){
        const positionObjects = JSON.parse(positions);
        console.log(positionObjects);
        localStorage.setItem("positions", JSON.stringify([...positionObjects, playerPosition]));
    } else {
        localStorage.setItem("positions", JSON.stringify([playerPosition]));
    } 
}

export const getPositions = () => {
    const positions = localStorage.getItem("positions");

    return positions ? JSON.parse(positions) : [];
}