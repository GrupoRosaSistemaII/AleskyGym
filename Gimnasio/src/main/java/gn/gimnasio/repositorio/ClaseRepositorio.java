package gn.gimnasio.repositorio;

import gn.gimnasio.modelo.Clase;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repositorio de datos para la entidad Clase.
 *
 * Esta interfaz extiende JpaRepository proporcionando automáticamente
 * todas las operaciones CRUD (Create, Read, Update, Delete) básicas
 * para la entidad Clase sin necesidad de implementación manual.
 *
 * Funcionalidades heredadas incluyen:
 * - save(Clase) - Guardar o actualizar una clase
 * - findById(Integer) - Buscar clase por ID
 * - findAll() - Obtener todas las clases
 * - deleteById(Integer) - Eliminar clase por ID
 * - count() - Contar total de clases
 * - existsById(Integer) - Verificar si existe una clase
 *
 * Spring Data JPA se encarga automáticamente de:
 * - Generación de consultas SQL
 * - Manejo de transacciones
 * - Mapeo objeto-relacional
 * - Gestión de conexiones a la base de datos
 *
 * @author Sistema Gimnasio
 * @version 1.0
 * @since 2023
 * @see Clase
 * @see JpaRepository
 */
public interface ClaseRepositorio extends JpaRepository<Clase,Integer> {
    // No se requiere implementación - Spring Data JPA proporciona
    // automáticamente todas las operaciones CRUD básicas

    // Aquí se pueden agregar métodos de consulta personalizados si es necesario:
    // Ejemplo: List<Clase> findByEstado(Estado estado);
    // Ejemplo: List<Clase> findByIdInstructor(Integer idInstructor);
    // Ejemplo: List<Clase> findByFechaInicioBetween(LocalDate inicio, LocalDate fin);
}
