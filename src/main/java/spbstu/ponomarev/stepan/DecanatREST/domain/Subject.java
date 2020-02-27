package spbstu.ponomarev.stepan.DecanatREST.domain;

import lombok.Data;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;

@Table(name = "subjects")
@Entity
@Data
public class Subject {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;
  @Length(max = 50, message = "Too long name")
  private String name;
}
