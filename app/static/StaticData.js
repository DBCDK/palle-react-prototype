var _data = {};

var Data = {
 set : function (data, type) {
  _data[type] = data;
 },
 get : function (type) {
  return _data[type];
 },
 shuffled : function (type) {
  return shuffle(_data[type]);
 },
 asyncGet : function (type, cb) {
  setTimeout(function () {
   cb(Data.get(type));
  }, 0);
 }
}

function shuffle(array) {
 var counter = array.length, temp, index;

 // While there are elements in the array
 while (counter > 0) {
  // Pick a random index
  index = Math.floor(Math.random() * counter);

  // Decrease counter by 1
  counter--;

  // And swap the last element with it
  temp = array[counter];
  array[counter] = array[index];
  array[index] = temp;
 }

 return array;
}

Data.set([
/*{
 title: 'Kan du lide gamle bøger',
 image: 'http://lorempixel.com/400/400/sports',
 options: [
 {
  searchCode: '*'
 },
 {
  searchCode: '*'
 }]
},*/
{
 title: 'Kan du lide tegneserier?',
 image: 'http://lorempixel.com/400/400/technics',
 options: [
 {
  searchCode: 'or term.type=tegneserie'
 },
 {
  searchCode: 'not term.type=tegneserie'
 }]
}
,
{
 title: 'Kan du lide vikinger?',
 image: 'http://lorempixel.com/400/400/animals',
 options: [
 {
  searchCode: 'or term.subject=vikinger'
 },
 {
  searchCode: 'not term.subject=vikinger'
 }]
},

{
 title: 'Kan du lide varulve?',
 image: 'http://lorempixel.com/400/400/animals',
 options: [
 {
  searchCode: 'or term.subject=varulve'
 },
 {
  searchCode: 'not term.subject=varulve'
 }]
},
{
 title: 'Elsker du serier?',
 image: 'http://lorempixel.com/400/400/animals',
 options: [
 {
  searchCode: 'dkcclphrase.lse=*'
 },
 {
  searchCode: 'not dkcclphrase.lse=*'
 }]
},
 {
  title: 'Jeg er en grinebider',
  image: 'http://lorempixel.com/400/400/animals',
  options: [
   {
    searchCode: 'or term.subject=humor'
   },
   {
    searchCode: 'not term.subject=humor'
   }]
 },
 {
  title: 'Jeg er altid alvorlig',
  image: 'http://lorempixel.com/400/400/animals',
  options: [
   {
    searchCode: 'or term.subject=(fattigdom or mobning or død or forurening)'
   },
   {
    searchCode: 'not term.subject=(fattigdom or mobning or død or forurening)'
   }]
 },
 {
  title: 'Jeg er computernørd',
  image: 'http://lorempixel.com/400/400/animals',
  options: [
   {
    searchCode: 'or term.subject=(computere or computernørder)'
   },
   {
    searchCode: 'not term.subject=(computere or computernørder)'
   }]
 },
 {
  title: 'Jeg er sportsidiot',
  image: 'http://lorempixel.com/400/400/animals',
  options: [
   {
    searchCode: 'or term.subject=(sport or idræt)'
   },
   {
    searchCode: 'not term.subject=(sport or idræt)'
   }]
 }

,
 {
  title: 'På sporet efter mysterier',
  image: 'http://lorempixel.com/400/400/animals',
  options: [
   {
    searchCode: 'or term.subject=krimi'
   },
   {
    searchCode: 'not term.subject=krimi'
   }]
 }

,
 {
  title: 'Jeg vil have tidsrejser og marsmænd',
  image: 'http://lorempixel.com/400/400/animals',
  options: [
   {
    searchCode: 'or term.subject="science fiction"'
   },
   {
    searchCode: 'not term.subject="science fiction"'
   }]
 }

,
 {
  title: 'Jeg elsker dyr',
  image: 'http://lorempixel.com/400/400/animals',
  options: [
   {
    searchCode: 'or term.subject=dur'
   },
   {
    searchCode: 'not term.subject=dyr'
   }]
 }

,
 {
  title: 'Jeg er til troldmænd og tryllestave',
  image: 'http://lorempixel.com/400/400/animals',
  options: [
   {
    searchCode: 'or term.subject=fantasy'
   },
   {
    searchCode: 'not term.subject=fantasy'
   }]
 }
,
 {
  title: 'Jeg vil have en god historie',
  image: 'http://lorempixel.com/400/400/animals',
  options: [
   {
    searchCode: 'or term.literaryForm=fiction'
   },
   {
    searchCode: 'not term.literaryForm=fiction'
   }]
 }
,
 {
  title: 'Jeg vil læse noget om virkeligheden',
  image: 'http://lorempixel.com/400/400/animals',
  options: [
   {
    searchCode: 'or term.literaryForm=nonfiction'
   },
   {
    searchCode: 'not term.literaryForm=nonfiction'
   }]
 }

], 'questions');



module.exports = Data;
