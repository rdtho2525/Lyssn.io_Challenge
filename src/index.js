const therapists = require('../src/data.json');

const therapistList = document.getElementById('therapistList');

const formatNames = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

const displayTherapists = () => {
  const allTherapists = therapists.data.map(therapist => {
    const lastName = formatNames(therapist.lname);
    const firstName = formatNames(therapist.fname);
    return `<li class="therapist-name">${lastName}, ${firstName}</li>`
  });

  therapistList.innerHTML = allTherapists.join('');
}

window.addEventListener('load', () => {
  displayTherapists();
})