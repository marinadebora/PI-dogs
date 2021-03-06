

export default function getTemperaments(temperaments){
    if (typeof (temperaments) === 'string') {
        return temperaments
    }
    if (Array.isArray(temperaments)) {
        let temps = temperaments.map(e => e.name)
        return temps.join(', ')
    }
}