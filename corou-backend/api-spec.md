**API Specification**

| API Endpoint | Method | Description | Request Body | Response |
|--------------------------------------|------------|--------------------------------------------------|------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| /api/user/register | POST | Register a new user | { "username": "newUser", "email": "new@example.com", "password": "securePassword" } | 201 Created: { "user_key": 2, "username": "newUser", "email": "new@example.com" } |
| /api/user/login | POST | User login | { "username": "exampleUser", "password": "securePassword" } | 200 OK: { "token": "your_jwt_token" } |
| /api/user/self | GET | Get authenticated user's information | - | 200 OK: { "user_key": 1, "username": "exampleUser", "email": "example@example.com" } |
| /api/user/checkemail/:email | GET | Check if an email is available | - | 200 OK: { "message": "사용 가능한 이메일입니다." } <br> 400 Bad Request: { "message": "이미 사용중인 이메일입니다." } |
| /api/user/checkusername/:username | GET | Check if a username is available | - | 200 OK: { "message": "사용 가능한 사용자 이름입니다." } <br> 400 Bad Request: { "message": "이미 사용중인 사용자 이름입니다." } |
| /api/user/:user_key | GET | Get a specific user's information | - | 200 OK: { "user_key": 1, "username": "exampleUser", "email": "example@example.com" } |
| /api/user | GET | Get all users' information | - | 200 OK: [ { "user_key": 1, "username": "exampleUser", "email": "example@example.com" } ] |
| /api/user/:user_key/address | GET | Get all addresses for a specific user | - | 200 OK: [ { "addr_key": 1, "user_key": 1, "address": "서울특별시 강남구" }, ... ] |
| /api/user/:user_key/address/:addr_key | GET | Get a specific address for a user | - | 200 OK: { "addr_key": 1, "user_key": 1, "address": "서울특별시 강남구" } |
| /api/user/:user_key/address | POST | Add an address for a specific user | { "address": "서울특별시 강남구" } | 201 Created: { "addr_key": 1, "user_key": 1, "address": "서울특별시 강남구" } |
| /api/user/:user_key/address/:addr_key | PUT | Update a specific address for a user | { "address": "서울특별시 송파구" } | 200 OK: { "addr_key": 1, "user_key": 1, "address": "서울특별시 송파구" } |
| /api/routine | POST | Create a new routine | { "main": { "routine_name": "Routine Name", "steps": 3, "for_gender": "M", "for_skin": 1, "for_age": "20", "for_problem": ["10", "11"] }, "details": [...] } | 201 Created: { "routine_key": 1, "routine_name": "Routine Name" } |
| /api/routine | GET | Get all routines | - | 200 OK: [ { "routine_key": 1, "routine_name": "Routine Name" } ] |
| /api/routine/:routine_key | GET | Get a specific routine's information | - | 200 OK: { "routine_key": 1, "routine_name": "Routine Name", "details": [...] } |
| /api/routine/:routine_key | PUT | Update a specific routine | { "routine_name": "Updated Routine Name", "steps": 4 } | 200 OK: { "routine_key": 1, "routine_name": "Updated Routine Name" } |
| /api/routine/:routine_key | DELETE | Delete a specific routine | - | 200 OK: { "message": "루틴 삭제에 성공했습니다." } |
| /api/item | POST | Create a new item | { "item_name": "New Item", "item_price": 1000, "description": "Item Description", "category": "Category Name" } | 201 Created: { "item_key": 1, "item_name": "New Item" } |
| /api/item | GET | Get all items | - | 200 OK: [ { "item_key": 1, "item_name": "Item Name" } ] |
| /api/item/key/:item_key | GET | Get a specific item | - | 200 OK: { "item_key": 1, "item_name": "Item Name", "item_price": 1000, "description": "Item Description" } |
| /api/item/name/:item_name | GET | Get a specific item by name | - | 200 OK: { "item_key": 1, "item_name": "Item Name" } |
| /api/item/search/:query | GET | Search for items | - | 200 OK: [ { "item_key": 1, "item_name": "Item Name" } ] |
| /api/review/routine/:routine_key | POST | Create a review for a routine | { "review_content": "Great routine!", "rating": 5 } | 200 OK: { "review_key": 1, "routine_key": 1, "review_content": "Great routine!", "rating": 5 } |
| /api/review/item/:item_key | POST | Create a review for an item | { "review_content": "Great item!", "rating": 5 } | 200 OK: { "review_key": 1, "item_key": 1, "review_content": "Great item!", "rating": 5 } |
| /api/review/routine/:routine_key | GET | Get reviews for a specific routine | - | 200 OK: [ { "review_key": 1, "routine_key": 1, "review_content": "Great routine!", "rating": 5 } ] |
| /api/review/item/:item_key | GET | Get reviews for a specific item | - | 200 OK: [ { "review_key": 1, "item_key": 1, "review_content": "Great item!", "rating": 5 } ] |
| /api/review/:review_key | DELETE | Delete a specific review | - | 200 OK: { "message": "리뷰 삭제에 성공했습니다." } |
| /api/order/cart | GET | Get the user's cart | - | 200 OK: [ { "cart_key": 1, "user_key": 1, "item_key": 1, "quantity": 1, "item": { "item_key": 1, "item_name": "testItem1" } } ] |
| /api/order/itemorder/:order_key | GET | Get a specific order | - | 200 OK: { "order_key": 1, "user_key": 1, "items": [ { "item_key": 1, "quantity": 2 } ] } |
| /api/order/itemorder | GET | Get all orders for a user | - | 200 OK: [ { "order_key": 1, "user_key": 1, "items": [ { "item_key": 1, "quantity": 2 } ] } ] |
| /api/order/cart | POST | Add an item to the cart | { "item_key": 1, "quantity": 1 } | 200 OK: { "cart_key": 1, "user_key": 1, "item_key": 1, "quantity": 1, "item": { "item_key": 1, "item_name": "testItem1" } } |
| /api/order/itemorder | POST | Create a new order | { "addr_key": 1, "price_total": 10000, "items": [ { "item_key": 1, "quantity": 2 } ] } | 201 Created: { "order_key": 1, "user_key": 1, "items": [ { "item_key": 1, "quantity": 2 } ] } |
| /api/order/cart | PUT | Update the quantity of an item in the cart | { "cart_key": 1, "quantity": 2 } | 200 OK: { "cart_key": 1, "user_key": 1, "item_key": 1, "quantity": 2, "item": { "item_key": 1, "item_name": "testItem1" } } |
| /api/order/cart | DELETE | Delete an item from the cart | { "cart_key": 1 } | 200 OK: { "message": "장바구니 삭제 완료" } |
| /api/payment/payments | POST | Create a payment | { "amount": 10000, "currency": "KRW", "order_id": "order_12345" } | 201 Created: { "payment_id": "payment_12345", "status": "pending" } |
| /api/payment/payments/:impUid | GET | Get a specific payment | - | 200 OK: { "payment_id": "payment_12345", "amount": 10000, "status": "completed" } |