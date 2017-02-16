'use strict';

let name = 'fizbonemanager';
let domain = process.env.DOMAIN || `http://localhost:${process.env.PORT}`

module.exports = {
	facebook: {
		clientID: '',
		clientSecret: '',
		callbackURL: `${domain}:${process.env.PORT}/api/auth/facebook/callback`
	},
	mongo: {
		uri: `mongodb://localhost/${name}`,
		options: {
            db: {
                safe: true
            }
        },
		jwt: 'abc'
	}
}
