package gn.gimnasio.modelo;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Data // Genera automáticamente métodos como toString, equals, y hashCode
@NoArgsConstructor // Constructor sin argumentos requerido por JPA
@AllArgsConstructor // Constructor con todos los atributos
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id_usuario;
    String nombre;
    String Apellido;
    String correo;
    @Column(name = "fecha_nacimiento")
    LocalDate fecha_nacimiento;
    @Column(name = "fechaIng", columnDefinition = "TIMESTAMP NOT NULL")
    private LocalDateTime fecha_ing;
    @Enumerated(EnumType.STRING)
    EstadoMembresia estado_membresia = EstadoMembresia.Activo;
    String contrasena;
    @Enumerated(EnumType.STRING)
    Rol rol;

    @PrePersist
    protected void onCreate() {
        fecha_ing = LocalDateTime.now();
    }
}
