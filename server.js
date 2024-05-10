// import { createServer } from 'node:http'

// const server = createServer((request, respose) => {
//     respose.write('')

//     return respose.end
// })

// server.listen(3334)

import { fastify } from "fastify"
import { DatabaseMemory }  from "./database-memory.js"

const server = fastify()
const database = new DatabaseMemory()

// POST http://localhost:3333/video

// PUT http://localhost:3333/video/id


server.post('/videos', () => {
    database.create({
        titulo: 'video 01',
        description: 'Esse é o video 01',
        diration: '180',
    })

    console.log(database.list())

    return reply.status(201).send() 
})


server.get('/videos', () => {
    return 'Hello World'
})

server.put('/videos/:id', () => {
    return 'atualizar um video'
})

server.delite('/videos/:id', () => {
    return 'teletar o video!'
})

server.listen({
    port: 3333,
})