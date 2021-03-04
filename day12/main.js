const time1 = "13:58";
const time2 = "25:51";
const time3 = "02:76";

/**
 * day 12 
 * Valid time
 */
const myAnswer = (time) => {

    const isHours = (hours) => {
        return 0 <= hours && hours <= 23;
    }
    const isMinutes = (minutes) => {
        return 0 <= minutes && minutes <= 60;
    }

    const [hours, minutes] = time.split(':');

    if (isHours(parseInt(hours)) && isMinutes(minutes)) {
        console.log(`○：${time} は正しい時間表記です。`);
    } else {
        console.log(`x：${time} の表記に誤りがあります。`);
    }
}

myAnswer(time1);
myAnswer(time2);
myAnswer(time3);