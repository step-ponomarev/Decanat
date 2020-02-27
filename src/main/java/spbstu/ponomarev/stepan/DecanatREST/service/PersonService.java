package spbstu.ponomarev.stepan.DecanatREST.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spbstu.ponomarev.stepan.DecanatREST.domain.Person;
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
    return (List<Person>) personRepository.findAll();
  }

  public Person getById(Long id) {
    return personRepository.findById(id).get();
  }

  public void save(Person person) {
    personRepository.save(person);
  }
}
