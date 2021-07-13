const schedule = require('node-schedule')
const fetch = require('node-fetch')

const notificarSaldoRojo = async () => {
    try{
        const notificar = await fetch('http://pideflugi.info:3000/api/repartidores/emitirCorte',{method:'get'}).then(console.log('enviado'))
    }catch(e){
        console.log(e)
    }
}

test = () => {
    console.log('loool')
}

//segundo, minuto, hora, dia d mes, mes, dia de sem
const job = schedule.scheduleJob('0 0 6 * * *', notificarSaldoRojo)