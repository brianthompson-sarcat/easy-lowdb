import {Easy} from './index.mjs'
var db = new Easy('test')

var val = 88858548485
db.data = {key: '123123',key2:val,array:['11','223']}
await db.write()

var db2 = new Easy('test')
await db2.read()
if(db2.data.key2 === val){
    console.log('Success')
} else {
    console.log('fail')
}