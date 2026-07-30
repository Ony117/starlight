export function relationshipCounter(date){

    const now=new Date();

    const start=new Date(date);

    const diff=now-start;

    const days=Math.floor(diff/86400000);

    return days;

}