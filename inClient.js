const net = require('net')
const readLine = require('readline').createInterface({
    input:  process.stdin,
    output: process.stdout
})
const client = net.createConnection({port:9898},()=>{
    console.log('client connected to the server')
    
     readLine.on('line',inputLine)
    client.write('love from client')
    client.on('data',logData)
    
}).on('error',handleError)


function inputLine(inputEvent)
{
    console.log('Enter Client:')
    client.write(inputEvent.toString())
}


function logData(logEvent)
{
    console.log('Server:',logEvent.toString())
}

function handleError(errorEvent)
{
    console.log('the error is:',errorEvent)
}