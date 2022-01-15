/* GET Index View */
const index = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Home'; // process.env.npm_package_description can only be accessed if you use 'npm start' *nodemon will not work
    res.render('index', { title: pageTitle });
};

module.exports = {
    index
}