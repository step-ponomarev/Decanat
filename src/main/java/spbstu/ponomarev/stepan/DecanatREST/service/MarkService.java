package spbstu.ponomarev.stepan.DecanatREST.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spbstu.ponomarev.stepan.DecanatREST.domain.Mark;
import spbstu.ponomarev.stepan.DecanatREST.repository.MarkRepository;

import java.util.List;

@Service
public class MarkService {
  private final MarkRepository markRepository;

  @Autowired
  public MarkService(MarkRepository markRepository) {
    this.markRepository = markRepository;
  }

  public List<Mark> getBySubjectId(Long id) {
    return this.markRepository.findBySubjectId(id);
  }

  public List<Mark> getAll() {
    return this.markRepository.findAll();
  }

  public void addMark(Mark mark) {
    this.markRepository.save(mark);
  }

  public void deleteMark(Mark mark) {
    markRepository.delete(mark);
  }
}
