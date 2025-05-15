package gn.gimnasio;

import gn.gimnasio.modelo.Clase;
import gn.gimnasio.modelo.Estado;
import gn.gimnasio.modelo.Instructor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@SpringBootApplication
public class GimnasioApplication {

	public static void main(String[] args) {
		SpringApplication.run(GimnasioApplication.class, args);

		Clase clase = new Clase();
		clase.setNombre("Bachata");
		clase.setDescripcion("bailes de bachatas para cardio");
		clase.setFecha_inicio(LocalDate.of(2025, 1, 10));
		clase.setHora_inicio(LocalTime.of(10, 30));
		clase.setFecha_final(LocalDate.of(2025, 2, 10));
		clase.setHora_final(LocalTime.of(11, 15));
		clase.setDuracion(45);
		clase.setCapacidad(25);
		clase.setEstado(Estado.Disponible);
		clase.setId_instructor(1);
		clase.setId_categoria(2);
		clase.setId_sala(1);
		//Imprimir
		System.out.println(clase);

		Instructor instructor = new Instructor();

		instructor.setNombre("Gilberto");
		instructor.setApellido("Velasquez");
		instructor.setTelefono("04129890131");
		instructor.setCorreo("gilberto123rafael@gmail.com");
		System.out.println(instructor);
	}
}
