import React from 'react'
import {render} from 'react-dom'
import {ApolloClient, ApolloProvider, InMemoryCache, gql, useQuery} from '@apollo/client'

const client = new ApolloClient({
    uri:'http://localhost:4000/',
    cache:new InMemoryCache()
})

const PING = gql`
    query{
        ping
    }
`

function Ping() {
    const {loading, error, data} = useQuery(PING)
    if (loading) {
        return <h2>Loading...</h2>
    }
    if(error){
        return <h2>Error :</h2>
    }
    return(
        <h2>{data.ping}</h2>
    )
}

function App() {
    return(
        <ApolloProvider client={client}>
            <div>
                <h1>plz</h1>
                <Ping/>
            </div>
        </ApolloProvider>
    )
}

module.exports = render(<App/>, document.getElementById('app'))