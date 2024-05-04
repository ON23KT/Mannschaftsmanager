// Imports use relative file paths or Node.js package names
import { textInput } from './dom-utils';
import { TeamInput } from './dom-utils';
import { create } from './dom-utils';
import { teamNameInput } from './dom-utils';
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
    if (TeamInput.style.display = "none")
        TeamInput.style.display = "block";
        console.log("it worked");
    // teamNameInput.style.display = "block";
    // teamNameInput.value = "";
});