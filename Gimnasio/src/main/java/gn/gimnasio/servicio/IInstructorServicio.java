package gn.gimnasio.servicio;

import gn.gimnasio.modelo.Instructor;
import java.util.List;

/**
 * Interfaz de servicio que define el contrato para la gestión de instructores del gimnasio.
 *
 * Esta interfaz establece los métodos que debe implementar cualquier servicio
 * encargado de manejar la lógica de negocio relacionada con los instructores.
 * Proporciona una abstracción que permite cambiar la implementación sin
 * afectar las capas superiores (controladores).
 *
 * Actualmente define operaciones básicas de consulta y registro.
 * Puede extenderse en el futuro para incluir operaciones adicionales
 * como actualización, eliminación, búsqueda por criterios, etc.
 *
 * Beneficios del patrón de interfaz de servicio:
 * - Desacoplamiento entre capas
 * - Facilita testing con mocks
 * - Permite múltiples implementaciones
 * - Mejora la mantenibilidad del código
 *
 * @author Sistema Gimnasio
 * @version 1.0
 * @see Instructor
 */
public interface IInstructorServicio {

    /**
     * Obtiene todos los instructores registrados en el sistema.
     *
     * Este método recupera la lista completa de instructores disponibles
     * en el gimnasio. Útil para mostrar catálogos de personal,
     * asignación de clases, o paneles administrativos.
     *
     * @return Lista de todos los instructores registrados en el sistema.
     *         Puede estar vacía si no hay instructores registrados.
     * @see Instructor
     */
    List<Instructor> listarInstructor();

    /**
     * Registra un nuevo instructor en el sistema.
     *
     * Toma los datos de un instructor y los persiste en la base de datos.
     * Puede incluir validaciones de negocio como verificación de
     * email único, formato de teléfono, etc.
     *
     * @param instructor Objeto Instructor con todos los datos necesarios
     *                  para el registro. No debe tener ID asignado
     *                  (se genera automáticamente).
     * @return El instructor registrado con su ID generado y cualquier
     *         campo calculado o modificado durante el proceso.
     * @throws IllegalArgumentException si los datos del instructor no son válidos
     * @see Instructor
     */
    Instructor agregarInstructor(Instructor instructor);
}
