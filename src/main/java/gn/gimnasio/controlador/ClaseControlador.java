package gn.gimnasio.controlador;

import gn.gimnasio.modelo.*;
import gn.gimnasio.servicio.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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
    @Autowired
    private UsuarioServicio usuarioServicio;

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

    @GetMapping("/clasesPaginadas")
    public ResponseEntity<Page<Clase>> listarClasesPaginadas(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String sortBy,
            @RequestParam(required = false) String sortDirection) {

        // Configurar ordenamiento
        Sort.Direction direction = Sort.Direction.ASC;
        if(sortDirection != null && sortDirection.equalsIgnoreCase("desc")) {
            direction = Sort.Direction.DESC;
        }

        Pageable pageable = PageRequest.of(
                page,
                size,
                Sort.by(direction, sortBy != null ? sortBy : "nombre")
        );
        return ResponseEntity.ok(claseServicio.listarClasesPaginadas(pageable));
    }

    // ENDPOINT PARA LOS INSTRUCTORES
    @GetMapping("/instructores") //http://localhost:8080/gimnasio-app/instructores
    public List<Instructor> obtenerInstructor(){
        List<Instructor> instructores = instructorServicio.listarInstructor();
        logger.info("Instructores Obtenidos:");
        instructores.forEach(instructor -> logger.info(instructor.toString()));
        return instructores;
    }

    @GetMapping("/instructoresPaginados")
    public ResponseEntity<Page<Instructor>> listarInstructoresPaginados(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String sortBy,
            @RequestParam(required = false) String sortDirection) {

        // Configurar ordenamiento
        Sort.Direction direction = Sort.Direction.ASC;
        if(sortDirection != null && sortDirection.equalsIgnoreCase("desc")) {
            direction = Sort.Direction.DESC;
        }

        Pageable pageable = PageRequest.of(
                page,
                size,
                Sort.by(direction, sortBy != null ? sortBy : "nombre")
        );
        return ResponseEntity.ok(instructorServicio.listarInstructoresPaginados(pageable));
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

    @PostMapping("/categorias")
    public Categoria registrarCategoria(@RequestBody Categoria categoria){
        logger.info("Categoria a Registra:{} ",categoria);
        return  categoriaServicio.agregarCategoria(categoria);
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

    // ENDPOINT PARA LOS USUARIOS
    @PostMapping("/usuarios")
    public Usuario registrarUsuario(@RequestBody Usuario usuario){
        logger.info("usuario a Registra:{} ",usuario);
        return usuarioServicio.agregarUsuario(usuario);
    }

    @GetMapping("/usuarios") //http://localhost:8080/gimnasio-app/especialidades
    public List<Usuario> obtenerUsuarios(){
        List<Usuario> usuarios= usuarioServicio.listarUsuario();
        logger.info("Usuarios:");
        usuarios.forEach(usuario -> logger.info(usuario.toString()));
        return usuarios;
    }



}
