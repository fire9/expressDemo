module.exports = function(app) {
    app.get('/', function(req, res) {
        res.send("This is express page");
    });
    app.get('/top', function(req, res) {
        res.send("This is top page");
    });
    app.get('/results', function(req, res) {
        res.send("This is reuslts page");
    });
    app.get('/api/results', function(req, res) {
        res.json({message: 'This is api page'});
    });
}
