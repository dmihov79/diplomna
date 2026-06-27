package tu.sofia.diplomna.config;

import jakarta.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.mail.MailException;
import org.springframework.web.ErrorResponse;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import tu.sofia.diplomna.exception.BadRequestException;
import tu.sofia.diplomna.exception.NotFoundException;

@RestControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

  private static final Logger log = LoggerFactory.getLogger(GlobalExceptionHandler.class);

  @ExceptionHandler(NotFoundException.class)
  public ResponseEntity<ErrorResponse> handleNotFoundException(
      @NonNull NotFoundException ex, HttpServletRequest request) {

    ErrorResponse error =
        ErrorResponse.builder(ex, HttpStatus.NOT_FOUND, "Not Found: Resource was not found")
            .build();

    log.error("404 - Resource not found", ex);
    return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
  }

  @ExceptionHandler(BadRequestException.class)
  public ResponseEntity<ErrorResponse> handleBadRequestException(
      @NonNull BadRequestException ex, HttpServletRequest request) {

    ErrorResponse error =
        ErrorResponse.builder(ex, HttpStatus.BAD_REQUEST, "Bad Request: Check input params")
            .build();

    log.error("400 - Bad Request", ex);
    return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
  }

  @ExceptionHandler(MailException.class)
  public ResponseEntity<ErrorResponse> handleMailException(
      @NonNull MailException ex, HttpServletRequest request) {

    ErrorResponse error =
        ErrorResponse.builder(
                ex, HttpStatus.INTERNAL_SERVER_ERROR, "Mail Exception: Error sending mail")
            .build();

    log.error("Mail Exception: Error sending mail", ex);
    return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
  }

  @ExceptionHandler(Exception.class)
  public ResponseEntity<ErrorResponse> handleGenericException(
      @NonNull Exception ex, HttpServletRequest request) {

    ErrorResponse error =
        ErrorResponse.builder(
                ex, HttpStatus.INTERNAL_SERVER_ERROR, "Internal Server Error: Something broke")
            .build();

    log.error("Internal Server Error: Something broke", ex);
    return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
