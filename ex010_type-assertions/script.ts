// especifiquei ao ts que o ageField é um elemento input que é o que possui um value
let ageField = document.getElementById('age') as HTMLInputElement;

console.log(ageField.value);