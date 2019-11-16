const net = require('net');
const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
const server = net.createServer((socket)=>{

    socket.write('this is the server speaking\n')
    
    readLine.on('line',inputLine)
    function inputLine(inputEvent) {
        console.log('Server Enter:')
        if (inputEvent.toString() === "end") 
      {socket.end("goodbye\n"); 
      server.close()}
      else socket.write(inputEvent.toString());
    }
   
    socket.on('data',clientData)    

}).on('error',handleError)

function clientData(clientEvent)
{
    console.log('client:',clientEvent.toString())
}

server.listen(9898,()=>{
    console.log('Server is running on 9898 ....')
}).on('error' , handleError)


function handleError(errorEvent)
{
    console.log(errorEvent)
}

