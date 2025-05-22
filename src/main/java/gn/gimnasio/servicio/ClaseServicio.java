package gn.gimnasio.servicio;

import gn.gimnasio.modelo.Clase;
import gn.gimnasio.repositorio.ClaseRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service //marcar esta clase como un componente de servicio en Spring.
public class ClaseServicio implements IClaseServicio {

    @Autowired //Inyeccion de dependencia
    private ClaseRepositorio claseRepositorio;

    @Override
    public List<Clase> listarClases() {
        return claseRepositorio.findAll();
    }

    @Override
    public Clase agregarClase(Clase clase) {
       return claseRepositorio.save(clase);
    }

    @Override
    public Clase buscarClase(Integer id_producto) {
        Clase clase = claseRepositorio.findById(id_producto).orElse(null);
        return clase;
    }

    @Override
    public void eliminarClase(Integer id_producto) {
        claseRepositorio.deleteById(id_producto);
    }
}
