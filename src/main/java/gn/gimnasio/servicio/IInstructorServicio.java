package gn.gimnasio.servicio;

import gn.gimnasio.modelo.Instructor;
import java.util.List;

public interface IInstructorServicio {

    //Mostrar Instructores
    List<Instructor> listarInstructor();

    Instructor agregarInstructor(Instructor instructor);
}
