The backend is currently running under `http://localhost:3000/`.

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
