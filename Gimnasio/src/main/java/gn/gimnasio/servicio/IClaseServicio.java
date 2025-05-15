package gn.gimnasio.servicio;

import gn.gimnasio.modelo.Clase;

import java.util.List;

public interface IClaseServicio {

    //Metodo para Mostrar Clases
    List<Clase> listarClases();

    Clase agregarClase(Clase clase);

    Clase buscarClase(Integer id_clase);

    void eliminarClase(Integer id_clase);
}
