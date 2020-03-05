package spbstu.ponomarev.stepan.DecanatREST.service;

import org.springframework.stereotype.Service;
import spbstu.ponomarev.stepan.DecanatREST.repository.MarkRepository;

@Service
public class MarkService {
  private final MarkRepository markRepository;

  public MarkService(MarkRepository markRepository) {
    this.markRepository = markRepository;
  }
}
