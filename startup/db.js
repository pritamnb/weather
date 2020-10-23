const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
const localdb = 'mongodb://localhost/task';
module.exports = function () {
  mongoose
    .connect('mongodb://localhost/weather', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    .then(() => console.log('Connected to MongoDB'));
};
