package gn.gimnasio.controlador;

import gn.gimnasio.modelo.*;
import gn.gimnasio.servicio.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// El Controlador REST Expone los endpoints HTTP para interactuar con la aplicación.
@RestController // Indica que esta clase manejará peticiones HTTP y retornará respuestas en formato JSON.
@RequestMapping("gimnasio-app") // http://localhost:8080/gimnasio-app Define la ruta base del controlador.
@CrossOrigin(value = "http://localhost:4200") //puerto por default de angular dar permiso a aplicaciones frontend para acceder
public class ClaseControlador {

    private static final Logger logger = LoggerFactory.getLogger(ClaseControlador.class);

    @Autowired
    private ClaseServicio claseServicio;

    @Autowired
    private InstructorServicio instructorServicio;

    @Autowired
    private CategoriaServicio categoriaServicio;

    @Autowired
    private SalaServicio salaServicio;

    @Autowired
    private EspecialidadServicio especialidadServicio;

    //ENDPOINT PARA LAS CLASES
    @GetMapping("/clases")
    public ResponseEntity<List<Clase>> obtenerClases() {
        return ResponseEntity.ok(claseServicio.listarClases());
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleException(Exception e) {
        return ResponseEntity.status(500).body("Error: " + e.getMessage());
    }

    @PostMapping("/clases")
    public Clase registrarClase(@RequestBody Clase clase){
        logger.info("Clases ha agregar:{} ",clase);
        return claseServicio.agregarClase(clase);
    }

    // ENDPOINT PARA LOS INSTRUCTORES
    @GetMapping("/instructores") //http://localhost:8080/gimnasio-app/instructores
    public List<Instructor> obtenerInstructor(){
        List<Instructor> instructores = instructorServicio.listarInstructor();
        logger.info("Instructores Obtenidos:");
        instructores.forEach(instructor -> logger.info(instructor.toString()));
        return instructores;
    }

    @PostMapping("/instructores")//http://localhost:8080/gimnasio-app/instructores
    public Instructor registrarInstructor(@RequestBody Instructor instructor){
        logger.info("Instructores ha agregar:{} ",instructor);
        return instructorServicio.agregarInstructor(instructor);
    }

    // ENDPOINT PARA LAS CATEGORIAS

    @GetMapping("/categorias") //http://localhost:8080/gimnasio-app/categorias
    public List<Categoria> obtenerCategorias(){
        List<Categoria> categorias = categoriaServicio.listarCategoria();
        logger.info("Categorias Obtenidas:");
        categorias.forEach(categoria -> logger.info(categoria.toString()));
        return categorias;
    }

    // ENDPOINT PARA LAS SALAS
    @GetMapping("/salas") //http://localhost:8080/gimnasio-app/salas
    public List<Sala> obtenerSalas(){
        List<Sala> salas = salaServicio.listarSalas();
        logger.info("Salas Obtenidas:");
        salas.forEach(sala -> logger.info(sala.toString()));
        return salas;
    }

    // ENDPOINT PARA LAS ESPECIALIDADES
    @GetMapping("/especialidades") //http://localhost:8080/gimnasio-app/especialidades
    public List<Especialidad> obtenerEspecialidades(){
        List<Especialidad> especialidades= especialidadServicio.obtenerEspecialidad();
        logger.info("Especialidades:");
        especialidades.forEach(especialidad -> logger.info(especialidad.toString()));
        return especialidades;
    }
    @PostMapping("/especialidades")
    public Especialidad registrarEspecialidad(@RequestBody Especialidad especialidad){
        logger.info("Especialidad a Registra:{} ",especialidad);
        return  especialidadServicio.registrarEspecialidad(especialidad);
    }


}
