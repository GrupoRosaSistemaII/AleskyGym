package gn.gimnasio.servicio;

import gn.gimnasio.modelo.Usuario;
import gn.gimnasio.repositorio.IUsuarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UsuarioServicio implements IUsuarioServicio {

    @Autowired
    IUsuarioRepositorio usuarioRepositorio;

    @Override
    public List<Usuario> listarUsuario() {
        return usuarioRepositorio.findAll();
    }

    @Override
    public Usuario agregarUsuario(Usuario usuario) {
        return usuarioRepositorio.save(usuario);
    }
}
