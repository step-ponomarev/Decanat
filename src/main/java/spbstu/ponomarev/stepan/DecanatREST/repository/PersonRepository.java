package spbstu.ponomarev.stepan.DecanatREST.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import spbstu.ponomarev.stepan.DecanatREST.domain.Person;

import java.util.List;

@Repository
public interface PersonRepository extends PagingAndSortingRepository<Person, Long> {
  List<Person> findByFirstname(@Param("firstname") String firstname);
  Person findTopByOrderByIdDesc();
}
