package gn.gimnasio.servicio;

import gn.gimnasio.modelo.Clase;
import gn.gimnasio.repositorio.ClaseRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Implementación del servicio para la gestión de clases del gimnasio.
 *
 * Esta clase contiene la lógica de negocio para todas las operaciones
 * relacionadas con las clases del gimnasio. Actúa como intermediario
 * entre la capa de controladores y la capa de persistencia.
 *
 * Responsabilidades principales:
 * - Coordinar operaciones CRUD de clases
 * - Aplicar reglas de negocio específicas
 * - Validar datos antes de persistir
 * - Manejar la lógica de transacciones
 *
 * @author Sistema Gimnasio
 * @version 1.0
 * @see IClaseServicio
 * @see ClaseRepositorio
 * @see Clase
 */
@Service //marcar esta clase como un componente de servicio en Spring.
public class ClaseServicio implements IClaseServicio {

    /**
     * Repositorio para operaciones de persistencia de clases.
     *
     * Inyección automática de dependencia por Spring Framework.
     * Proporciona acceso directo a las operaciones CRUD básicas
     * sin necesidad de instanciación manual.
     */
    @Autowired //Inyeccion de dependencia
    private ClaseRepositorio claseRepositorio;
    /**
     * Recupera todas las clases disponibles en el sistema.
     *
     * Este método obtiene un listado completo de todas las clases
     * registradas en la base de datos, sin aplicar ningún filtro.
     *
     * @return Lista de todas las clases en el sistema
     */
    @Override
    public List<Clase> listarClases() {
        return claseRepositorio.findAll();
    }

    /**
     * Registra una nueva clase en el sistema o actualiza una existente.
     *
     * Si la clase ya existe (tiene un ID válido), se actualizará.
     * Si es nueva (ID nulo), se creará un nuevo registro.
     *
     * En futuras versiones, este método podría incluir validaciones como:
     * - Verificación de conflictos de horario
     * - Validación de disponibilidad del instructor
     * - Comprobación de capacidad de la sala
     *
     * @param clase La entidad Clase a guardar o actualizar
     * @return La clase guardada con su ID asignado
     */
    @Override
    public Clase agregarClase(Clase clase) {
       return claseRepositorio.save(clase);
    }

    /**
     * Busca una clase específica por su identificador único.
     *
     * Este método intenta localizar una clase basándose en su ID.
     * Si la clase no existe, retorna null.
     *
     * @param id_producto Identificador único de la clase (nombre del parámetro
     *                    debería ser id_clase para mayor claridad)
     * @return La clase encontrada o null si no existe
     */
    @Override
    public Clase buscarClase(Integer id_producto) {
        Clase clase = claseRepositorio.findById(id_producto).orElse(null);
        return clase;
    }

    /**
     * Elimina una clase del sistema por su identificador.
     *
     * Este método elimina permanentemente una clase de la base de datos.
     * La operación no puede deshacerse una vez completada.
     *
     * En implementaciones futuras, podría incluir validaciones como:
     * - Verificar que no hay inscripciones activas para esta clase
     * - Comprobar permisos del usuario que solicita la eliminación
     * - Registrar la eliminación en logs de auditoría
     *
     * @param id_producto Identificador único de la clase a eliminar (nombre del parámetro
     *                    debería ser id_clase para mayor claridad)
     */
    @Override
    public void eliminarClase(Integer id_producto) {
        claseRepositorio.deleteById(id_producto);
    }
}
