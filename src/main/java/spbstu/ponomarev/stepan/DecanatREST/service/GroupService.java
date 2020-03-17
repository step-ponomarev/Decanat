package spbstu.ponomarev.stepan.DecanatREST.service;

import org.springframework.stereotype.Service;
import spbstu.ponomarev.stepan.DecanatREST.domain.Group;
import spbstu.ponomarev.stepan.DecanatREST.repository.GroupRepository;

import java.util.List;

@Service
public class GroupService {
  private final GroupRepository groupRepository;

  public GroupService(GroupRepository groupRepository) {
    this.groupRepository = groupRepository;
  }

  public List<Group> getAll() {
    return groupRepository.findAll();
  }
}
