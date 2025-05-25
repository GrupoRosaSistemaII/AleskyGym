package gn.gimnasio.modelo;

/**
 * Enumeración que define los posibles estados de una clase en el gimnasio.
 *
 * Esta enum proporciona un conjunto controlado de valores que pueden
 * asignarse al campo 'estado' de la entidad Clase, garantizando la
 * integridad de los datos y facilitando la lógica de negocio.
 *
 * Los estados reflejan el ciclo de vida de una clase desde su creación
 * hasta su finalización o cancelación, permitiendo un control efectivo
 * del sistema de inscripciones.
 *
 * @author Sistema Gimnasio
 * @version 1.0
 * @see Clase
 */
public enum Estado {
   /**
    * Indica que la clase está disponible para inscripciones.
    *
    * Estado inicial por defecto cuando se crea una nueva clase.
    * Los usuarios pueden visualizar la clase y realizar inscripciones
    * mientras haya cupos disponibles.
    */
   Disponible,

   /**
    * Indica que la clase ha alcanzado su capacidad máxima.
    *
    * Se establece automáticamente cuando el número de inscripciones
    * iguala la capacidad definida para la clase. No se permiten
    * nuevas inscripciones en este estado.
    */
   Llena,

   /**
    * Indica que la clase ha sido cancelada.
    *
    * Estado final que se asigna cuando la clase no se puede realizar
    * por motivos como enfermedad del instructor, mantenimiento de
    * instalaciones, o falta de participantes mínimos.
    */
   Cancelada
}
