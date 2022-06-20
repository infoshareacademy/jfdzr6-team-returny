const x = 'Tue Feb 21 2022 00:00:00 GMT+0200 (czas środkowoeuropejski letni)'
const y = 'Mon Jun 13 2022 00:00:00 GMT+0200 (czas środkowoeuropejski letni)'

let monthLength

function DurationFunction() {
    const day = x.split(' ')[2]
    const month = x.split(' ')[1]
    const year = x.split(' ')[3]
    console.log(month)
    console.log(year)

    const monthMapping = {
        'Jan': 01,
        'Feb': 02,
        'Mar': 03,
        'Apr': 04,
        'May': 05,
        'Jun': 06,
        'Jul': 07,
        'Aug': 08,
        'Sep': 09,
        'Oct': 10,
        'Nov': 11,
        'Dec': 12
    };

    const objectPropertyNames = Object.getOwnPropertyNames(monthMapping)
    const objectValues = Object.values(monthMapping)
    console.log(objectPropertyNames)
    console.log(objectValues)

    let monthNumber

    for (let i = 0; i < monthMapping.length; i++) {
        if (objectPropertyNames[i] === month) {
        monthNumber = objectValues[i];
        }
        console.log(monthNumber)
    }   

    // if (month === 'Jan' ||
    //     month === 'Mar' ||
    //     month === 'May' ||
    //     month === 'Jul' ||
    //     month === 'Aug' ||
    //     month === 'Oct' || 
    //     month === 'Dec') 
    //     {
    //     monthLength = 31
    // } else if (month === 'Apr' || 
    //     month === 'Jun' || 
    //     month === 'Sep' || 
    //     month === 'Nov') 
    //     {
    //     monthLength = 30
    // } else if (month === 'Feb' && year % 4 === 0) {
    //     monthLength = 29
    // } else if (month === 'Feb') {
    //     monthLength = 28
    // }

    // console.log(monthLength)
}
DurationFunction()


