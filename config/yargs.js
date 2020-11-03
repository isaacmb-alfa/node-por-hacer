const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    }
}
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea para realizar', { descripcion })
    .command('actualizar', 'Actualiza una nueva tarea a completada', {descripcion, completado})
    .command('borrar', 'Borrar una tarea', {descripcion} )
    .help()
    .argv;



module.exports = {
    argv
}