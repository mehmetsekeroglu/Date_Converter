
/**
 * converter
 * @param {*} pDate 
 */
 function convertMiladi(pDate) {
     
    let hijriYear = pDate.getFullYear();
    let hijriMonth = pDate.getMonth();
    let hijriDay = pDate.getDate();
    let gregorianYear = Math.floor((hijriYear * 0.97) + 622) 
    let gregorianDate= new Date(gregorianYear,hijriMonth,hijriDay).toLocaleDateString()
    return gregorianDate
}

module.exports = {
    miladiConverter: convertMiladi
}