const config = (app, express, path) => {
    app.use(express.static(path.join(__dirname, '..', '..', 'public')));
};

module.exports = config;