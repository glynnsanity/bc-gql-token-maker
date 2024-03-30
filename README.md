### BigCommerce GraphQL Token Maker

This is a super simple node script to create a GraphQL Storefront Token. Sometimes Postman is annoying for me ;) 

You just need to clone the repo, adjust the .env.example file with your variables, and then remove ".example" from the file name. There is a fallback Unix timestamp value that will be created for the EXPIRATION_DATE variable so you aren't required to enter a value for that unless you want to specify your own timestamp. Then run `npm install` and `node index.js` within the local directory.

It will console log the JWT token, and for your convenience automatically add it to your clipboard! I'm thinking I might add a quick CLI soon so you can enter all the env variables through in Terminal also. That would probably make this a bit more adaptable and reusable.

Note that this only [creates a Storefront Token](https://developer.bigcommerce.com/docs/rest-authentication/tokens#create-a-token), not a Customer Impersonation Token. You can use the token generated here to creat the Customer Impersonation Token in Postman. I'll try to add this step to this project later on as well so you can avoid Postman altogether.
