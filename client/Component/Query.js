import React from 'react'
import {useQuery, gql} from '@apollo/client'

const ALL_MEMO = gql`
    query{
        memos:Memo
    }
`

function Query() {
    const {loading, error, data} = useQuery(ALL_MEMO)
    if (loading) {return <h2>Loading...</h2>}
    if (error) {return <h2>Error : </h2>}
    return <h2>Can you see this?</h2>
}

export default Query