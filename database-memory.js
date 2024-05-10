import { randomUUID } from "node:crypto"

export class DatabaseMemory {
    #video = new Map()


    list() {
        this.#video.values()
    }


    create(video){
        const videoId = randomUUID()
    }

    
    update(id, video){
        this.#video.set(id, video)
    }

    delete(id) {
        this.#video.delete(id)
    }

    
}