package spbstu.ponomarev.stepan.DecanatREST.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import spbstu.ponomarev.stepan.DecanatREST.domain.User;
import spbstu.ponomarev.stepan.DecanatREST.repository.UserRepository;

@Service
public class UserService implements UserDetailsService {
  private final UserRepository userRepository;

  public UserService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    return userRepository.findByUsername(username);
  }

  public User saveUser(User user) {
    return userRepository.save(user);
  }

  public User login(User loginingUser) {
    final var user = userRepository.findByUsername(loginingUser.getUsername());

    if (user.getPassword().equals(loginingUser.getPassword())) {
      return user;
    }

    return  null;
  }
}
