package gn.gimnasio.modelo;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Entidad JPA que representa un instructor del gimnasio en la base de datos.
 *
 * Esta clase modelo encapsula la información personal y de contacto
 * de los instructores que imparten clases en el gimnasio. Es fundamental
 * para la gestión del personal y la asignación de clases.
 *
 * Utiliza las siguientes tecnologías:
 * - JPA/Hibernate para persistencia en base de datos
 * - Lombok para generación automática de getters, setters y constructores
 *
 * Relaciones con otras entidades:
 * - Clase (un instructor puede tener múltiples clases asignadas)
 *
 * @author Sistema Gimnasio
 * @version 1.0
 * @since 2023
 */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Instructor {

    /**
     * Identificador único del instructor en la base de datos.
     *
     * Se genera automáticamente usando estrategia IDENTITY,
     * lo que permite que la base de datos asigne valores
     * únicos de forma incremental automáticamente.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id_instructor;

    /**
     * Nombre del instructor.
     *
     * Campo obligatorio que almacena el primer nombre
     * del instructor. Se utiliza para identificación
     * y comunicación con el personal.
     */
    String nombre;

    /**
     * Apellido del instructor.
     *
     * Campo que complementa la identificación del instructor
     * junto con el nombre. Esencial para la gestión formal
     * del personal y documentación oficial.
     */
    String apellido;

    /**
     * Número de teléfono de contacto del instructor.
     *
     * Información de contacto principal para comunicación
     * directa con el instructor. Útil para emergencias,
     * cambios de horario o coordinación de actividades.
     * Se recomienda incluir código de área.
     */
    String telefono;

    /**
     * Dirección de correo electrónico del instructor.
     *
     * Canal de comunicación profesional para envío de
     * horarios, documentación, y comunicaciones oficiales.
     * Debe ser un email válido y activo.
     *
     * Nota: El nombre del campo usa mayúscula inicial,
     * lo cual no sigue las convenciones Java estándar.
     */
    String Correo;

}
