require('colors');

// const { mostrarMenu, pausa } = require('./helpers/mensajes');
const {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoCheckList
} = require('./helpers/inquirer');

const Tareas = require('./models/tareas');
const { saveDB, readDB } = require('./helpers/save-file');

const main = async () => {
    let opt = '';
    const tareas = new Tareas();
    const tareasDB = readDB();

    if (tareasDB) {
        tareas.cargarTareasFromArray(tareasDB);
    }

    do {
        // Imprimir el menú
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripción:');
                tareas.crearTarea(desc);
                break;
            case '2':
                tareas.listadoCompleto();
                break;
            case '3':
                tareas.listarPendientesCompletadas(true);
                break;
            case '4':
                tareas.listarPendientesCompletadas(false);
                break;
            case '5':
                const ids = await mostrarListadoCheckList(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
                break;
            case '6':
                const idx = await listadoTareasBorrar(tareas.listadoArr);
                if (idx !== '0') {
                    const ok = await confirmar('¿Está seguro?');
                    if (ok) {
                        tareas.borrarTarea(idx);
                        console.log('Tarea borrada');
                    }
                }
                break;
        }

        saveDB(tareas.listadoArr);

        // if (opt !== '0') await pausa();
        await pausa();
    } while (opt !== '0');

};

main().then(() => console.log('Fin del programa'.red));
