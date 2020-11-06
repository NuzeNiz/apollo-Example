const path = require('path')
const fs = require('fs')

var memo_file = fs.readFileSync(path.join(__dirname, 'store', 'memo.json'),'utf8')
const memo_all = JSON.parse(memo_file)

module.exports = {
    Query:{
        ping:()=>'pong',
        memos:()=>memo_all
    }
}