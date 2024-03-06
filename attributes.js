// Color Array - Used for both hair and eyes
const colors = [
  "Auburn", "Raven", "Golden", "Silver", "Black", "Brown", "Yellow",
  "Emerald", "Cerulean", "Violet", "Crimson", "Azure", 
  "Ivory", "Scarlet", "Burgundy", "Mahogany", "Lavender",
  "Red", "Silver", "Auburn", "Hazel","Green", "Blue", "Violet", "Pink", 
  "Teal", "Sky Blue", "Orange","Platinum"
];

// Hairstyle Array
const hairstyles = [
  "Short and Spiky", "Long and Flowing", "Braided", "Ponytail", "Bald", 
  "Top Knot", "Dreadlocks", "Pixie Cut", "Shaved Sides", "Bob", 
  "Mohawk", "Afro", "Side Swept", "Curly", "Wavy", "Short", "Long", "Medium",
  "Spiky", "Shaved",
]

// Body Type Array
const bodyTypes = [
  "Muscular", "Slender", "Athletic", "Stocky", "Lean", 
  "Brawny", "Petite", "Curvy", "Lanky", "Robust", "Broad",
]

// Functions to Generate Random Attributes
function generateRandomHairColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomEyeColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomHairstyle() {
  return hairstyles[Math.floor(Math.random() * hairstyles.length)];
}

function generateRandomHeight() {
  // Adjust parameters as needed for your desired height range
  return Math.floor(Math.random() * (200 - 150 + 1) + 150); // Range 150-200 cm
}

function generateRandomAge() {
  // Adjust parameters for desired age range
  return Math.floor(Math.random() * (300 - 18 + 1) + 18);
}

function generateRandomBodyType() {
  return bodyTypes[Math.floor(Math.random() * bodyTypes.length)];
}
