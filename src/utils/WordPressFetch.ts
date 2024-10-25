interface wpQuery{
    query: string;
    variable?: object;
}


export const wordPressFecth = async( { query, variable} : wpQuery)=> {

    const response = await fetch(`${import.meta.env.PUBLIC_WPGRAPHQL_URL}`, {
        method: "POST",
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({ query, variable }),
    })

    if(!response.ok){
        return {};
        
    }

    const {data} = await response.json();
    return data;
}



