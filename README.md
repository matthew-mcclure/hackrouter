# hackrouter


Media Data Shape:
{
    "info": {
        "creator": "Taylor Swift",
        "duration": 52,
        "genre": "Pop",
        "imageUrl": "https://store.taylorswift.com/mm5/graphics/00000001/reputation_cd.jpg",
        "mediaType": "Album",
        "title": "Reputation",
        "year": 2018
    },
    "tagging": {
        "itemNumber": 1,
        "itemMaxQuantity": 1000000,
        "productId": "123taylor"
    }
}

GET Account Library: This will return an array of media attached to the accoutn
https://hackrouter.herokuapp.com/account/library


POST Media to Account: This accepts the Media Data Shape above and will return a confirmation message
https://hackrouter.herokuapp.com/account/library



Marketplace Data Shapes:
GET
{
        "\_id": "5a6324f8836d830c80f3ad99",
        "mediaReference": {
            "info": {
                "creator": "Taylor Swift",
                "duration": 52,
                "genre": "Pop",
                "mediaType": "Album",
                "title": "Reputation",
                "year": 2018
            },
            "tagging": {
                "itemNumber": 1,
                "itemMaxQuantity": 1000000,
                "productId": "123taylor"
            },
            "\_id": "5a631b9641ce5042dc3a4a96",
            "\_\_v": 0
        },
        "price": 100,
        "\_\_v": 0
    }
POST
{
    "mediaReference": "5a631b9641ce5042dc3a4a96",
    "price": 100
}



GET Marketplace: This will return an array of the GET Marketplace Data Shape above
https://hackrouter.herokuapp.com/marketplace

POST Media to Marketplace: This accepts the POST Marketplace Data above
https://hackrouter.herokuapp.com/marketplace
