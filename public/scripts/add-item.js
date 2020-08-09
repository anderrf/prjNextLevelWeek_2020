document.querySelector("#add-time")
    .addEventListener('click', cloneSchedule);

//document.querySelector("#remove-time").addEventListener('click', removeSchedule);

document.querySelector("#add-class")
    .addEventListener('click', cloneClass);

function cloneSchedule(){
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);
    const fields = newFieldContainer.querySelectorAll('input');
    fields.forEach(function(field){
        field.value = '';
    });
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}

function cloneClass(){
    const newFieldContainer = document.querySelector('.about-class').cloneNode(true);
    const fields = newFieldContainer.querySelectorAll('input');
    fields.forEach(function(field){
        field.value = '';
    });
    document.querySelector('#about-classes').appendChild(newFieldContainer);
}

/*function removeSchedule(){
    const scheduleItem = document.querySelector('.schedule-item');
    if(scheduleItem.length > 1){

    }
}*/