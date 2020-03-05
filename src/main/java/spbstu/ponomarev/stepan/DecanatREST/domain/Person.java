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
  private Role role;
}
