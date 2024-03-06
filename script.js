
// Character Object Constructor
function Character(name, hairColor, eyeColor, hairstyle, height, age, bodyType) {
  this.name = name;
  this.hairColor = hairColor;
  this.eyeColor = eyeColor;
  this.hairstyle = hairstyle;
  this.height = height;
  this.age = age;
  this.bodyType = bodyType;
}

// Sample Character
var sampleCharacter = new Character("Aelar", "Elf", "Silver", "Blue", "Long", 175, 250, "Slender", ["Forest Guardians"], ["Bow", "Healing Potion"]);

// Event Listener for Button
document.getElementById('generateButton').addEventListener('click', function() {
  displayCharacter(sampleCharacter);  // Initially display the sample character
});

// Function to Display Character (will be expanded later)
function displayCharacter(character) {
  // character.name = generateRandomName();
  // character.hairColor = generateRandomHairColor();
  // character.eyeColor = generateRandomEyeColor();
  // character.hairstyle = generateRandomHairstyle();
  // character.height = generateRandomHeight();
  // character.age = generateRandomAge();
  // character.bodyType = generateRandomBodyType();
  // var outputDiv = document.getElementById('characterOutput');
  // outputDiv.innerHTML = generateCharacterTable(character);  
}

function generateCharacterTable(characters) { // Accepts an array of characters
  let tableHTML = '<table><tr>';

  // Title Row (Header)
  tableHTML += '<th></th>'; 
  for (let i = 0; i < characters.length; i++) {
      tableHTML += `<th>Character ${i + 1}</th>`;
  }
  tableHTML += '</tr>';

  // Character Data Rows
  for (const property in characters[0]) {
      tableHTML += `<tr><th>${capitalize(property)}:</th>`; // Capitalization fix
      characters.forEach(character => {
          tableHTML += `<td>${Array.isArray(character[property]) ? character[property].join(", ") : character[property]}</td>`;             
      });
      tableHTML += '</tr>';
  }

  tableHTML += '</table>';
  return tableHTML;
}


// Listen to changes on the slider and update the label
document.getElementById('characterCountSlider').addEventListener('input', function() {
  document.getElementById('characterCountValue').innerHTML = this.value;
})

// Updated event listener for the generation button
document.getElementById('generateButton').addEventListener('click', function() {
  var outputDiv = document.getElementById('characterOutput');
  outputDiv.innerHTML = ''; // Clear previous output
  
  const characters = [];
  const characterCount = document.getElementById('characterCountSlider').value;
  for (let i = 0; i < characterCount; i++) {
    let randomCharacter = new Character(generateRandomName(), generateRandomHairColor(), generateRandomEyeColor(), generateRandomHairstyle(),
    generateRandomHeight(), generateRandomAge(), generateRandomBodyType()); // Fill in with other random generation functions
    characters.push(randomCharacter);
  }
  outputDiv.innerHTML = generateCharacterTable(characters);
});