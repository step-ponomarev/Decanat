package spbstu.ponomarev.stepan.DecanatREST.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spbstu.ponomarev.stepan.DecanatREST.domain.Person;
import spbstu.ponomarev.stepan.DecanatREST.domain.Role;
import spbstu.ponomarev.stepan.DecanatREST.repository.PersonRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PersonService {
  private final PersonRepository personRepository;

  @Autowired
  public PersonService(PersonRepository personRepository) {
    this.personRepository = personRepository;
  }

  public List<Person> getAll() {
    return personRepository.findAll();
  }

  public Person getById(Long id) {
    return personRepository.getOne(id);
  }

  public Person save(Person person) {
    return personRepository.save(person);
  }

  public Person getLast() {
    return personRepository.findTopByOrderByIdDesc();
  }

  public List<Person> getByRole(Role role) {
    List<Person> people = null;

    people = personRepository.findByRole(role);

    return people;
  }
}
