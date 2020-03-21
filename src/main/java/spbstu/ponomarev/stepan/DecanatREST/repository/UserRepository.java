package spbstu.ponomarev.stepan.DecanatREST.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import spbstu.ponomarev.stepan.DecanatREST.domain.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
  User findByUsername(String login);
}