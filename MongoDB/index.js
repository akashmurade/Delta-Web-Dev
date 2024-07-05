const mongoose = require('mongoose');

main()
.then(() => {
    console.log('connection successfull');
})
.catch((err) => {
    console.log(err);
})

// this function will connect to mongodb once executed
async function main() {
    await mongoose.connect('mongodb://localhost:27017/test'); 
}

// Defines Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

// Model is a class with which we construct documents
const User = mongoose.model("User", userSchema);

// Creating objects that is documents
// const user2 = new User({name: 'Eve', email: 'eve@yahoo.com', age: 48});
// user2.save()
// .then(res => (console.log(res)))
// .catch(err => (console.log(err)));

// for insert
// User.insertMany({
//     name: 'Peter',
//     email: 'peter@gmail.com',
//     age: 44
// });

// for find
// This returns a Query Object which is thennable
// User.find({age: {$gt: 42}})
// .then(res => (console.log(res)));

// User.updateOne({name: 'Peter'}, {age: 65}) // updateMany could be used to update many at once
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

// User.findOneAndUpdate({name: 'Peter'}, {age: 65}, {new: true}) // when no options(i.e the third argument) are provided it first finds and prints and then updates
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

// User.findByIdAndUpdate('66817c19b3ea93e870ce09c7', {age: 70}, {new: true})
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

// User.deleteOne({name: 'Peter'})
// .then((res) => {.
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

// findOneAndDelete and findByIdAndDelete exist