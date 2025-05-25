package gn.gimnasio.repositorio;

import gn.gimnasio.modelo.Instructor;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repositorio de datos para la entidad Instructor.
 *
 * Esta interfaz extiende JpaRepository proporcionando automáticamente
 * todas las operaciones CRUD (Create, Read, Update, Delete) básicas
 * para la entidad Instructor sin necesidad de implementación manual.
 *
 * Funcionalidades heredadas incluyen:
 * - save(Instructor) - Guardar o actualizar un instructor
 * - findById(Integer) - Buscar instructor por ID
 * - findAll() - Obtener todos los instructores
 * - deleteById(Integer) - Eliminar instructor por ID
 * - count() - Contar total de instructores
 * - existsById(Integer) - Verificar si existe un instructor
 *
 * Spring Data JPA se encarga automáticamente de:
 * - Generación de consultas SQL
 * - Manejo de transacciones
 * - Mapeo objeto-relacional
 * - Gestión de conexiones a la base de datos
 *
 * @author Sistema Gimnasio
 * @version 1.0
 * @since 2025
 * @see Instructor
 * @see JpaRepository
 */
public interface InstructorRepositorio extends JpaRepository<Instructor,Integer>{
    // No se requiere implementación - Spring Data JPA proporciona
    // automáticamente todas las operaciones CRUD básicas

    // Aquí se pueden agregar métodos de consulta personalizados si es necesario:
    // Ejemplo: List<Instructor> findByNombre(String nombre);
    // Ejemplo: List<Instructor> findByApellido(String apellido);
    // Ejemplo: Optional<Instructor> findByCorreo(String correo);
    // Ejemplo: List<Instructor> findByNombreContainingIgnoreCase(String nombre);
}
