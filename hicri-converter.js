/**
 * converter
 * @param {*} pDate 
 */
 function convertHicri(pDate) {
    var date = new Date(pDate);
    var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return date.toLocaleDateString('en' + '-u-ca-islamic', options);
}

module.exports = {
    hicriConverter: convertHicri
}