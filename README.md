dicafein# GP3-dicafein
dicafein Documentation

# Rest API Documentation for Dicafein

# Scema Diagram
<img src="https://i.ibb.co/PZhFD6p/dicafein-diagram.png" alt="dicafein-diagram" border="0"></a>

## 1. User Collection
#### a. Get All Users
```GET:/users```
##### Header
```
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A
```
##### Response

```js
    {
        "id": 43,
        "name": "fathya",
        "email": "fathya@email.com"
    },
    {
        "id": 44,
        "name": "ghabriel",
        "email": "ghabriel@email.com"
    },
    {
        "id": 45,
        "name": "alfa",
        "email": "al@email.com"
    }
```

#### b. Get Detail Users
```GET:/users/:id```
##### Params
```
Path Variables
key: id
value: 41
```
##### Header
```
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A
```
##### Response
```js
{
    "id": 41,
    "name": "user",
    "email": "user@email.com",
    "createdAt": "2021-09-29T05:06:08.000Z",
    "updatedAt": "2021-09-29T07:01:10.000Z"
}
```

#### c. Login
```POST:/users/login```
##### Header
```
Key: token
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTYzMjk2OTU0N30.gL72_fhgqhxayQXK7lyZMQJ-xSW6yX1Ms-2LXkufMUA
```
##### Body ``raw``

```js
// admin
{
    "email" : "admin@email.com",
    "password": "admin123"
}

// member/user
{
    "email" : "user@email.com",
    "password": "user123"
}
```


##### Response 
```js
{
    "message": "Success, you've been logged in",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTYzMjk2OTU0N30.gL72_fhgqhxayQXK7lyZMQJ-xSW6yX1Ms-2LXkufMUA"
}
```


#### d. Register
```POST:/users/register```
##### Body ``raw``
```js
{
    //user
    
    "name": "user",
    "email": "user@email.com",
    "password": "user123"
}
```

##### Response
```js
{
    "message": "Register Success",
    "user": {
        "name": "user",
        "email": "user@email.com"
    }
}
```


## 2. Transaction Collection
#### a. Get Transaction
```GET:/transactions```
##### Header
```
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A
```
##### Response

```js
[
  
    {
        "id": 4,
        "user_id": 1,
        "status": "not yet",
        "payment_money": 100000,
        "createdAt": "2021-09-29T05:07:53.000Z",
        "updatedAt": "2021-09-29T05:07:53.000Z"
    },
    {
        "id": 8,
        "user_id": 51,
        "status": "done",
        "payment_money": 150000,
        "createdAt": "2021-10-01T03:11:09.000Z",
        "updatedAt": "2021-10-01T03:14:09.000Z"
    }
]
```
#### b. Create Transaction
```POST:/transactions```

##### Header
```
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A
```
##### Body ``raw``

```js
{
    "status": "not yet"
    "payment_money": "100000"
    "user_id": "1"
}
```

##### Response 

```js
{
    "message": "Transaction succesfully created",
    "transaction": {
        "id": 7,
        "user_id": "1",
        "status": "not yet",
        "payment_money": "100000",
        "updatedAt": "2021-10-01T03:03:50.788Z",
        "createdAt": "2021-10-01T03:03:50.788Z"
    }
}
```
#### c. Get Detail Transaction
```GET:/transactions/:id```
##### Params
```
Path Variables
key: id
value: 8
```
##### Header
```
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A

key: user_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ1LCJpYXQiOjE2MzI5Nzc3Njd9.BlbttGP0r0kGIJTv4qq0rz2R3LvaeDTeD8MPfNOcM78
```
##### Response

```js
{
    "id": 8,
    "user_id": 51,
    "status": "done",
    "payment_money": 100000,
    "createdAt": "2021-10-01T03:11:09.000Z",
    "updatedAt": "2021-10-01T03:11:09.000Z"
}
```

#### d. Update Transaction
```PUT:/transactions/:id```
##### Params
```
Path Variables
key: id
value: 8
```
##### Header
```
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A
```
##### Body ``raw``

```js
{
    "status": "done"
    "payment_money": "150000"
    "user_id": "51"
}
```

##### Response
```js
{
    "id": 8,
    "user_id": 51,
    "status": "done",
    "payment_money": "150000",
    "createdAt": "2021-10-01T03:11:09.000Z",
    "updatedAt": "2021-10-01T03:14:09.824Z"
}
```

#### e. Delete Transaction
```DELETE:/transactions/:id```
##### Params
```
Path Variables
key: id
value: 8
```
##### Header
```
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A
```
##### Response
```js
{
    "message": "Deleted transaction succesfully"
}
```

#### f. Update Status Transaction
```PATCH:/transactions/:id/status```
##### Params
```
Path Variables
key: id
value: 8
```
##### Header
```
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A
```
##### Body ``raw``
```js
{
    "status": "not yet"
}
```
##### Response 
```js
{
    "message": "Update status successfully",
    "transaction": {
        "id": 8,
        "user_id": 51,
        "status": "not yet",
        "payment_money": 150000,
        "createdAt": "2021-10-01T03:11:09.000Z",
        "updatedAt": "2021-10-01T03:31:26.383Z"
    }
}
```

## 3. Menu Collection
#### a. Get All Menu
```GET:/menus```
##### Header
```
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A

key: user_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ1LCJpYXQiOjE2MzI5Nzc3Njd9.BlbttGP0r0kGIJTv4qq0rz2R3LvaeDTeD8MPfNOcM78
```
##### Response
```js
[
    {
        "id": 17,
        "name": "pizza",
        "category": "food",
        "description": "lorem ipsum dolor sit amet",
        "cost": 30000,
        "image": "pizza.png",
        "createdAt": null,
        "updatedAt": null
    },
    {
        "id": 18,
        "name": "milk",
        "category": "drink",
        "description": "lorem ipsum dolor sit amet",
        "cost": 5000,
        "image": "pizza.png",
        "createdAt": null,
        "updatedAt": null
    },
    {
        "id": 21,
        "name": "mie ayam",
        "category": "food",
        "description": "lorem ipsum dolor sit amet",
        "cost": 10000,
        "image": "nasigoreng.jpg",
        "createdAt": "2021-10-01T01:45:40.000Z",
        "updatedAt": "2021-10-01T01:45:40.000Z"
    }
]
```

#### b. Create Menu
```POST:/menus```
##### Header
```
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A
```
##### Body ``raw``
```js
{
    "name": "Matcha Latte",
    "category": "food",
    "description": "a tea-based beverage combining vivid green matcha tea powder and milk",
    "cost": "20000",
    "image": "matcha.jpg"

}
```

##### Response
```js
{
    "message": "Create Menu Success!",
    "menu": {
        "id": 22,
        "name": "Matcha Latte",
        "category": "food",
        "description": "a tea-based beverage combining vivid green matcha tea powder and milk",
        "cost": "20000",
        "image": "matcha.jpg",
        "updatedAt": "2021-10-01T03:36:27.443Z",
        "createdAt": "2021-10-01T03:36:27.443Z"
    }
}
```


#### c. Get Detail Menu
```GET:/menus/:id```
##### Params
```
Path Variables
key: id
value: 22
```
##### Header
```
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A

key: user_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ1LCJpYXQiOjE2MzI5Nzc3Njd9.BlbttGP0r0kGIJTv4qq0rz2R3LvaeDTeD8MPfNOcM78
```
##### Response

```js
{
    "id": 22,
    "name": "Matcha Latte",
    "category": "food",
    "description": "a tea-based beverage combining vivid green matcha tea powder and milk",
    "cost": 20000,
    "image": "matcha.jpg",
    "createdAt": "2021-10-01T03:36:27.000Z",
    "updatedAt": "2021-10-01T03:36:27.000Z"
}
```
#### d. Delete Menu
```DELETE:/menus/:id```
##### Params
```
Path Variables
key: id
value: 21
```
##### Header
```
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A
```
##### Respoond
```js
{
    "message": "Data Deleted!"
}
```

#### e. Update Menu
```PUT:/menus/:id```
##### Params
```
Path Variables
key: id
value: 22
```
##### Header
```
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A
```
##### Body ``raw``
```js
{
    "name": "Matcha Latte",
    "category": "drink",
    "description": "a tea-based beverage combining vivid green matcha tea powder and milk",
    "cost": "20000",
    "image": "matcha.jpg"

}

```

##### Response
```js
{
    "message": "Update Menu Success!",
    "menu": {
        "id": 22,
        "name": "Matcha Latte",
        "category": "drink",
        "description": "a tea-based beverage combining vivid green matcha tea powder and milk",
        "cost": "20000",
        "image": "matcha.jpg",
        "createdAt": "2021-10-01T03:36:27.000Z",
        "updatedAt": "2021-10-01T03:49:15.050Z"
    }
}
```

## 4. Table
#### a. Get All Table
```GET:/tables```
##### Header
```
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A

key: user_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ1LCJpYXQiOjE2MzI5Nzc3Njd9.BlbttGP0r0kGIJTv4qq0rz2R3LvaeDTeD8MPfNOcM78
```
##### Response
```js
[
    {
        "id": 25,
        "chalk_board": 9,
        "status": "empty"
    },
    {
        "id": 26,
        "chalk_board": 10,
        "status": "empty"
    },
    {
        "id": 27,
        "chalk_board": 11,
        "status": "empty"
    }
]
```

#### b. Crate Table
```POST:/tables```
##### Header
```
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A
```
##### Body ``raw``
```js
{
     "chalk_board": 12,
     "status": "empty"
}
```

##### Response 
```js
{
    "id": 28,
    "chalk_board": 12,
    "status": "empty",
    "updatedAt": "2021-10-01T03:55:40.555Z",
    "createdAt": "2021-10-01T03:55:40.555Z"
}
```

#### c. Detail Table
```GET:/tables/:id```
##### Params
```
Path Variables
key: id
value: 28
```
##### Header
```
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A
```
##### Response
```js
{
    "id": 28,
    "chalk_board": 12,
    "status": "empty",
    "createdAt": "2021-10-01T03:36:27.000Z",
    "updatedAt": "2021-10-01T03:36:27.000Z"
}
```

#### d. Update Table
```PUT:/tables```
##### Params
```
Path Variables
key: id
value: 28
```
##### Header
```
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A
```
##### Body ``raw``
```js
{
     "chalk_board": 15,
     "status": "fill"
}
```

##### Response
```js
{
    "message": "Update cafe_tables Success!",
    "menu": {
        "id": 28,
        "chalk_board": 15,
        "status": "fill",
        "createdAt": "2021-10-01T03:36:27.000Z",
        "updatedAt": "2021-10-01T03:49:15.050Z"
    }
}
```

#### e. Delete Table
```DELETE:/tables/:id```
##### Params
```
Path Variables
key: id
value: 28
```
##### Header
```
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A
```
##### Response

```js
{
    "Message" : "Deleted cafe_tables Successfully! "
}
```

#### f. Update Status Table
```PATCH:/tables/:id/status```
##### Params
```
Path Variables
key: id
value: 27
```
##### Header
```
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A
```
##### Body ``raw``
```js
{
    "status": "fill"
}
```

##### Response 
```js
{
    "message": "Update status successfully",
    "cafe_table": {
        "id": 27,
        "chalk_board": 11,
        "status": "fill",
        "createdAt": "2021-10-01T03:36:27.000Z",
        "updatedAt": "2021-10-01T03:49:15.050Z"
    }
}
```


## 5. Bookings
#### a. Get All Bookings
```GET:/bookings```
##### Header
```
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A
```
##### Response
```js
[
    {
        "id": 17,
        "user_id": 48,
        "table_id": 17,
        "status": "done",
        "createdAt": "2021-10-01T01:56:13.000Z",
        "updatedAt": "2021-10-01T01:56:55.000Z"
    },
    {
        "id": 18,
        "user_id": 47,
        "table_id": 17,
        "status": "on site",
        "createdAt": "2021-10-01T01:56:23.000Z",
        "updatedAt": "2021-10-01T01:58:00.000Z"
    }
]
```
#### b. Create Bookings
```POST:/bookings```
##### Header
```
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A

key: user_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A
```
##### Body ``raw``
```js
{
    "table_id": 25
}
```
##### Response
```js
{
    "message": "Booking succesfully created",
    "data_booking": {
        "id": 19,
        "user_id": 51,
        "table_id": 25,
        "status": "on site",
        "updatedAt": "2021-10-01T04:33:38.757Z",
        "createdAt": "2021-10-01T04:33:38.757Z"
    }
}
```

#### c. Detail Bookings
```GET:/bookings/:id```
##### Params
```
path variable
key: id
value: 19
```
##### Header
```
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A

key: user_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A
```
##### Response
```js
{
    "id": 19,
    "user_id": 51,
    "table_id": 25,
    "status": "on site",
    "createdAt": "2021-10-01T04:33:38.000Z",
    "updatedAt": "2021-10-01T04:33:38.000Z"
}
```

#### d. Update Bookings
```PUT:/bookings/:id```
##### Params
```
Path Variables
key: id
value: 19
```
##### Header
```
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A

key: user_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A
```
##### Body ``raw``
```js
{
    "table_id": 18
}
```

##### Response 
```js
{
    "message": "Booking updated",
    "data_booking": {
        "id": 19,
        "user_id": 51,
        "table_id": "18",
        "status": "on site",
        "createdAt": "2021-10-01T04:33:38.000Z",
        "updatedAt": "2021-10-01T04:43:35.381Z"
    }
}
```

#### e. Delete Bookings
```DELETE:/bookings/:id```
##### Params
```
Path Variables
key: id
value: 19
```
##### Header
```
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A
```
##### Response
```js
{
    "message": "Deleted booking succesfully"
}
```

#### f. Update Status Booking
```PATCH:/bookings/:id/status```
##### Params
```
Path Variables
key: id
value: 18
```
##### Header
```
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A
```
##### Body ``raw``
```js
{
    "status": "done"
}
```

##### Response
```js
    "message": "Update status successfully",
        "bookings": {
            "user_id": 47,
            "table_id": 17,
            "status": "done",
            "createdAt": "2021-10-01T03:36:27.000Z",
            "updatedAt": "2021-10-01T03:49:15.050Z"
```
## 6. Transaction-Menu

#### a. Create Transaction_Menu
```POST:/transaction_menu/:id/status```
##### Header
```
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A

key: user_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUxLCJpYXQiOjE2MzMwNTc3NDF9.SB74MnaSK4-oTYh69eNoGCHld1sbekjmlVfwi0G_DBQ
```
##### Body ``raw``
```js
{
    "menu_id" : 1
}
```
##### Response
```js
{
    "id": 8,
    "user_id": 51,
    "menu_id": 1,
    "updatedAt": "2021-10-01T06:38:38.026Z",
    "createdAt": "2021-10-01T06:38:38.026Z"
}
```

#### b. Delete Transaction_Menu
```DELETE:/transaction_menu/:id```
##### Params
```
Path Variables
key: id
value: 8
```
##### Header
```
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A
```

##### Response

```js
{
    "message": "Deleted transaction menu succesfully"
}
```


## Error Response

### Unauthorize

```js
{
    "message": "Unauthorize access"
}
```

### Unauthenticated
```js
{
    "message": "Unauthenticated"
}
```

### Not Found

```js
{
    "message": "The requested resource was not found"
}
```

### Access Invalid
```js
{
    "message": "Invalid access token."
}
```

### Bad Request

```js
{
    {
    "message": [
        {
            "message": "\"email\" is required",
            "path": [
                "email"
            ],
            "type": "any.required",
            "context": {
                "label": "email",
                "key": "email"
            }
        }
    ]
    }
}
```

### Access Forbidden
```js
{
    "message": "Access to that resource is forbidden"
}
```

### Validation Error
```js
{
    "message": "Validation error"
}
```