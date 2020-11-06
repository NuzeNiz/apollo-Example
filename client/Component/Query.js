import React from 'react'
import {useQuery, gql} from '@apollo/client'

const ALL_MEMO = gql`
    query GetMemos{
        memos{
            title
        }
    }
`

function Query() {
    const {loading, error, data} = useQuery(ALL_MEMO)
    if (loading) {return <h2>Loading...</h2>}
    if (error) {return <h2>Error : </h2>}
    
    return <div>
        {data.memos.map(o=>{
            return <h2>{o.title}</h2>
        })}
    </div>
}

export default Query