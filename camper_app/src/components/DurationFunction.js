const x = 'Tue Jun 21 2022 00:00:00 GMT+0200 (czas środkowoeuropejski letni)'
const y = 'Mon Jun 13 2022 00:00:00 GMT+0200 (czas środkowoeuropejski letni)'

let monthLength

function DurationFunction() {
    const month = x.split(' ')[1]
    const year = x.split(' ')[3]
    console.log(month)
    console.log(year)
    if (month === 'Jan' || 'Mar' || 'May' || 'Jul' || 'Aug' || 'Oct' || 'Dec') {
        monthLength = 31
    } else if (month === 'Apr' || 'Jun' || 'Sep' || 'Nov') {
        monthLength = 30
    } else if (month === 'Feb' && year % 4 === 0) {
        monthLength = 29
    } else if (month === 'Feb') {
        monthLength = 28
    }
    console.log(monthLength)
}
DurationFunction(x,y)


