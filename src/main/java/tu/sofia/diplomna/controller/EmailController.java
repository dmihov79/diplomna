package tu.sofia.diplomna.controller;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import tu.sofia.diplomna.service.EmailService;

@RestController
@AllArgsConstructor
public class EmailController {

  private EmailService emailService;

  @PostMapping("/send-email")
  public void sendSimpleEmail(
      @RequestParam(required = true) String to, @RequestParam(required = false) String message) {
    emailService.sendSimpleEmail(to, "TestMail", message);
  }
}
