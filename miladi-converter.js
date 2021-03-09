const hicri= require("./hicri-converter");





/**
 * converter
 * @param {*} pDate 
 */
 function convertMiladi(pDate) {
     
    let date = new Date(hicri.hicriConverter(pDate))
     let options = {
       year: 'numeric',
        month: 'numeric',
         day: 'numeric'
     };
 console.log(date)
    return date.toLocaleDateString('en', options);
}

module.exports = {
    miladiConverter: convertMiladi
}