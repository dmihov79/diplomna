package tu.sofia.diplomna.service.impl;

import java.util.concurrent.CompletableFuture;

import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import tu.sofia.diplomna.service.EmailService;

@Service
@AllArgsConstructor
public class EmailServiceImpl implements EmailService {
  private static final Logger log = LoggerFactory.getLogger(EmailServiceImpl.class);

  private JavaMailSender mailSender;

  @Value("${spring.mail.from}")
  private String fromEmail;

  @Override
  public CompletableFuture<Void> sendSimpleEmail(String to, String subject, String body) {
    log.info(Thread.currentThread().getName());
    SimpleMailMessage message = new SimpleMailMessage();
    message.setFrom(fromEmail);
    message.setTo(to);
    message.setSubject(subject);
    message.setText(body);
    mailSender.send(message);
    return CompletableFuture.completedFuture(null);
  }
}
