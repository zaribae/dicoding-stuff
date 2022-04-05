const { addBookHandler, getAllBooksHandler, getBooksByIdHandler, editBooksByIdHandler, deleteBooksByIdHandler } = require('./handler')

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBooksByIdHandler
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editBooksByIdHandler
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteBooksByIdHandler
  }
]

module.exports = routes
