export class Comics {
    #name
    #path

    setName(name){
        this.#name = name
    }
    getName(){
        return this.#name
    }
    
    setPath(path){
        this.#path = path
    }
    getPath(){
        return this.#path
    }
}