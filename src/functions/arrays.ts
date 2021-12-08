export function shuffle(array: any[]):any[]{
    return array
            .map(value=>({value,random:Math.random()}))
            .sort((obj1,obj2)=>obj1.random-obj2.random)
            .map(obj=>obj.value)
}