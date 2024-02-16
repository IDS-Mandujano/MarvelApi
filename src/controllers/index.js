import { listCharacter } from "../controllers/dependencies.js"
import { Character } from "../models/Character.js"
import { Comics } from "../models/Comics.js"
import { Events } from "../models/Events.js"
import { History } from "../models/History.js"
import { Series } from "../models/Series.js"

   
    const domain = "https://gateway.marvel.com/v1/public/characters?limit=32&"
    const keyPublic = "ts=10&apikey=3d5d8db1f8cc9f4fd5a0a55547f709f7"
    const hash = "&hash=c698016c4752d96a67869332119dc245"

    const url = domain+keyPublic+hash
    console.log(url)

    fetch(url)
    .then((response) => response.json())
    .then(data => {

            data.data.results.forEach( element => {
                let character = new Character()
                character.setName(element.name)
                character.setPath(element.thumbnail.path)

                element.comics.items.forEach(item =>{
                    let comic = new Comics()
                    comic.setName(item.name)
                    character.addComic(comic)
                })

                element.series.items.forEach(item =>{
                    let serie = new Series()
                    serie.setName(item.name)
                    character.addSerie(serie)
                })

                element.stories.items.forEach(item =>{
                    let history = new History()
                    history.setName(item.name)
                    character.addHistory(history)
                })

                element.events.items.forEach(item =>{
                    let event = new Events()
                    event.setName(item.name)
                    character.addEvents(event)
                })
                
                
                listCharacter.addCharacter(character)
            })
    })

  
    let cardCharacters = document.getElementById("card-Characters")

    let btn = document.getElementById("getElements")
    btn.addEventListener("click",()=>{
        listCharacter.getCharacters().forEach(item => {
            let cards = document.createElement("article")
            cards.classList.add("card-container")
    
            let nameContainer = document.createElement("div")
            nameContainer.classList.add("name-container")
            let name = document.createElement("p")
            name.innerText = item.getName()
            nameContainer.appendChild(name)
            cards.appendChild(nameContainer)

            let imgContainer = document.createElement("div")
            imgContainer.classList.add("img-container")
            let img = document.createElement("img")
            img.setAttribute("src",item.getPath()+".jpg")
            imgContainer.appendChild(img)
            cards.appendChild(imgContainer)

            item.getComics().forEach(comic =>{
                console.log(`Comics: ${comic.getName()}`)
            })

            item.getEvents().forEach(comic =>{
                console.log(`Events: ${comic.getName()}`)
            })

            item.getHistories().forEach(comic =>{
                console.log(`Hostories: ${comic.getName()}`)
            })

            item.getSeries().forEach(comic =>{
                console.log(`Series: ${comic.getName()}`)
            })

            cardCharacters.appendChild(cards)
        })
    })
