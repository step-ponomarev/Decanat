package spbstu.ponomarev.stepan.DecanatREST.domain;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

@Table(name = "marks")
@Entity
@Data
public class Mark {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  @ManyToOne
  private Person student;
  @Enumerated(EnumType.STRING)
  private Subject subject;
  @ManyToOne
  private Person teacher;

  @Max(5)
  @Min(2)
  private int value;
}
