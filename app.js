const hicri= require("./hicri-converter");
const miladi= require("./miladi-converter");

const miladiDate = new Date(2021,03,10);
const hicriDate = new Date(1443,10,04);

console.log(hicri.hicriConverter(miladiDate))

console.log(miladi.miladiConverter(hicriDate))