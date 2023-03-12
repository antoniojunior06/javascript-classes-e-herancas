import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"
import { Guerreiro } from "./modules/guerreiro.js"

const magoAntonio = new Mago('Antonio', 4, 'fogo', 4, 3)
const magaJulia = new Mago('Julia', 8, 'gelo', 7, 10)

const arqueiroJose = new Arqueiro('Jose', 3, 8)
const arqueiroMagoPaula = new ArqueiroMago('Paula', 5, 6, 'ar', 6, 6)

const guerreiroDaniel = new Guerreiro('Daniel', 7)

const personagens = [magoAntonio, magaJulia, arqueiroJose, arqueiroMagoPaula, guerreiroDaniel]
new PersonagemView(personagens).render()

