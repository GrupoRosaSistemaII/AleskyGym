package gn.gimnasio.modelo;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

/**
 * Entidad JPA que representa una clase del gimnasio en la base de datos.
 *
 * Esta clase modelo encapsula toda la información necesaria para gestionar
 * las clases que se ofrecen en el gimnasio, incluyendo horarios, capacidad,
 * instructor asignado y estado actual.
 *
 * Utiliza las siguientes tecnologías:
 * - JPA/Hibernate para persistencia en base de datos
 * - Lombok para generación automática de getters, setters y constructores
 * - Java Time API para manejo moderno de fechas y horas
 *
 * Relaciones con otras entidades:
 * - Instructor (mediante id_instructor)
 * - Categoria (mediante id_categoria)
 * - Sala (mediante id_sala)
 *
 * @author Sistema Gimnasio
 * @version 1.0
 * @since 2023
 */

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Clase {

    /**
     * Identificador único de la clase en la base de datos.
     *
     * Se genera automáticamente usando estrategia IDENTITY,
     * lo que significa que la base de datos asigna el valor
     * de forma incremental automáticamente.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id_clase;

    /**
     * Nombre descriptivo de la clase.
     *
     * Ejemplos: "Yoga Matutino", "Spinning Avanzado", "Bachata", etc.
     * Campo obligatorio para identificar la clase en el sistema.
     */
    String nombre;

    /**
     * Descripción detallada de la clase.
     *
     * Proporciona información adicional sobre el contenido,
     * objetivos y características específicas de la clase.
     * Útil para que los usuarios entiendan qué esperar.
     */
    String descripcion;

    /**
     * Fecha de inicio del período de la clase.
     *
     * Representa el primer día en que se imparte esta clase.
     * Utiliza LocalDate para manejar solo la fecha sin hora.
     * Mapea a la columna 'fecha_inicio' en la base de datos.
     */
    @Column(name = "fecha_inicio")
    LocalDate fecha_inicio;

    /**
     * Hora de inicio de la clase.
     *
     * Especifica a qué hora comienza la clase cada día.
     * Utiliza LocalTime para precisión de hora y minutos.
     * Mapea a la columna 'hora_inicio' en la base de datos.
     */
    @Column(name="hora_inicio")
    LocalTime hora_inicio;

    /**
     * Fecha de finalización del período de la clase.
     *
     * Representa el último día en que se imparte esta clase.
     * Permite definir clases con duración específica (ej: curso de 4 semanas).
     * Mapea a la columna 'fecha_final' en la base de datos.
     */
    @Column(name = "fecha_final")
    LocalDate fecha_final;

    /**
     * Hora de finalización de la clase.
     *
     * Especifica a qué hora termina la clase cada día.
     * Junto con hora_inicio permite calcular la duración exacta.
     * Mapea a la columna 'hora_final' en la base de datos.
     */
    @Column(name="hora_final")
    LocalTime hora_final;

    /**
     * Duración de la clase en minutos.
     *
     * Representa la cantidad total de minutos que dura cada sesión.
     * Útil para programación de horarios y cálculo de tarifas.
     * Valor típico entre 30-120 minutos.
     */
    Integer duracion;

    /**
     * Capacidad máxima de participantes en la clase.
     *
     * Define el número máximo de personas que pueden inscribirse
     * en esta clase. Importante para control de aforo y seguridad.
     * Debe ser un valor positivo mayor a 0.
     */
    Integer capacidad;

    /**
     * Estado actual de la clase.
     *
     * Utiliza el enum Estado para definir si la clase está:
     * - Disponible: Abierta para inscripciones
     * - Llena: Ha alcanzado su capacidad máxima
     * - Cancelada: No se realizará por algún motivo
     *
     * Se almacena como STRING en la base de datos para legibilidad.
     */
    @Enumerated(EnumType.STRING)
    Estado estado;

    /**
     * Identificador del instructor asignado a esta clase.
     *
     * Referencia al instructor responsable de impartir la clase.
     * Permite establecer la relación con la entidad Instructor
     * sin crear una dependencia directa en el modelo.
     */
    Integer id_instructor;

    /**
     * Identificador de la categoría a la que pertenece la clase.
     *
     * Permite clasificar las clases por tipo (ej: Cardio, Fuerza, Baile).
     * Facilita la búsqueda y organización de clases por temática.
     * Referencia a una tabla de categorías externa.
     */
    Integer id_categoria;

    /**
     * Identificador de la sala donde se imparte la clase.
     *
     * Referencia al espacio físico donde se realiza la actividad.
     * Permite gestionar la ocupación de salas y evitar conflictos
     * de horarios en el mismo espacio.
     */
    Integer id_sala;
}

