package spbstu.ponomarev.stepan.DecanatREST.controller;

import org.springframework.web.bind.annotation.*;
import spbstu.ponomarev.stepan.DecanatREST.domain.Group;
import spbstu.ponomarev.stepan.DecanatREST.service.GroupService;

import java.util.List;

@RestController
@RequestMapping("group")
public class GroupController {
  private final GroupService groupService;

  public GroupController(GroupService groupService) {
    this.groupService = groupService;
  }

  @GetMapping("all")
  public List<Group> getAll() {
    return groupService.getAll();
  }

  @PostMapping
  public Group saveOne(
      @RequestBody Group group
  ) {
    return groupService.saveOne(group);
  }
}
