package spbstu.ponomarev.stepan.DecanatREST.domain;


import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;

@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum Subject {
  MATH("Mathematics"),
  PROGRAMMING("Programming"),
  BIOLOGY("Biology"),
  ENGLISH("English"),
  AAA("AAA"),
  KEK("KEK"),
  LOL("LOL");

  @Getter
  public String called;

  Subject(String called) {
    this.called = called;
  }

  @Override
  public String toString() {
    return called;
  }
}
