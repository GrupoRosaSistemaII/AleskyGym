package gn.gimnasio.servicio;

import gn.gimnasio.modelo.Instructor;
import gn.gimnasio.repositorio.InstructorRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class InstructorServicio implements IInstructorServicio{

    @Autowired
    InstructorRepositorio instructorRepositorio;

    @Override
    public List<Instructor> listarInstructor() {
        return instructorRepositorio.findAll();
    }

    @Override
    public Instructor agregarInstructor(Instructor instructor) {
      return instructorRepositorio.save(instructor);
    }
}
