package gn.gimnasio.repositorio;

import gn.gimnasio.modelo.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUsuarioRepositorio extends JpaRepository<Usuario,Integer> {

}
