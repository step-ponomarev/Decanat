package spbstu.ponomarev.stepan.DecanatREST.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import spbstu.ponomarev.stepan.DecanatREST.domain.Person;
import spbstu.ponomarev.stepan.DecanatREST.domain.Subject;
import spbstu.ponomarev.stepan.DecanatREST.service.PersonService;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("profile")
public class MyProfileController {
  private final PersonService personService;

  @Autowired
  public MyProfileController(PersonService personService) {
    this.personService = personService;
  }

  @GetMapping
  public List<Person> getAll() {
    return personService.getAll();
  }

  @GetMapping("subjects")
  public List<String> getSubjects() {
    List<String> list = new ArrayList<>(Subject.values().length);

    for (var subject : Subject.values()) {
      list.add(subject.getName());
    }

    return list;
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
