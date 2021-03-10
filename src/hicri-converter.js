/**
 * converter
 * @param {*} pDate 
 */
 function convertHicri(pDate) {
    let gregorianYear = pDate.getFullYear();
    let gregorianMonth = pDate.getMonth();
    let gregorianDay = pDate.getDate();
    let hijriYear = Math.round((gregorianYear - 622) * (33 / 32));
    let hijriDate= new Date(hijriYear,gregorianMonth,gregorianDay).toLocaleDateString()
    return hijriDate
}

module.exports = {
    hicriConverter: convertHicri
}