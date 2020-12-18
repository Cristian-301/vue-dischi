// BONUS: Creare una select con tutti i generi dei dischi. In base a
// cosa scegliamo nella select, vedremo i corrispondenti cd.

// "poster": "https://www.onstageweb.com/wp-content/uploads/2018/09/bon-jovi-new-jersey.jpg",
// "title": "New Jersey",
// "author": "Bon Jovi",
// "genre": "Rock",
// "year": "1988"
var app = new Vue(
  {
    el: "#root",
    data: {
      albums: [],
      genre: [],
      albumGen: ""

    },
    methods: {

    },
    mounted: function() {
      let self = this;
      axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then(function(result){
        self.albums = result.data.response;
        for (var i = 0; i < self.albums.length; i++) {
          const gen = result.data.response[i].genre
          if (self.genre.includes(gen) == false) {
            self.genre.push(gen)
          }


        }
      })

    }
  }
);
