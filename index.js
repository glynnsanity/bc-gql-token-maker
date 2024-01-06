import fetch from 'node-fetch';
import clipboardy from 'clipboardy';
import 'dotenv/config';

// URL for the POST request
const url = 'https://api.bigcommerce.com/stores/'+process.env.STORE_HASH+'/v3/storefront/api-token';
// Arbitrary default date
const unix_timestamp = Math.floor(new Date('July 19, 2035 23:15:30') / 1000);

// Data you want to send
const data = {
    "channel_id": Number(process.env.CHANNEL_ID),
    "expires_at": Number(process.env.EXPIRATION_DATE || unix_timestamp),
    "allowed_cors_origins": ["http://localhost:3000"] // add other origins here
};

// Options for the fetch request
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Auth-Token': process.env.AUTH_TOKEN
    },
    body: JSON.stringify(data),
};

// Making the fetch request
fetch(url, options)
    .then((response) => response.json()) // Assuming the response is JSON
    .then((json) => {
        console.log(json)
        clipboardy.writeSync(json.data.token)
        clipboardy.readSync()
    })
    .catch(error => console.error('Error:', error));
