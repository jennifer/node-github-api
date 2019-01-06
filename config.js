'use strict';

exports.PORT = process.env.PORT || 8080;

const
    client_id = process.env.github_client_id,
    client_secret = process.env.github_client_secret,
    user_url = 'https://api.github.com/repos'
;