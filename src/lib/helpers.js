export function mapGeneres(genIds,genres){
    // console.log( genres,"ii");
    const generesMap = Object.keys(genres).reduce((result,current)=>{
        result[current.id]=current.name;
        return result;
    },{});

    return genIds.map((id)=>generesMap[id]).join(", ");

}