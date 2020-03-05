package spbstu.ponomarev.stepan.DecanatREST.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import spbstu.ponomarev.stepan.DecanatREST.domain.Mark;
import spbstu.ponomarev.stepan.DecanatREST.domain.Subject;

import java.util.List;

@Repository
public interface MarkRepository extends JpaRepository<Mark, Long> {
  List<Mark> findBySubject(String subject);
}
