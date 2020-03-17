package spbstu.ponomarev.stepan.DecanatREST.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import spbstu.ponomarev.stepan.DecanatREST.domain.Person;
import spbstu.ponomarev.stepan.DecanatREST.domain.Role;

import java.util.List;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {
  Person findTopByOrderByIdDesc();
  List<Person> findByRole(Role role);
}
