
export let inputAgeDate = new Date ("June 27, 1919");
export let currentDate = new Date();
export let expectedDeathDate = new Date("June 27, 1950");
expectedDeathDate.setFullYear(inputAgeDate.getFullYear() + 88);


export let expectedLifeDifference = ageDifferenceCalc(inputAgeDate, currentDate, expectedDeathDate);



export function mercuryAgeCalc(age, currentDate) {
    return Math.floor((currentDate.getFullYear() - age.getFullYear())/0.24);
}

export function venusAgeCalc(age, currentDate) {
    return Math.floor((currentDate.getFullYear() - age.getFullYear())/0.62);
}

export function marsAgeCalc(age, currentDate) {
    return Math.floor((currentDate.getFullYear() - age.getFullYear())/1.88);
}

export function jupiterAgeCalc(age, currentDate) {
    return Math.floor((currentDate.getFullYear() - age.getFullYear())/11.86);
}

export function ageDifferenceCalc(age, current, expiration){
    let ageYear = age.getFullYear();

    let currentYear = current.getFullYear();

    let expYear = expiration.getFullYear();


    return (expYear - ageYear) - (currentYear - ageYear);
}
