# back-end

# Link to the product vision document -- https://docs.google.com/document/d/1-WGgTYdEOJ3ELhYCTS7R-tfXlV7vyy4_V99lpv0o5EA/edit

**Deployed backend link**
https://africanmarketplacels.herokuapp.com/

**User Routes ⬇️**
auth/register -- A POST request to register a new user. Requires a username, password, first_name, last_name
{
username: "aaron",
password: "test123",
first_name: "Aaron",
last_name: "Spurgeon"
}

auth/login -- A POST request to login. Requires a username and password
{
username: "login",
password: "test123"
}

auth/logout -- Route that logs out a user that is currently inside session store.

**Marketplace Routes ⬇️**
mp/products -- A GET request to get a list of all available products
