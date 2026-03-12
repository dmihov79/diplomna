package tu.sofia.diplomna.config;

import jakarta.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
  public ResponseEntity<ErrorResponse> handleMailException(
      NotFoundException ex, HttpServletRequest request) {

    ErrorResponse error = ErrorResponse.builder(ex, ex.getStatus(), ex.getMessage()).build();

    log.error("404 - Resource not found", ex);
    return new ResponseEntity<>(error, ex.getStatus());
  }

  @ExceptionHandler(BadRequestException.class)
  public ResponseEntity<ErrorResponse> handleMailException(
      BadRequestException ex, HttpServletRequest request) {

    ErrorResponse error = ErrorResponse.builder(ex, ex.getStatus(), ex.getMessage()).build();

    log.error("400 - Bad Request", ex);
    return new ResponseEntity<>(error, ex.getStatus());
  }

  @ExceptionHandler(MailException.class)
  public ResponseEntity<ErrorResponse> handleMailException(
      MailException ex, HttpServletRequest request) {

    ErrorResponse error =
        ErrorResponse.builder(ex, HttpStatus.INTERNAL_SERVER_ERROR, ex.getMessage()).build();

    log.error("Unexpected error occurred", ex);
    return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
  }

  @ExceptionHandler(Exception.class)
  public ResponseEntity<ErrorResponse> handleGenericException(
      Exception ex, HttpServletRequest request) {

    ErrorResponse error =
        ErrorResponse.builder(ex, HttpStatus.INTERNAL_SERVER_ERROR, ex.getMessage()).build();

    log.error("Unexpected error occurred", ex);
    return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
