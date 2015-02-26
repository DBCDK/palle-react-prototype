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
 image: 'http://lorempixel.com/400/200/technics',
 options: [
 {
  searchCode: 'and term.subject=gys'
 },
 {
  searchCode: 'not term.subject=gys'
 }]
}
], 'questions');



module.exports = Data;
