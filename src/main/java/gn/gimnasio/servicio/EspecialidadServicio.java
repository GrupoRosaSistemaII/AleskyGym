package gn.gimnasio.servicio;

import gn.gimnasio.modelo.Especialidad;
import gn.gimnasio.repositorio.EspecialidadRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class EspecialidadServicio implements IEspecialidadRepositorio{

    @Autowired
    EspecialidadRepositorio especialidadRepositorio;

    @Override
    public List<Especialidad> obtenerEspecialidad() {
        return especialidadRepositorio.findAll();
    }

    @Override
    public Especialidad registrarEspecialidad(Especialidad especialidad) {
        return especialidadRepositorio.save(especialidad);
    }
}
