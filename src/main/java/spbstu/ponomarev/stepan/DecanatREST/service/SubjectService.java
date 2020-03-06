package spbstu.ponomarev.stepan.DecanatREST.service;

import org.springframework.stereotype.Service;
import spbstu.ponomarev.stepan.DecanatREST.domain.Subject;
import spbstu.ponomarev.stepan.DecanatREST.repository.SubjectRepository;

import java.util.List;

@Service
public class SubjectService {
  private final SubjectRepository subjectRepository;

  public SubjectService(SubjectRepository subjectRepository) {
    this.subjectRepository = subjectRepository;
  }

  public List<Subject> getAll() {
      return subjectRepository.findAll();
  }

  public Subject getOne(Long id) {
    return subjectRepository.findById(id).get();
  }
}
