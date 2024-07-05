const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb://localhost:27017/amazon');
}

main()
.then(() => {
    console.log('connection established')
})
.catch((err) => {
    console.log(err)
});

// Schema Validations
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String
    },
    price: {
        type: Number,
        min: [1, 'Price is too low'] // if this constraint is not followed the msg is shown
    }, 
    discount: {
        type: Number,
        default: 0
    }, 
    category: {
        type: String,
        enum: ['fiction', 'non-fiction'] // values that category should have
    },
    genre: [String]
});

const Book = new mongoose.model('Book', bookSchema);

// let book1 = new Book({
//     title: 'Mathematics XII', // if we miss title here it will show Book validation failed
//     author: 'RD Sharma',
//     price: 1200
// });
// book1.save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

// SchemaType Options
// It includes default used for discount in above example

Book.findByIdAndUpdate( '6682bc8d9f0e5fe62f54f115', {
    price: '0'
    }, {runValidators: true} )
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err.errors.price.properties.message);
})
