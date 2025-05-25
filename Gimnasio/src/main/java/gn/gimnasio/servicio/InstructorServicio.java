package gn.gimnasio.servicio;

import gn.gimnasio.modelo.Instructor;
import gn.gimnasio.repositorio.InstructorRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Implementación del servicio para la gestión de instructores del gimnasio.
 *
 * Esta clase contiene la lógica de negocio para todas las operaciones
 * relacionadas con los instructores del gimnasio. Actúa como intermediario
 * entre la capa de controladores y la capa de persistencia.
 *
 * Responsabilidades principales:
 * - Coordinar operaciones CRUD de instructores
 * - Aplicar reglas de negocio específicas
 * - Validar datos antes de persistir
 * - Manejar la lógica de transacciones
 *
 * Utiliza el patrón de inyección de dependencias de Spring para
 * obtener acceso al repositorio de datos de forma automática.
 *
 * @author Sistema Gimnasio
 * @version 1.0
 * @see IInstructorServicio
 * @see InstructorRepositorio
 * @see Instructor
 */
@Service
public class InstructorServicio implements IInstructorServicio{

    /**
     * Repositorio para operaciones de persistencia de instructores.
     *
     * Inyección automática de dependencia por Spring Framework.
     * Proporciona acceso directo a las operaciones CRUD básicas
     * sin necesidad de instanciación manual.
     */
    @Autowired
    InstructorRepositorio instructorRepositorio;

    /**
     * {@inheritDoc}
     *
     * Implementación que delega directamente al repositorio para
     * obtener todos los instructores. En futuras versiones se pueden
     * agregar filtros, ordenamiento o validaciones adicionales.
     *
     * @return Lista completa de instructores registrados en el sistema
     */
    @Override
    public List<Instructor> listarInstructor() {
        // Delegar al repositorio para obtener todos los instructores
        return instructorRepositorio.findAll();
    }

    /**
     * {@inheritDoc}
     *
     * Implementación que guarda un nuevo instructor en la base de datos.
     * Actualmente delega directamente al repositorio, pero puede
     * extenderse para incluir validaciones como:
     * - Verificación de email único
     * - Validación de formato de teléfono
     * - Comprobación de datos obligatorios
     * - Normalización de datos de entrada
     *
     * @param instructor Objeto con los datos del instructor a registrar
     * @return El instructor guardado con su ID generado automáticamente
     */
    @Override
    public Instructor agregarInstructor(Instructor instructor) {
        // Aquí se pueden agregar validaciones de negocio antes de guardar
        // Por ejemplo: validar email único, formato de teléfono, etc.

        // Delegar al repositorio para persistir el instructor
        return instructorRepositorio.save(instructor);
    }
}
