const mongoose = require("mongoose");
const dotenv = require("dotenv");
const users = require("./data/user");
const Order = require("./moldel/orderModel");
const Product = require("./moldel/productModel");
const User = require("./moldel/userModel");

const products = require("./data/products");
const dbconnection = require("./config/config");

dotenv.config();
dbconnection();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    const createUser = await User.insertMany(users);
    const adminUser = createUser[0]._id;
    const sampleData = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await Product.insertMany(sampleData);
    console.log("Data Imported!!");
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

const dataDestory = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    console.log("Data Destory");
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
}; 

if (process.argv[2] === "-d") {
  dataDestory();
} else {
  importData();
}