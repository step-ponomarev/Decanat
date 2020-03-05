package spbstu.ponomarev.stepan.DecanatREST.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import spbstu.ponomarev.stepan.DecanatREST.domain.Mark;
import spbstu.ponomarev.stepan.DecanatREST.service.MarkService;

import java.util.List;

@RestController
@RequestMapping("subject")
public class SubjectController {
  private final MarkService markService;

  @Autowired
  public SubjectController(MarkService markService) {
    this.markService = markService;
  }

  @GetMapping("marks")
  public List<Mark> getMarks() {
    return markService.getAll();
  }

  @GetMapping("marks/{id}")
  public List<Mark> getById(
      @PathVariable Long id
  ) {
    return markService.getBySubjectId(id);
  }

  @PostMapping("marks")
  public List<Mark> getBySubject(@RequestBody String subject) {

    return null;
  }
}
