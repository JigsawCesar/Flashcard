import baralhos from "./baralho"

const adicionar_baralho = (id, titulo) => {
    if (baralhos.length > 0){
        let ultimo_baralho = baralhos[baralhos.length - 1];
        novo_baralho.id = ultimo_baralho.id + 1
    }else{
        novo_baralho.id = 1
    }
 baralhos.push(novo_baralho);
 return true;
}
export default baralhos;

