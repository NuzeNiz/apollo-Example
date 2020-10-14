import React from 'react'
import {useQuery, gql} from '@apollo/client'

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
    if (error) {
        return<h2>Error :</h2>
    }
    return <h2>{data.ping}</h2>
}

export default Ping