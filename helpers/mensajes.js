require('colors');

const mostrarMenu = async () => {
    return new Promise((resolve, reject) => {
        console.log('========================='.green);
        console.log('  Seleccione una opción'.green);
        console.log('=========================\n'.green);
        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar tareas`);
        console.log(`${'3.'.green} Listar tareas completadas`);
        console.log(`${'4.'.green} Listar tareas pendientes`);
        console.log(`${'5.'.green} Completar tarea(s)`);
        console.log(`${'6.'.green} Borrar tarea`);
        console.log(`${'0.'.green} Salir\n`);

        // Create an interface to read from the console
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        // Ask the user to select an option
        readline.question('Seleccione una opción: ', (opt) => {
            readline.close();
            resolve(opt);
        });
    });
};

const pausa = async () => {
    return new Promise((resolve, reject) => {
        // Create an interface to read from the console
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        // Ask the user to press ENTER to continue
        readline.question(`\nPresione ${'ENTER'.green} para continuar\n`, (opt) => {
            readline.close();
            resolve();
        });
    });
};

module.exports = {
    mostrarMenu,
    pausa
}
