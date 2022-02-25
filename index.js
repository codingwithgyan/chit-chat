const server = require('./src/app');
const port = process.env.PORT || 2345
server.listen(port,()=>{
        try
        {
            console.log(`listening on port ${port}`);
        }
        catch(e)
        {
            console.log(e);
        }
});