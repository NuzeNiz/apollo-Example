const {gql} = require('apollo-server')

module.exports = gql`
    type Memo{
        id:Int!
        title:String!
        content:String
    }
    type Query{
        ping:String
        memos:[Memo]
    }
`