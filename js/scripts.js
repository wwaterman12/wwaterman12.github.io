let cleanAppDetails = document.getElementById('clean-app-details');
let emojiDetails = document.getElementById('emoji-details');
let notesDetails = document.getElementById('notes-map-details');
let details = [emojiDetails, cleanAppDetails, notesDetails];
let icons = document.getElementsByClassName('icon');

console.log(icons);
for (let i=0; i<icons.length; i++) {
  icons[i].addEventListener("mouseover", ()=> {
    details[i].style.display = "block";
  });
  icons[i].addEventListener("mouseleave", ()=> {
    details[i].style.display = "none";
  });
};
