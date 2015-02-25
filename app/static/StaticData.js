var _data = {};

var Data = {
 set : function (data, type) {
  _data[type] = data;
 },
 get : function (type) {
  return _data[type];
 },
 asyncGet : function (type, cb) {
  setTimeout(function () {
   cb(Data.get(type));
  }, 0);
 }
}


Data.set([
{
 title: 'Kan du lide film?',
 options: [
 {
  text: 'Ja tak',
  image: 'http://lorempixel.com/400/200/sports',
  searchCode: 'term.type=film'
 },
 {
  text: 'Nej Tak',
  image: 'http://lorempixel.com/400/200/nature',
  searchCode: '(not (term.type=film))'
 }]
},
{
 title: 'Er du til gys?',
 options: [
 {
  text: 'Uh ja gør mig bange',
  image: 'http://lorempixel.com/400/200/animals',
  searchCode: 'term.subject=gys'
 },
 {
  text: 'Nej jeg er lidt af en grisling',
  image: 'http://lorempixel.com/400/200/technics',
  searchCode: 'not (term.subject=gys)'
 }]
}
], 'questions');



module.exports = Data;
