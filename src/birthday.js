
export let inputAgeDate = new Date ("June 27, 1919");
export let currentDate = new Date();

export function mercuryAgeCalc(age, currentDate) {
    return Math.floor((currentDate.getFullYear() - age.getFullYear())/0.24);
}

export function venusAgeCalc(age, currentDate) {  
    return Math.floor((currentDate.getFullYear() - age.getFullYear())/0.62);
}
