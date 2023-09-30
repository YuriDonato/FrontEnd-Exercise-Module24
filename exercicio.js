function Animal(nome, idade){
    this.nome = nome
    let _idade = idade

    this.getIdade = function(){
        return _idade
    }

    this.setIdade = function(newIdade){
        if(typeof newIdade === 'number'){
            _idade = newIdade
        }
    }
    
}

function Cachorro(nome, idade){
    Animal.call(this, nome, idade)
    this.falar = function(){
        return `${this.nome} diz: Woof! Woof!`
    }
}

function Gato(nome, idade){
    Animal.call(this, nome, idade)
    this.falar = function(){
        return `${this.nome} diz: Meow! Meow!`
    }
}


const cachorro1 = new Cachorro("Bolinha", 8)
const gato1 = new Gato("Frajola", 2)
const cachorro2 = new Cachorro("Biscoito", 5)

console.log(cachorro1.falar())
console.log(gato1.falar())
console.log(cachorro2.falar())