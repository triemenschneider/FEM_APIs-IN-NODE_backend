<img src="https://btholt.github.io/intro-to-web-dev-v2/static/FrontendMastersLogo-f72cae0c73fecbb6beecea606d8fabd3-a3d33.png" style="max-width: 350px; display: block; margin: 20px auto;" />

This repository contains the outcome of my applied learning of [API Design in Node.js (using Express & Mongo)](https://frontendmasters.com/courses/api-design-nodejs/) on [Frontendmasters.com](https://frontendmasters.com).

It allows to peform CRUD operations under those routes.

```json
{
  "GET /members": {
    "desc": "returns all members",
    "response": "200 application/json",
    "data": [{}, {}, {}]
  },

  "GET /members/:id": {
    "desc": "returns one member respresented by its id",
    "response": "200 application/json",
    "data": {}
  },

  "POST /members": {
    "desc": "create and returns a new member uisng the posted object as the member",
    "response": "201 application/json",
    "data": {}
  },

  "PUT /members/:id": {
    "desc": "updates and returns the matching member with the posted update object",
    "response": "200 application/json",
    "data": {}
  },

  "DELETE /members/:id": {
    "desc": "deletes and returns the matching member",
    "response": "200 application/json",
    "data": {}
  }
}
```

The data-structure for a member looks as follows.

```js
{
  name: 'Walter Müller',
  date: '2018-05-01',
  id: '1',
  age: 57,
  gender: 'male',
  hobbies: ['reading', 'drinking beer']
}
```
