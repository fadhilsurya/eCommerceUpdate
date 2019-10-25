Mini-Ecommerce

all API using base URL : 

```
http :// localhost:3000
```



Category API

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





Request and Responses Details

----------------------------------------

Category

	- Success (200)

```
{
    "data": []
}
```

- failed

  ```
  
  ```

  

