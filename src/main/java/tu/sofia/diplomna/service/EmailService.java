package tu.sofia.diplomna.service;

import java.util.concurrent.CompletableFuture;
import org.springframework.scheduling.annotation.Async;

public interface EmailService {
  @Async
  public CompletableFuture<Void> sendSimpleEmail(String to, String subject, String body);
}
