



## Mini-Ecommerce

### 

#### 	All API using base URL : 



```
http :// localhost:3000
```



​	Notes Before Start

```
- please make sure you have Node.js, MongoDB and MongoDB Compass or Insomnia Installed
- npm install to install all dependencies
- nodemon at server file to run server
- enjoy :)
```



#### Category API

--------------------------

|  Http  |   Endpoint    | Headers |           body           |     description      |
| :----: | :-----------: | :-----: | :----------------------: | :------------------: |
|  GET   |   /category   |  none   |           none           |  fetch all category  |
|  GET   | /category/:id |  none   |           none           |  fetch one category  |
|  POST  |   /category   |  none   | name : String (required) | create new category  |
| UPDATE | /category/:id​ |  none   | name : String (required) | update category name |
| DELETE | /category/:id |  none   |           none           | delete one category  |



Sub-Category API

--------------------------------

|  Http  |     Endpoint     | Headers |               Body               |       Description        |
| :----: | :--------------: | :-----: | :------------------------------: | :----------------------: |
|  GET   |   /subCategory   |  none   |               none               |  fetch all sub-category  |
|  GET   | /subCategory/:id |  none   |               none               |  fetch one sub-category  |
|  POST  |   /subCategory   |  none   | categoryName : String (required) | create new sub-category  |
| UPDATE | /subCategory/:id |  none   |     name : String (required)     | update sub-category name |
| DELETE | /subCategory/:id |  none   |               none               | delete one sub-category  |



Product API

----------------------

|  Http  |   Endpoint   | Headers |                             Body                             |                         Description                          |
| :----: | :----------: | :-----: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|  GET   |   /product   |  none   |                             none                             |                      fetch all product                       |
|  GET   | /product/:id |  none   |                             none                             |        fetch one product, using product id in params         |
|  POST  | /product/:id |  none   | name : required (String),<br />description : required (String)<br />price : required (Integer)<br />quantity : required (Integer)<br />imageUrl : required(String) | create one products in in the params required sub-category id |
| UPDATE | /product/:id |  none   | name : required (String),<br />description : required (String)<br />price : required (Integer)<br />quantity : required (Integer)<br />imageUrl : required(String) |    update one products, using target product id in params    |
| DELETE | /product/:id |  none   |                             none                             |      delete one product, by using product id in params       |





###Request and Responses Details

----------------------------------------



###		Category	

-----------

GET ALL

- SUCCESS

```
{
    "data": []
}
```

- FAILED

```
{}
```



GET ONE

- SUCCESS

```
{
    "data": [
        {
            "_id": "5db2fc23f97e440e66732169",
            "name": "furniture",
            "createdAt": "2019-10-25T13:44:03.345Z",
            "updatedAt": "2019-10-25T13:44:03.345Z",
            "__v": 0
        }
    ]
}
```

- FAILED

```
{}
```





### CREATE 

- SUCCESS

```
{
    "data": {
        "_id": "5db2fcfc2add810eeba346bc",
        "name": "Electronics",
        "createdAt": "2019-10-25T13:47:40.507Z",
        "updatedAt": "2019-10-25T13:47:40.507Z",
        "__v": 0
    }
}
```



- FAILED

```
{
    "errors": {
        "name": {
            "message": "Path `name` is required.",
            "name": "ValidatorError",
            "properties": {
                "message": "Path `name` is required.",
                "type": "required",
                "path": "name",
                "value": ""
            },
            "kind": "required",
            "path": "name",
            "value": ""
        }
    },
    "_message": "Category validation failed",
    "message": "Category validation failed: name: Path `name` is required.",
    "name": "ValidationError"
}
```



### UPDATE



- SUCCESS

```
{
    "data": {
        "n": 1,
        "nModified": 1,
        "ok": 1
    }
}
```



- FAILED

```
{
    "Code": 400,
    "message": "Name Cannot be Empty"
}
```





### DELETE

- SUCCESS

```
{
    "data": {
        "n": 1,
        "ok": 1,
        "deletedCount": 1
    }
}
```



- FAILED

```
{
    "data": {
        "n": 0,
        "ok": 1,
        "deletedCount": 0
    }
}
```



	### 	SUB-CATEGORY

----------------------



### GET ALL

- SUCCESS

```
{
    "data": [
        {
            "_id": "5db3007ebbd0d512e4bde8e4",
            "categoryId": "5db2fc23f97e440e66732169",
            "name": "Electric Bike",
            "createdAt": "2019-10-25T14:02:38.779Z",
            "updatedAt": "2019-10-25T14:02:38.779Z",
            "__v": 0
        }
    ]
}
```



- FAILED

```
{}
```



###GET ONE

- SUCCESS

```
{
    "data": {
        "_id": "5db3007ebbd0d512e4bde8e4",
        "categoryId": "5db2fc23f97e440e66732169",
        "name": "Electric Bike",
        "createdAt": "2019-10-25T14:02:38.779Z",
        "updatedAt": "2019-10-25T14:02:38.779Z",
        "__v": 0
    }
}
```

- FAILED

```
{
    "data": null
}
```



### CREATE

	- SUCCESS

```
{
    "data1": {
        "_id": "5db3007ebbd0d512e4bde8e4",
        "categoryId": "5db2fc23f97e440e66732169",
        "name": "Electric Bike",
        "createdAt": "2019-10-25T14:02:38.779Z",
        "updatedAt": "2019-10-25T14:02:38.779Z",
        "__v": 0
    }
}
```

- FAILED

```
{
    "Code": 400,
    "message": "Field Cannot be Empty"
}
```





### UPDATE

- SUCCESS

```
{
    "data": {
        "n": 1,
        "nModified": 1,
        "ok": 1
    }
}
```



- FAILED

```
{
    "Code": 400,
    "Message": "Field cannot be empty"
}
```



### DELETE

- SUCCESS

```
{
    "data": {
        "n": 1,
        "ok": 1,
        "deletedCount": 1
    }
}
```

- FAILED

```
{
    "data": {
        "n": 0,
        "ok": 1,
        "deletedCount": 0
    }
}
```





### 	PRODUCT

-----------------------

​	

### GET ALL

- SUCCESS

```
{
    "data": [
        {
            "_id": "5db3045eeaa16b19e933aa28",
            "categoryId": "5db2fc23f97e440e66732169",
            "subCategoryId": "5db3007ebbd0d512e4bde8e4",
            "name": "test",
            "description": "test",
            "price": 100,
            "quantity": 100000,
            "imageUrl": "https://storage.googleapis.com/miniwppic/1572013149590Screen Shot 2019-10-24 at 23.51.20.png",
            "createdAt": "2019-10-25T14:19:10.695Z",
            "updatedAt": "2019-10-25T14:19:10.695Z",
            "__v": 0
        }
    ]
}
```

- FAILED

```
{}
```



### GET ONE

- SUCCESS

```
{
    "data": {
        "_id": "5db3045eeaa16b19e933aa28",
        "categoryId": "5db2fc23f97e440e66732169",
        "subCategoryId": "5db3007ebbd0d512e4bde8e4",
        "name": "test",
        "description": "test",
        "price": 100,
        "quantity": 100000,
        "imageUrl": "https://storage.googleapis.com/miniwppic/1572013149590Screen Shot 2019-10-24 at 23.51.20.png",
        "createdAt": "2019-10-25T14:19:10.695Z",
        "updatedAt": "2019-10-25T14:19:10.695Z",
        "__v": 0
    }
}
```

- FAILED

```
{}
```



### CREATE

- SUCCESS

```
{
    "data1": {
        "_id": "5db3045eeaa16b19e933aa28",
        "categoryId": "5db2fc23f97e440e66732169",
        "subCategoryId": "5db3007ebbd0d512e4bde8e4",
        "name": "test",
        "description": "test",
        "price": 100,
        "quantity": 100000,
        "imageUrl": "https://storage.googleapis.com/miniwppic/1572013149590Screen Shot 2019-10-24 at 23.51.20.png",
        "createdAt": "2019-10-25T14:19:10.695Z",
        "updatedAt": "2019-10-25T14:19:10.695Z",
        "__v": 0
    }
}
```



- FAILED

```
{
    "errors": {
        "name": {
            "message": "Path `name` is required.",
            "name": "ValidatorError",
            "properties": {
                "message": "Path `name` is required.",
                "type": "required",
                "path": "name",
                "value": ""
            },
            "kind": "required",
            "path": "name",
            "value": ""
        }
    },
    "_message": "Product validation failed",
    "message": "Product validation failed: name: Path `name` is required.",
    "name": "ValidationError"
}
```



### UPDATE

- SUCCESS 

```
{
    "data": {
        "n": 1,
        "nModified": 1,
        "ok": 1
    }
}
```



- FAILED

```
{
    "code": 400,
    "message": "Fields Cannot be Empty"
}
```



### DELETE

- SUCCESS

```
{
    "data": {
        "n": 1,
        "ok": 1,
        "deletedCount": 1
    }
}
```

- FAILED

```
{
    "data": {
        "n": 0,
        "ok": 1,
        "deletedCount": 0
    }
}
```

