const { User } = require('../models');

const userData = [
    {
        username: "Melissa-Mutoni",
        //first_name: "ayomide",
       // last_name: "awonaya",
        email: "Anniecarole@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "evrad_ndanga",
        //first_name: "evrad",
        //last_name: "ndanga",
        email: "evrad_ndanga@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "Alain_Claude",
        //first_name: "issac",
        //last_name: "akanbi",
        email: "Alain@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "Claudia_kaneza",
        //first_name: "dipti",
       // last_name: "razdan",
        email: "kanezaclaudia@gmail.com",
        password: "p@ssword4"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;