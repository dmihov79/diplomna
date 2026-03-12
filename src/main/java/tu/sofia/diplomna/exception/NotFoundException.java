package tu.sofia.diplomna.exception;

import java.time.LocalDateTime;
import org.springframework.http.HttpStatus;

public class NotFoundException extends RuntimeException {
  private final HttpStatus status;
  private final String errorCode;
  private final LocalDateTime timestamp;

  public NotFoundException(String message, String errorCode) {
    super(message);
    this.status = HttpStatus.NOT_FOUND;
    this.errorCode = errorCode;
    this.timestamp = LocalDateTime.now();
  }

  public NotFoundException(String message, String errorCode, Throwable cause) {
    super(message, cause);
    this.status = HttpStatus.NOT_FOUND;
    this.errorCode = errorCode;
    this.timestamp = LocalDateTime.now();
  }

  public HttpStatus getStatus() {
    return status;
  }

  public String getErrorCode() {
    return errorCode;
  }

  public LocalDateTime getTimestamp() {
    return timestamp;
  }
}
