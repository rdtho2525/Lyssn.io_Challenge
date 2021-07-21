

const therapists = require('../src/data.json');
console.log(therapists.data)

const centerBox = document.getElementById('centerBox');

const displayTherapists = () => {
  const allTherapists = therapists.data.map(therapist => {
    return `<li>${therapist.lname}, ${therapist.fname}</li>`
  });

  centerBox.innerHTML = allTherapists.join('');
}

window.addEventListener('load', () => {
  displayTherapists();
})