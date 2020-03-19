package spbstu.ponomarev.stepan.DecanatREST.controller;

import org.springframework.web.bind.annotation.*;
import spbstu.ponomarev.stepan.DecanatREST.domain.Subject;
import spbstu.ponomarev.stepan.DecanatREST.service.SubjectService;

import java.util.List;

@RestController
@RequestMapping("subject")
public class SubjectController {
  private final SubjectService subjectService;

  public SubjectController(SubjectService subjectService) {
    this.subjectService = subjectService;
  }

  @GetMapping("all")
  public List<Subject> getSubjects() {

    return subjectService.getAll();
  }

  @GetMapping("{id}")
  public Subject getSubject(
      @PathVariable Long id
  ) {
    return subjectService.getOne(id);
  }

  @PostMapping
  public Subject addOne(
      @RequestBody Subject subject
  ) {
    return subjectService.addOne(subject);
  }
}
