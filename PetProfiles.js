// PET PROFILE FORM AND LIST LOGIC

// Default pets array (static, can be extended)
const defaultPets = [
  {
    name: "Cooper",
    species: "Dog",
    breed: "Golden Retriever",
    sex: "Male",
    age: "1 year",
    medical: "Vaccinated",
    img: "img/Cooper.jpg"
  },
  {
    name: "Mocha",
    species: "Cat",
    breed: "Siamese",
    sex: "Female",
    age: "2 years",
    medical: "Vaccinated",
    img: "img/Mocha.png"
  },
  {
    name: "Haching",
    species: "Dog",
    breed: "Akita",
    sex: "Female",
    age: "5 years",
    medical: "Not Yet Vaccinated",
    img: "img/Haching.jpg"
  },
  {
    name: "Browny",
    species: "Dog",
    breed: "Pug",
    sex: "Male",
    age: "2 years",
    medical: "Not Yet Vaccinated",
    img: "img/Browny.jpg"
  },
  {
    name: "Ming",
    species: "Cat",
    breed: "Puspin",
    sex: "Male",
    age: "3 years",
    medical: "Vaccinated",
    img: "img/Ming.jpg"
  },
  {
    name: "Budkin",
    species: "Dog",
    breed: "Rottweiler",
    sex: "Male",
    age: "3 years",
    medical: "Vaccinated",
    img: "img/Budkin.jpg"
  },
  {
    name: "Pancho",
    species: "Dog",
    breed: "Chihuahua",
    sex: "Male",
    age: "4 years",
    medical: "Not Yet Vaccinated",
    img: "img/Pancho.jpg"
  },
  {
    name: "Ginger",
    species: "Cat",
    breed: "Puspin",
    sex: "Female",
    age: "6 years",
    medical: "Vaccinated",
    img: "img/Ginger.jpg"
  }
];

function getStoredPets() {
  const pets = localStorage.getItem('PetProfiles');
  if (pets) return JSON.parse(pets);
  return defaultPets;
}

function setStoredPets(pets) {
  localStorage.setItem('petProfiles', JSON.stringify(pets));
}

function renderProfiles() {
  const pets = getStoredPets();
  const list = document.getElementById('profilesList');
  list.innerHTML = '';
  pets.forEach((pet, idx) => {
    const card = document.createElement('div');
    card.className = 'profile-card';

    let imgSrc = pet.img;
    if (pet.img && pet.img.startsWith('data:')) {
      imgSrc = pet.img;
    } else if (!pet.img) {
      imgSrc = 'https://placehold.co/120x120/cccccc/fff?text=Pet';
    }

    card.innerHTML = `
      <img src="${imgSrc}" alt="${pet.name}-${pet.species}">
      <h3>${pet.name}</h3>
      <ul>
        <li><b>Species:</b> ${pet.species}</li>
        <li><b>Breed:</b> ${pet.breed}</li>
        <li><b>Sex:</b> ${pet.sex}</li>
        <li><b>Age:</b> ${pet.age}</li>
        <li><b>Medical:</b> ${pet.medical}</li>
      </ul>
    `;
    list.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  renderProfiles();

  const form = document.getElementById('createProfileForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const pets = getStoredPets();

    const name = form.petName.value.trim();
    const species = form.species.value;
    const breed = form.breed.value.trim();
    const sex = form.sex.value;
    const age = form.age.value.trim();
    const medical = form.medical.value.trim();

    // Validate fields
    if (!name || !species || !breed || !sex || !age || !medical) {
      alert('Please fill in all fields.');
      return;
    }

    let ageStr = age;
    if (/^\d+$/.test(age)) {
      ageStr = age + (age == "1" ? " year" : " years");
    }

    // Handle image upload (optional)
    const photoInput = form.photo;
    let reader = null;
    let imgData = '';
    if (photoInput && photoInput.files && photoInput.files[0]) {
      reader = new FileReader();
      reader.onload = function (evt) {
        imgData = evt.target.result;
        pets.push({
          name, species, breed, sex, age: ageStr, medical, img: imgData
        });
        setStoredPets(pets);
        renderProfiles();
        form.reset();
        alert('Pet profile added!');
      };
      reader.readAsDataURL(photoInput.files[0]);
    } else {
      pets.push({
        name, species, breed, sex, age: ageStr, medical, img: ''
      });
      setStoredPets(pets);
      renderProfiles();
      form.reset();
      alert('Pet profile added!');
    }
  });
});