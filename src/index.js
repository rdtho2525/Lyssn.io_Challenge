

const therapists = require('../src/data.json');

const centerBox = document.getElementById('centerBox');

const formatNames = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

const displayTherapists = () => {
  const allTherapists = therapists.data.map(therapist => {
    const lastName = formatNames(therapist.lname);
    const firstName = formatNames(therapist.fname);
    return `<li>${lastName}, ${firstName}</li>`
  });

  centerBox.innerHTML = allTherapists.join('');
}

window.addEventListener('load', () => {
  displayTherapists();
})