const hicri= require("./hicri-converter");
const miladi= require("./miladi-converter");

const miladiDate = new Date(2021,03,09);
const hicriDate = new Date(1442,08,27);

console.log(hicri.hicriConverter(miladiDate))

console.log(miladi.miladiConverter(hicriDate))



