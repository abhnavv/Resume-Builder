//import json server
const jsonserver=require('json-server')
//create server for running json file
const server =jsonserver.create()
const route=jsonserver.router('db.json')
//creating middleware using jsonserve default() method
const middleware=jsonserver.defaults()
server.use(middleware)
server.use(route)


const PORT=3000

server.listen(PORT,()=>{
    console.log("server started");  
})
