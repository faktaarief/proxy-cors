const cors_proxy = require('cors-anywhere')

const host = 'localhost'
const port = 3005
 
cors_proxy.createServer({

    originWhitelist: [],
    requireHeader: ['origin', 'x-requested-with', 'Authorization'],
    removeHeaders: ['cookie', 'cookie2']

}).listen(port, host, function() {
    
    console.log('Running CORS Anywhere on ' + host + ':' + port)

})