package gn.gimnasio.controlador;

import gn.gimnasio.modelo.Clase;
import gn.gimnasio.modelo.Instructor;
import gn.gimnasio.servicio.ClaseServicio;
import gn.gimnasio.servicio.InstructorServicio;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
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


    @GetMapping("/clases") // http://localhost:8080/gimnasio-app/clases
    public List<Clase> ObtenerClases(){
        List<Clase> clases = claseServicio.listarClases();
        logger.info("Clases Obtenidas:");
        clases.forEach(clase -> logger.info(toString()));
        return clases;
    }

    @PostMapping("/clases")
    public Clase RegistrarClase(@RequestBody Clase clase){
        logger.info("Clases ha agregar:{} ",clase);
        return claseServicio.agregarClase(clase);
    }

    @GetMapping("/Instructor") //http://localhost:8080/gimnasio-app/Instructor
    public List<Instructor> ObtenerInstructor(){
        List<Instructor> instructores = instructorServicio.listarInstructor();
        logger.info("Instructores Obtenidos:");
        instructores.forEach(instructor -> logger.info(toString()));
        return instructores;
    }

    @PostMapping("/Instructor")//http://localhost:8080/gimnasio-app/Instructor
    public Instructor RegistrarInstructor(@RequestBody Instructor instructor){
        logger.info("Instructores ha agregar:{} ",instructor);
        return instructorServicio.agregarInstructor(instructor);
    }
}
