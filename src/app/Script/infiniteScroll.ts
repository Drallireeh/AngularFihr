// Fonctions génériques pour l'infinite scroll

export class InfiniteScrollScript {
    refillData(index: number, number: number, data:[], dataToRefill:[]): void {
        for(let i = index; i < number + index; i++){
            if(data[i]){
                dataToRefill.push(data[i]);
            }
            else {
              return;
            }
        }
    }
}