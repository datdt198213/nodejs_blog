class NewsComtroller {
    
    // GET /news
    index(req, res) {
        res.render('news');
    }

    // GET /news/:slugs
    show(req, res) {
        res.send('NEW DETAIL!!');
    }

}

module.exports = new NewsComtroller;
