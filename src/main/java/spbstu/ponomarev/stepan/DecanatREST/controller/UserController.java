package spbstu.ponomarev.stepan.DecanatREST.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import spbstu.ponomarev.stepan.DecanatREST.domain.User;
import spbstu.ponomarev.stepan.DecanatREST.service.UserService;

@RestController
@RequestMapping("user")
public class UserController {
  private final UserService userService;

  public UserController(UserService userService) {
    this.userService = userService;
  }

  @GetMapping
  public User getUser(
    @AuthenticationPrincipal User user
  ) {
    return user;
  }

  @PostMapping("login")
  public User doLogin(
      @RequestBody User user
  ) {
    return userService.login(user);
  }
}
