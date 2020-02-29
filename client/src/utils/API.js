import axios from "axios";

// const APIKEY = process.env.REACT_APP_GOOGLE_API_KEY;

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://realtymole-rental-estimate-v1.p.rapidapi.com/rentalPrice?address=21%20Jefferson%20Ave%20Jersey%20City%20NJ&compCount=5",
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "realtymole-rental-estimate-v1.p.rapidapi.com",
    "x-rapidapi-key": "1521e56929msha8bd212f0c69f5fp1dd6e5jsn32350828c5c5"
  }
}

export default {
  // testing 
  // searchApartments: (address, city, state) => axios.get(`${BASEURL},+${address}, ${city},+${state},+${APIKEY}`),
  search: function () {
    return axios(settings);
  },
  // Gets all apartments
  getApartments: function () {
    return axios.get("/api/apartments");
  },
  // Gets the apartment with the given id
  getApartment: function (id) {
    return axios.get("/api/apartments/" + id);
  },
  // Deletes the apartment with the given id
  deleteApartment: function (id) {
    return axios.delete("/api/apartments/" + id);
  },
  // Saves a apartment to the database
  saveApartment: function (apartmentData) {
    return axios.post("/api/apartments", apartmentData);
  },

  setSavedApartments: function (id) {
   return axios.put("/api/apartments/" + id);
    
},
favedApartments: function() {
  return axios.get("/api/apartments/test")
},

  searchApartments(search) {
    return axios.get("/api/apartments/google/" + search)
  },

  // firebaseKey(apiKey) {
  //   console.log(axios.get("/api/apartments/firebase"));

  //   return axios.get("/api/apartments/firebase/", apiKey);
  // }

};

// 234 52nd St West New York, New Jersey 
