var app = new Vue(
  {
    el: "#root",
    data: {
      albums: [],

    },
    methods: {

    },
    mounted: function() {
      let self = this;
      axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then(function(result){
        self.albums = result.data.response;

      })
    }
  }
);
