console.log(isLeapYear(2020));
console.log(threeRuls());
console.log(seconds("14:32:43"));
console.log(divisors(43131));
function isLeapYear(year){
    let isLeapYear;
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        isLeapYear = true;
    } else {
        isLeapYear = false;
    }
    let resultText = isLeapYear ? `${year} is a leap year!` : `${year} is not a leap year.`;
    return resultText;
    }

function threeRuls() {
        let result = '';
    let count = 0;
    let skipCount = 1;

    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0) {
            count++;
            if (count === skipCount) {
                skipCount++;
                continue;
            }
        }
        result += i + (i < 100 ? ', ' : '');
    }
    return result;
}

function seconds(time) {
    let splitedTime = time.split(":");
    let currentHours = parseInt(splitedTime.at(0));
    let currentMins = parseInt(splitedTime.at(1));
    let currentSecs = parseInt(splitedTime.at(2));
    let passedtime = currentHours*3600+currentMins*60+currentSecs;
    let totalSeconds = 24*3600;
    let remainingSeconds = totalSeconds - passedtime;
    return remainingSeconds;
    }
function divisors(number) {
        let result=[];
        for (let i =1;i<=number;i++){
            if (number%i==0){
                result.push(i);
            }
        }
        return result;
}