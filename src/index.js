import { PersonagemView } from "./components/personagem-view.js"
import { Arqueiro } from "./modules/Arqueiro.js"
import { ArqueiroMago } from "./modules/ArqueiroMago.js"
import { Guerreiro } from "./modules/Guerreiro.js"
import { Mago } from "./modules/Mago.js"
import { Personagem } from "./modules/Personagem.js"



const magoAntonio = new Mago('Antonio', 4, 'fogo', 4, 3)
const magaJulia = new Mago('Julia', 8, 'gelo', 7, 10)
const arqueiroMarcos = new Arqueiro('Marcos', 5, 3)
const arqueiraAna = new Arqueiro('Ana', 5, 5)
const guerreiroJoao = new Guerreiro('Joao', 7, 8)
const guerreiroSet = new Guerreiro('Set', 5, 4)
const arqueiroMagoChico = new ArqueiroMago('Chico', 7, 10, 'ar', 4, 8)


const personagens = [
    magoAntonio,
    magaJulia,
    arqueiroMarcos,
    arqueiraAna,
    guerreiroJoao,
    guerreiroSet,
    arqueiroMagoChico
]


new PersonagemView(personagens).render()

console.log(Personagem.verificarVencedor(arqueiroMarcos, magoAntonio))

