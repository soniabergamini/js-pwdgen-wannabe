let yourname = prompt("Il tuo nome:");
let surname = prompt("Il tuo cognome:");
let color = prompt("Il tuo colore preferito:");

// console.log(`${yourname}-${surname}-${color}-2023`);
let password = (`${yourname}-${surname}-${color}-2023`);
console.log(`L'utente ha generato la seguente password: ${password}`);

document.getElementById("startMessage").innerHTML = `ciao ${yourname}!`

// document.getElementById("pswMessage").innerHTML = `La tua nuova password è: ${password}`
document.getElementById("pswText").innerHTML = `La tua nuova password è: `
document.getElementById("pswCode").innerHTML = `${password}`