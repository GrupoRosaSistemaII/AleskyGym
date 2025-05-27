package gn.gimnasio.servicio;


import gn.gimnasio.modelo.Usuario;

import java.util.List;

public interface IUsuarioServicio {
    //Mostrar lista Usuario
    List<Usuario> listarUsuario();

    Usuario agregarUsuario(Usuario usuario);
}
