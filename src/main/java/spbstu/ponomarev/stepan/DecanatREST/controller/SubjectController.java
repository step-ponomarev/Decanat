package spbstu.ponomarev.stepan.DecanatREST.controller;

import org.springframework.web.bind.annotation.*;
import spbstu.ponomarev.stepan.DecanatREST.domain.Mark;
import spbstu.ponomarev.stepan.DecanatREST.service.MarkService;

import java.util.List;

@RestController
@RequestMapping("subject")
public class SubjectController {
  private final MarkService markService;

  public SubjectController(MarkService markService) {
    this.markService = markService;
  }

  @GetMapping("marks")
  public List<Mark> getMarks() {

    return null;
  }

  @PostMapping("marks")
  public List<Mark> getBySubject(@RequestBody String subject) {


    return null;
  }
}
