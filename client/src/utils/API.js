import axios from "axios";

export default {
  // Gets all books
  getJams: function () {
    return axios.get("/api/jams");
  },
  // Gets the book with the given id
  getJam: function (id) {
    return axios.get("/api/jams/" + id);
  },
  // Deletes the book with the given id
  deleteJam: function (id) {
    return axios.delete("/api/jams/" + id);
  },

  // Saves a book to the database
  saveJam: function (jamData) {
    return axios.post("/api/jams", jamData);
  },

  // // Saves a book to the database
  // saveBook: function (bookData) {
  //   console.log("API", bookData);
  //   const params = new URLSearchParams();
  //   params.append("title", bookData.title);
  //   params.append("author", bookData.author);
  //   params.append("synopsis", bookData.synopsis);

  //   console.log("params", params);
  //   return axios.post("/api/createBook/" + params);
  //   // return axios.post("/api/books", bookData);
  // },
};
