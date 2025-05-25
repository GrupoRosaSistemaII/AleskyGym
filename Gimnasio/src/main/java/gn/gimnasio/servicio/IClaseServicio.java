package gn.gimnasio.servicio;

import gn.gimnasio.modelo.Clase;

import java.util.List;

/**
 * Interfaz de servicio que define el contrato para la gestión de clases del gimnasio.
 *
 * Esta interfaz establece los métodos que debe implementar cualquier servicio
 * encargado de manejar la lógica de negocio relacionada con las clases.
 * Proporciona una abstracción que permite cambiar la implementación sin
 * afectar las capas superiores (controladores).
 *
 * Beneficios del patrón de interfaz de servicio:
 * - Desacoplamiento entre capas
 * - Facilita testing con mocks
 * - Permite múltiples implementaciones
 * - Mejora la mantenibilidad del código
 *
 * @author Sistema Gimnasio
 * @version 1.0
 * @see Clase
 */
public interface IClaseServicio {

    /**
     * Obtiene todas las clases registradas en el sistema.
     *
     * Este método recupera la lista completa de clases disponibles
     * en el gimnasio, independientemente de su estado actual.
     * Útil para mostrar catálogos completos o paneles administrativos.
     *
     * @return Lista de todas las clases registradas en el sistema.
     *         Puede estar vacía si no hay clases registradas.
     * @see Clase
     */
    List<Clase> listarClases();

    /**
     * Registra una nueva clase en el sistema.
     *
     * Toma los datos de una clase y la persiste en la base de datos.
     * Puede incluir validaciones de negocio como verificación de
     * horarios, disponibilidad de instructor, etc.
     *
     * @param clase Objeto Clase con todos los datos necesarios para el registro.
     *              No debe tener ID asignado (se genera automáticamente).
     * @return La clase registrada con su ID generado y cualquier
     *         campo calculado o modificado durante el proceso.
     * @throws IllegalArgumentException si los datos de la clase no son válidos
     * @see Clase
     */
    Clase agregarClase(Clase clase);

    /**
     * Busca una clase específica por su identificador único.
     *
     * Permite recuperar los datos completos de una clase particular
     * usando su ID. Útil para operaciones de consulta, edición o
     * visualización de detalles.
     *
     * @param id_clase Identificador único de la clase a buscar.
     *                 Debe ser un ID válido existente en el sistema.
     * @return La clase encontrada con todos sus datos, o null si
     *         no existe una clase con el ID especificado.
     * @see Clase
     */
    Clase buscarClase(Integer id_clase);

    /**
     * Elimina una clase del sistema de forma permanente.
     *
     * Remueve completamente una clase de la base de datos.
     * Esta operaci&oacute;n es irreversible y debe usarse con precauci&oacute;n.
     * Se recomienda validar que no existan dependencias antes de eliminar.
     *
     * @param id_clase Identificador &uacute;nico de la clase a eliminar.
     *                 Debe ser un ID v&aacute;lido existente en el sistema.
     * @throws IllegalArgumentException si el ID no existe
     * @see Clase
     */
    void eliminarClase(Integer id_clase);
}
