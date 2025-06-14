const breedOptions = {
  Dog: [
    "Akita", "Aspin", "Beagle", "Border Collie", "Boxer", "Bulldog", "Chihuahua", "Cocker Spaniel", "Dachshund", "Dalmatian", "Doberman Pinscher", "French Bulldog", "German Shepherd", "Golden Retriever", "Great Dane", "Jack Russell Terrier", "Labrador Retriever", "Maltese", "Pembroke Welsh Corgi", "Pit Bull Terrier", "Pomeranian", "Pug", "Rottweiler", "Samoyed", "Shih Tzu", "Siberian Husky", "Yorkshire Terrier"
  ],
  Cat: [
    "Abyssinian", "American Shorthair", "Bengal", "Birman", "British Shorthair", "Burmese", "Cornish Rex", "Domestic Longhair", "Domestic Mediumhair", "Domestic Shorthair", "Maine Coon", "Norwegian Forest Cat", "Oriental Shorthair", "Persian", "Puspin", "Ragdoll", "Russian Blue", "Scottish Fold", "Siamese", "Sphynx"
  ]
};

function updateBreedDropdown() {
  const species = document.getElementById('species').value;
  const breedSelect = document.getElementById('breed');
  breedSelect.innerHTML = '<option value="">Choose a breed...</option>';
  if (breedOptions[species]) {
    breedOptions[species].forEach(breed => {
      const opt = document.createElement('option');
      opt.value = breed;
      opt.textContent = breed;
      breedSelect.appendChild(opt);
    });
  }
}

// Add this in your DOMContentLoaded handler:
document.getElementById('species').addEventListener('change', updateBreedDropdown);

function getStoredPets() {
  const pets = localStorage.getItem('PetProfiles');
  if (pets) return JSON.parse(pets);
  return defaultPets;
}

function setStoredPets(pets) {
  localStorage.setItem('PetProfiles', JSON.stringify(pets));
}
