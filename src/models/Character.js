export class Character {

    #name 
    #path
    #series = []
    #histories = []
    #events = []
    #comics = []

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

    addSerie(serie){
        this.#series.push(serie)
    }
    getSeries(){
        return this.#series
    }

    addHistory(history){
        this.#histories.push(history)
    }
    getHistories(){
        return this.#histories
    }

    addEvents(event){
        this.#events.push(event)
    }
    getEvents(){
        return this.#events
    }

    addComic(comic){
        this.#comics.push(comic)
    }
    getComics(){
        return this.#comics
    }

}