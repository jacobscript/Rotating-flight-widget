const tableBody = document.getElementById('table-body')

let flights = [
    {
        time: '08:11',
        destination: 'ATLANTA',
        flight: 'DL 793',
        gate: 'A 02',
        remarks: 'ON TIME',
    },
    {
        time: '08:30',
        destination: 'AUSTIN',
        flight: 'AA 277',
        gate: 'C 08',
        remarks: 'CANCALLED',
    },
    {
        time: '08:55',
        destination: 'ORLANDO',
        flight: 'AZ 323',
        gate: 'B 19',
        remarks: 'CANCALLED',
    },
    {
        time: '09:05',
        destination: 'CINCINNATI',
        flight: 'KF 361',
        gate: 'B 04',
        remarks: 'CANCALLED',
    },
    {
        time: '09:20',
        destination: 'LAS VEGAS',
        flight: 'UX 339',
        gate: 'D 05',
        remarks: 'DELAYED',
    },
]

const destinations = [
    'BOSTON',
    'DALLAS',
    'SEATTLE',
    'MIAMI',
    'LOS ANGELES',
    'TAMPA',
    'SAN DIEGO',
    'CLEVELAND',
    'PHOENIX',
    'ANCHORAGE',
    'DETROIT',
    'PORTLAND',
    'CHICAGO',
    'PITTSBURGH',
    'SAN FRANCISCO',
    'JACKSONVILLE',
    'HOUSTON',
    'PHILADELPHIA',
    'SAN ANTONIO',
    'SAN JOSE',
    'DENVER',
    'WASHINGTON D.C.',
    'SALT LAKE CITY',
]
const remarks = ['ON TIME', 'DELAYED', 'CANCELLED']

let hour = 10

function populateTable() {
    for (const flight of flights) {
        const tableRow = document.createElement('tr')

        for (const flightDetail in flight) {
            const tableCell = document.createElement('td')
            const word = Array.from(flight[flightDetail])

            for (const [index, letter] of word.entries()) {
                const letterEllement = document.createElement('div')

                setTimeout(() => {
                    letterEllement.classList.add('flip')
                    letterEllement.textContent = letter
                    tableCell.append(letterEllement)
                }, 100 * index)
            }

            tableRow.appendChild(tableCell)
        }

        tableBody.append(tableRow)
    }
}

populateTable()

function generateRandomLetter() {
    const alphabet = 'ZXCVBNMASDFGHJKLQWERTYUIOP'
    return alphabet.charAt(Math.floor(Math.random() * alphabet.length))
}

function generateRandomNumber(maxNumber) {
    const numbers = '0123456789'
    if (maxNumber) {
        const newNumbers = numbers.slice(0, maxNumber + 1)
        return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length))
    }
    return numbers.charAt(Math.floor(Math.random() * numbers.length))
}

function generateTime() {
    let displayHour = hour
    if (hour <= 24) {
        if (hour < 10) {
            displayHour = '0' + hour
        }
        hour++
    }
    if (hour > 24) {
        hour = 0
        displayHour = hour
        hour++
    }

    return displayHour + ':' + generateRandomNumber(5) + generateRandomNumber()
}

// function generateTime() {
//     let displayHour = hour
//     console.log('Initial: ', displayHour, hour)
//     if (hour < 24) {
//         hour++
//         console.log('if hour < 24: ', displayHour, hour)
//     }
//     if (hour >= 24) {
//         hour = 0
//         displayHour = hour
//         console.log('If hour > 24', displayHour, hour)
//     }
//     if (hour < 10) {
//         displayHour = '0' + hour
//         console.log('If hour < 10', displayHour, hour)
//     }

//     return displayHour + ':' + generateRandomNumber(5) + generateRandomNumber()
// }

function shuffleUp() {
    flights.shift()
    flights.push({
        time: generateTime(),
        destination:
            destinations[Math.floor(Math.random() * destinations.length)],
        flight:
            generateRandomLetter() +
            generateRandomLetter() +
            ' ' +
            generateRandomNumber() +
            generateRandomNumber(),
        gate:
            generateRandomLetter() +
            ' ' +
            generateRandomNumber() +
            generateRandomNumber(),
        remarks: remarks[Math.floor(Math.random() * remarks.length)],
    })
    tableBody.textContent = ''
    populateTable()
}

setInterval(shuffleUp, 5000)
