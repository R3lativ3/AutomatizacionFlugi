const schedule = require('node-schedule')
const fetch = require('node-fetch')

const notificar = async () => {
    try{
        const notificar = await fetch('http://192.168.1.34:3000/api/repartidores/notificarSaldoRojo',{method:'get'}).then(console.log('enviado'))

    }catch(e){
        console.log(e)
    }
}

const job = schedule.scheduleJob( '*/5 * * * * *', notificar)


