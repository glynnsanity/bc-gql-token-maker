### BigCommerce GraphQL Token Maker

This is a super simple node script to create a GraphQL Storefront Token. Sometimes Postman is annoying for me ;) 

You just need to clone the repo, adjust the .env.example file with your variables (there is a fallback time for EXPIRATION_DATE so you don't HAVE to add that), and remove ".example" from the file name. Then run `npm install` and `node index.js` within the local directory.

It will console log the JWT token, and for your convenience automatically add it to your clipboard! I'm thinking I might add a quick CLI soon so you can enter all the env variables through in Terminal also. That would probably make this a bit more adaptable and reusable.
