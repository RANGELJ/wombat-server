import { valueIsNumber, valueIsString } from 'ts-validators'

const getNumberFromUnknown = (value: unknown) => {
    if (valueIsNumber(value)) {
        return value
    }
    if (valueIsString(value)) {
        if (/^[1-9][0-9]*(\.[0-9]+)?$/.test(value)) {
            return Number(value)
        }
    }
    throw new Error(`Invalid value to convert to number: ${value}`)
}

export default getNumberFromUnknown
