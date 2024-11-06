const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/relationDemo");
}

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const Order = mongoose.model("Order", orderSchema);

const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

customerSchema.post("findOneAndDelete", async (customer) => {
  if (customer.orders.length) {
    let res = await Order.deleteMany({ _id: { $in: customer.orders } });
    console.log(res);
  }
});

const Customer = mongoose.model("Customer", customerSchema);

// const addCustomer = async () => {
//   let cus1 = new Customer({
//     name: "Rahul Kumar",
//     orders: [],
//   });

//   let order1 = await Order.findOne({ item: "Chips" });
//   let order2 = await Order.findOne({ item: "Chocolate" });

//   cus1.orders.push(order1);
//   cus1.orders.push(order2);

//   let result = await cus1.save();
//   console.log(result);
// };

const findCustomer = async () => {
  let res = await Customer.find({}).populate("orders");
  console.log(res);
};

const addOrders = async () => {
  let res = await Order.insertMany([
    { item: "Samosa", price: 12 },
    { item: "Chips", price: 10 },
    { item: "Chocolate", price: 40 },
  ]);
  console.log(res[0]);
};

const deleteCustomer = async () => {
  let data = await Customer.findByIdAndDelete("66955084743f5a5da6d132e7");
  console.log(data);
};

// addOrders();

// addCustomer();
// findCustomer();
// deleteCustomer();
