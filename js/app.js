const hamburgerBtn = document.querySelector('.hamburger');

hamburgerBtn.addEventListener('click', () => {
  const isExpanded = hamburgerBtn.classList.toggle('active');
  hamburgerBtn.setAttribute('aria-expanded', String(isExpanded));
});


async function loadJSON() {
    const response = await fetch('./../sample.json');
    const data = await response.json();
    
    const bodyRecord = data["body_record"];
    const exerciseRecord = data["exercise_record"];

    console.log(bodyRecord);
    console.log(exerciseRecord);
}

loadJSON();