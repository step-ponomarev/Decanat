package spbstu.ponomarev.stepan.DecanatREST.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import spbstu.ponomarev.stepan.DecanatREST.domain.Person;
import spbstu.ponomarev.stepan.DecanatREST.domain.Subject;
import spbstu.ponomarev.stepan.DecanatREST.repository.SubjectRepository;
import spbstu.ponomarev.stepan.DecanatREST.service.PersonService;

import java.util.List;

@RestController
@RequestMapping("profile")
public class MyProfileController {
  private final PersonService personService;
  private final SubjectRepository subjectRepository;

  @Autowired
  public MyProfileController(PersonService personService, SubjectRepository subjectRepository) {
    this.personService = personService;
    this.subjectRepository = subjectRepository;
  }

  @GetMapping
  public List<Person> getAll() {
    return personService.getAll();
  }

  @GetMapping("subjects")
  public List<Subject> getSubjects() {

    return subjectRepository.findAll();
  }

  @GetMapping("{id}")
  public Person getById(@PathVariable Long id) {
    return personService.getById(id);
  }

  @PostMapping
  public Person addPerson(@RequestBody Person person) {
    personService.save(person);

    return personService.getLast();
  }
}
