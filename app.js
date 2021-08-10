class Media {
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title(){
      return this._title;
    }
  
    get isCheckedOut(){
      return this._isCheckedOut;
    }
  
    get ratings(){
      return this._ratings;
    }
  
    set isCheckedOut(param){
      this._isCheckedOut = param;
    }
  
    toggleCheckOutStatus(){
      this._isCheckedOut = !this._isCheckedOut;
    }
  
    getAverageRating(){
      let sumRatings = this.ratings.reduce((accumulator,currentValue)=> accumulator + currentValue, 0)
      return sumRatings / this.ratings.length;
    }
  
    addRating(rate){
      this.ratings.push(rate);
    }
  }
  
  class Book extends Media {
     constructor(author,title,pages){
       super(title);
       this._author = author;
       this._pages = pages;
     }
  
     get author(){
       return this._author;
     }
  
     get pages(){
       return this._pages;
     }
  }
  
  class Movie extends Media {
    constructor(director,title,runTime){
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  }
  
  class CD extends Media {
    constructor(artist,title){
      super(title);
      this._artist = artist;
      this._songs = [];
    }
  
    get songs(){
      return this._songs;
    }
  
    addSong(song){
      this.songs.push(song);
    }
  
    shuffleSongs(){
      return this.songs.sort((a, b) => 0.5 - Math.random());
    }
  }
  
  //New book instance
  const historyOfEverything = new Book ('Bill Bryson', 'A Short History of Nearly Everything', 544);
  historyOfEverything.toggleCheckOutStatus();
  // console.log("history checkedOutStatus: " + historyOfEverything.isCheckedOut);
  
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  
  // console.log("history average rating: " + historyOfEverything.getAverageRating());
  
  //New movie instance
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  speed.toggleCheckOutStatus();
  // console.log("speed checkedOutStatus: " + speed.isCheckedOut);
  
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  
  // console.log("speed average rating: "+ speed.getAverageRating());
  
  //New CD instance
  const compactDisk = new CD('Cole', 'Forest Hills Drive');
  
  compactDisk.addSong('Apparently');
  compactDisk.addSong('Hello');
  compactDisk.addSong('Love yourz');
  console.log(compactDisk.shuffleSongs());
  