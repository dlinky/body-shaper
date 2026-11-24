async function loadJSON() {
    const response = await fetch('./../sample.json');
    const data = await response.json();
    
    const bodyRecord = data["body_record"];
    const exerciseRecord = data["exercise_record"];

    console.log(bodyRecord);
    console.log(exerciseRecord);
}

loadJSON();