package spbstu.ponomarev.stepan.DecanatREST.domain;

import lombok.Data;

import javax.persistence.*;

@Table(name = "people")
@Entity
@Data
public class Person {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;
  private String firstname;
  private String lastname;
  private String pathername;

  @ManyToOne
  private Group group;
  private char type;

  @Enumerated(EnumType.STRING)
  private Prof prof;

  public Person() {

  }

  public Person(String firstname, String lastname, String pathername) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.pathername = pathername;
  }
}
