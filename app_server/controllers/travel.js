/* GET Travel View */
const travel = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Travel'; // process.env.npm_package_description can only be accessed if you use 'npm start' *nodemon will not work
    res.render('travel', { title: 'Travlr Getaways' });
};

module.exports = {
    travel
};