var _data = {};

var Data = {
  set: function(data, type) {
    _data[type] = data;
  },
  get: function(type) {
    return _data[type];
  },
  shuffled: function(type) {
    return shuffle(_data[type]);
  },
  asyncGet: function(type, cb) {
    setTimeout(function() {
      cb(Data.get(type));
    }, 0);
  }
}

function shuffle(array) {
  var counter = array.length, temp, index;

  // While there are elements in the array
  while(counter > 0) {
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
    title: 'Du er til tegneserier?',
    image: '/img/tegneserier.jpg',
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
    title: 'Du er vild med vikinger?',
    image: '/img/vikinger.jpg',
    options: [
      {
        searchCode: 'or term.subject=vikinger'
      },
      {
        searchCode: 'not term.subject=vikinger'
      }]
  },

  {
    title: 'Du kan lide varulve?',
    image: '/img/varulve.jpg',
    options: [
      {
        searchCode: 'or term.subject=varulve'
      },
      {
        searchCode: 'not term.subject=varulve'
      }]
  },
  {
    title: 'Du elsker serier?',
    image: '/img/serier.jpg',
    options: [
      {
        searchCode: 'or dkcclphrase.lse=*'
      },
      {
        searchCode: 'not dkcclphrase.lse=*'
      }]
  },
  {
    title: 'Du er en grinebider?',
    image: '/img/grinebider.jpg',
    options: [
      {
        searchCode: 'or term.subject=humor'
      },
      {
        searchCode: 'not term.subject=humor'
      }]
  },
  {
    title: 'Du er tit alvorlig?',
    image: '/img/alvorlig.jpg',
    options: [
      {
        searchCode: 'or term.subject=(fattigdom or mobning or død or forurening)'
      },
      {
        searchCode: 'not term.subject=(fattigdom or mobning or død or forurening)'
      }]
  },
  {
    title: 'Du er computernørd?',
    image: '/img/computer-nerd.jpg',
    options: [
      {
        searchCode: 'or term.subject=(computere or computernørder)'
      },
      {
        searchCode: 'not term.subject=(computere or computernørder)'
      }]
  },
  {
    title: 'Du er sportsidiot?',
    image: '/img/sport.jpg',
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
    title: 'Du elsker at opklare mord?',
    image: '/img/mysterier.jpg',
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
    title: 'Du vil have tidsrejser og marsmænd?',
    image: '/img/science-fiction.jpg',
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
    title: 'Du elsker dyr?',
    image: '/img/dyr.jpg',
    options: [
      {
        searchCode: 'or term.subject=dyr'
      },
      {
        searchCode: 'not term.subject=dyr'
      }]
  }

  ,
  {
    title: 'Er du vild med troldmænd og tryllestave?',
    image: '/img/troldmaend.jpg',
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
    title: 'Du elsker gode historier?',
    image: '/img/god-historie.jpg',
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
    title: 'Du læser helst om virkeligheden?',
    image: '/img/virkeligheden.jpg',
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
