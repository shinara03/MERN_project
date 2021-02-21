// module.exports = {
//   mongoURI: 'mongodb+srv://shinara03:AI9ChicU5tdV4LhI@cluster0.2eehl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
//             //Make sure this is your own unique string
//   secretOrKey: 'secret'
// }
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./keys_prod');
} else {
  module.exports = require('./keys_dev');
}