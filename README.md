# back-end

# Link to the product vision document -- https://docs.google.com/document/d/1-WGgTYdEOJ3ELhYCTS7R-tfXlV7vyy4_V99lpv0o5EA/edit

**Deployed backend link**
https://africanmarketplacels.herokuapp.com/

**User Routes ⬇️**

auth/register -- A POST request to register a new user. Requires a username, password, first_name, last_name

`{ username: "aaron", password: "test123", first_name: "Aaron", last_name: "Spurgeon" }`

auth/login -- A POST request to login. Requires a username and password

`{ username: "login", password: "test123" }`

auth/logout -- Route that logs out a user that is currently inside session store.

**Marketplace Routes ⬇️**

mp/products -- A GET request to get a list of all available products

mp/products(POST) -- A POST request to post a new product to the DB, this is a protected route so you have to be logged in to post a new product

`{ "name": "Celery", "location": "Uganda", "price": "1", "category_id": 3 }`

mp/products/:id -- A GET request to grab a specific product by id to see it's details

mp/categories -- A GET request to get a list of all available categories

mp/categories/:id -- A GET request to grab a specific category by id

mp/categories(POST) -- A POST request to create a new category for products to be placed if need. This is a protected route so the user needs to be logged in.
