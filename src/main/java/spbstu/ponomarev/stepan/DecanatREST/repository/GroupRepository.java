package spbstu.ponomarev.stepan.DecanatREST.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import spbstu.ponomarev.stepan.DecanatREST.domain.Group;

@Repository
public interface GroupRepository extends JpaRepository<Group, Long> {

}
