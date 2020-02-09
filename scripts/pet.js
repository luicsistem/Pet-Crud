 export default class Pet {
    constructor(name, poster,lastname ){
        this.name = name
        this.lastname = lastname
        this.poster = poster
       
       
    }

    getName(){
        return this.name
    }
    setName(name){
        this.name = name
    }
    
    getPoster(){
        return this.poster
    }
    setPoster(poster){
       this.poster = poster
    }
        

    getLastName(){
        return this.lastname
    }
  
    setLastName(lastname){
        this.lastname = lastname
    }

 
    
}




