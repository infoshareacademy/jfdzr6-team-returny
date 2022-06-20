// Dane do podpięcia z bazą danych:
let startDate = new Date('2021-12-30')   // do pobrania z kalendarza
let endDate = new Date('2022-1-3')   // do pobrania z kalendarza
let dailyRate = 300   // do pobrania z oferty konkretnego campera, musi byc typ: number

//funkcja licząca:
function rentalCost() {
    const difference = endDate.getTime() - startDate.getTime()
    console.log(difference)

    const rentalDuration = Math.ceil(difference / (1000 * 3600 * 24))
    console.log(rentalDuration)

    const totalCost = rentalDuration * dailyRate
    console.log(totalCost)
}

rentalCost()


