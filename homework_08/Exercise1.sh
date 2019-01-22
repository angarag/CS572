
mongo 
use MWA
//1
db.restaurants.find({})
db.restaurants.find({},{_id:0, grades:0, address:0})
db.restaurants.find({},{_id:0, restaurant_id:1, name:1, district:1, cuisine:1})
db.restaurants.find({},{_id:0, restaurant_id:1, name:1, district:1, "address.zipcode":1})
//5
db.restaurants.find({district:"Bronx"})
//
db.restaurants.find({district:"Bronx"}).skip(5).limit(5)
    db.restaurants.find({"address.coord":{$lt:-95.754168}}) === 
    db.restaurants.find({"address.coord":{$elemMatch:{$lt:-95.754168}}}) === 
    db.restaurants.find({"address.coord.0":{$lt:-95.754168}})
db.restaurants.find({"address.coord":{$lt:-65.754168},"grades":{$elemMatch:{"score":{$gt:70}}}})
db.restaurants.find(({"cuisine":{$ne:"American "},"address.coord":{$lt:-65.754168},"grades":{$elemMatch:{"score":{$gt:70}}}}))
db.restaurants.find({"cuisine":{$ne:"American "},"address.coord":{$lt:-65.754168},"grades":{$elemMatch:{"score":{$gt:70}}}})
db.restaurants.find({name:{$regex:"^Wil"}}, {_id:0, restaurant_id:1, name:1, district:1, cuisine:1})
db.restaurants.find({name:{$regex:"Reg"}}, {_id:0, restaurant_id:1, name:1, district:1, cuisine:1})
db.restaurants.find({district:"Bronx",cuisine:{$in: ['American ', 'Chinese']}})
db.restaurants.find({district:{$in: ['Queens','Bronx','Brooklyn','Staten Island']}})
db.restaurants.find({district:{$nin: ['Queens','Bronx','Brooklyn','Staten Island']}})
db.restaurants.find({"grades":{$elemMatch:{"score":{$lt:10}}}},{_id:0, restaurant_id:1, name:1, district:1, cuisine:1})
db.restaurants.find({'address.coord.1':{$gt:42, $lte:52}},{_id:0, restaurant_id:1, name:1, 'address.coord':1})
db.restaurants.find({}).sort({name:1})
db.restaurants.find({}).sort({name:-1})
db.restaurants.find({},{name: 1,district: 1,cuisine: 1}).sort({name: 1,cuisine: 1,district: -1})
db.restaurants.find({"address.street":{$exists:true}}).count()===db.restaurants.find({}).count()
db.restaurants.find({"name":{$regex:'^Mad'}},{name:1,district:1,cuisine:1,'address.coord':1})