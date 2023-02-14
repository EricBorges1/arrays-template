const minhasStrings = ['copo','plantinha','vinho']
const minhasNumbers = [1,2,3]
const minhaArrayMista = ['neto',9,true]
const arrayUnica = [24]
const arrayVazio = []

laeleminhasStrings = minhasStrings.length
console.log(`tamanho do array `, laeleminhasStrings)

quartoElementoMinhasStrings = minhasStrings[3]
console.log(`valor na posição 3 do array `, quartoElementoMinhasStrings )

const temNeto = minhaArrayMista.includes('neto')
console.log(`Inclui 'neto' ? `,temNeto)

const temNove = minhaArrayMista.includes(9)
console.log(`inclui '9' ? `, temNove)

const temTrue = minhaArrayMista.includes(true)
console.log(`inclue 'true' ? `, temTrue)

const valorItemUnico = arrayUnica[0]
console.log(`número solitário : `, arrayUnica)

const tamanhoMeuNumero = arrayUnica.length
console.log(`tamanho da string : `, tamanhoMeuNumero)

//-------------------------------------------------------------//

const minhasStringsCopia = minhasStrings

minhasStringsCopia.push('livro')

console.log(`array original `,minhasStrings)
console.log(`cópia`,minhasStringsCopia)

const minhasStringsCopiaCERTA = minhasStrings.slice()

minhasStringsCopiaCERTA.splice(2, 2)

console.log(`Array Original: `, minhasStrings)
console.log(`Cópia CERTA pós splice()`, minhasStringsCopiaCERTA)

//splice(i,n)
//i → índice no qual vai iniciar o corte, contando com ele mesmo;
//n→ quantidade de elementos a ser cortado

const meuArray = [1,9,18,27,45]
const copiaMeuArray = meuArray.slice()


copiaMeuArray.pop() 
//removeu 45 da lista


copiaMeuArray.push(6)
// adicionou 6 ao final da lista


copiaMeuArray.splice(2, 1)
// removeu 18 da lista



console.log(`primeiro array `, meuArray)
console.log(`segundo array `, copiaMeuArray)