const jwt = require('jsonwebtoken');
exports.get = (req, res) => {
    if (req.cookie) {
        jwt.verify(req.cookie, process.env.SECRET, (err, payload) => {
            if (err) return res.redirect('/signin');
            res.redirect('/profile')

        })
    } else {
        res.redirect('/signin')
    }
}
