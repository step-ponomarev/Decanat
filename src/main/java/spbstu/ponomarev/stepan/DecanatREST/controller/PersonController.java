package spbstu.ponomarev.stepan.DecanatREST.controller;

import org.springframework.web.bind.annotation.*;
import spbstu.ponomarev.stepan.DecanatREST.domain.Person;
import spbstu.ponomarev.stepan.DecanatREST.domain.Role;
import spbstu.ponomarev.stepan.DecanatREST.service.PersonService;

import java.util.List;

@RestController
@RequestMapping("person")
public class PersonController {
  private final PersonService personService;

  public PersonController(PersonService personService) {
    this.personService = personService;
  }

  @GetMapping("all")
  public List<Person> getAll() {
    return personService.getAll();
  }

  @GetMapping("roles")
  public List<Role> getRoles() {
    return List.of(Role.values());
  }

  @GetMapping("{id}")
  public Person getById(@PathVariable Long id) {
    return personService.getById(id);
  }

  @PutMapping
  public void update(@RequestBody Person person) {
    personService.update(person);
  }

  @GetMapping("teachers")
  public List<Person> getTeachers() {
    return personService.getByRole(Role.TEACHER);
  }

  @GetMapping("students")
  public List<Person> getStudents() {
    return personService.getByRole(Role.STUDENT);
  }

  @PostMapping
  public Person addPerson(@RequestBody Person person) {
    personService.save(person);

    return personService.getLast();
  }
}
