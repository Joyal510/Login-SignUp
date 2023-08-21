const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://joyalcorda510:vDfnmC8sucEiLqU6@cluster0.ntjulpm.mongodb.net/LoginSignpUp')
.then(()=> {
    console.log("mongo database connected");
}).catch(()=> {
    console.log("failed to connect!");
})


const LogInSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password : {
            type : String,
            required : true
        }
    }
)

const collection = mongoose.model("collection", LogInSchema)

module.exports = collection;