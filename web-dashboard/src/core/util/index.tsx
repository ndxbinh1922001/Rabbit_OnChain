export const truncateAddr = (adr: string) => {
    return adr.substring(0, 6)  + '...' + adr.substring(adr.length - 5, adr.length - 1);
}

const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export const to$ = (nb: number): string => {
    return USDollar.format(nb);
}

export const getQueryVariable = (arg) => {
    const query = window.location.search.substring(1);
    const vars = query.split("&");

    for (let i=0; i< vars.length; i++) {
        const pair = vars[i].split("=");
        if(pair[0] == arg){
            return pair[1];
        }
    }
    
    return(false);
}