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
 image: 'http://lorempixel.com/400/400/sports',
 options: [
 {
  searchCode: 'term.type=film'
 },
 {
  searchCode: '* not term.type=film'
 }]
},
{
 title: 'Er du til gys?',
 image: 'http://lorempixel.com/400/400/technics',
 options: [
 {
  searchCode: 'and term.subject=gys'
 },
 {
  searchCode: 'not term.subject=gys'
 }]
}
,
{
 title: 'Kan du lide komedier?',
 image: 'http://lorempixel.com/400/400',
 options: [
 {
  searchCode: 'and term.subject=komedie'
 },
 {
  searchCode: 'not term.subject=komedie'
 }]
}
,
{
 title: 'Kan du lide film med heste?',
 image: 'http://lorempixel.com/400/400/animals',
 options: [
 {
  searchCode: 'and term.subject=heste'
 },
 {
  searchCode: 'not term.subject=heste'
 }]
}
], 'questions');



module.exports = Data;
