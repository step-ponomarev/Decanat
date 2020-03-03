package spbstu.ponomarev.stepan.DecanatREST.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import spbstu.ponomarev.stepan.DecanatREST.domain.Person;
import spbstu.ponomarev.stepan.DecanatREST.service.PersonService;

import java.util.List;

@RestController
@RequestMapping("people")
public class PersonController {
  private final PersonService personService;

  @Autowired
  public PersonController(PersonService personService) {
    this.personService = personService;
  }

  @GetMapping
  public List<Person> getAll() {
    return personService.getAll();
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
