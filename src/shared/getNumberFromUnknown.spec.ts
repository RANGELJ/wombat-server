import getNumberFromUnknown from './getNumberFromUnknown'

it('Should return a number when a number is supplied', () => {
    const result = getNumberFromUnknown(20)
    expect(result).toStrictEqual(20)
})

it('Should throw an error when the value is not a number', () => {
    expect(() => {
        getNumberFromUnknown('hello')
    }).toThrowError()
})

it('Should transform string to numbers when possible', () => {
    const result = getNumberFromUnknown('10')
    expect(result).toStrictEqual(10)
})

it('Shoudl transform decimal places as well', () => {
    const result = getNumberFromUnknown('90.3')
    expect(result).toStrictEqual(90.3)
})
