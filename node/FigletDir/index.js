const figlet = require('figlet')

figlet('NitroBolt', (err, data) => {
    if(err) {
        console.log('Something went wrong!!!')
        console.dir(err)
        return
    }
    else {
        console.log(data)
    }
})