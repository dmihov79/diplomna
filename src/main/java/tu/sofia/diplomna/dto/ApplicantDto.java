package tu.sofia.diplomna.dto;


import java.time.LocalDateTime;
import java.util.Set;

public record ApplicantDto(
    Long id,
    String firstName,
    String lastName,
    String email,
    Integer yearsOfExperience,
    Set<DocumentDto> docs,
    String phoneNumber,
    String resume,
    LocalDateTime createdAt,
    LocalDateTime updatedAt) {
    public String fullName() {
        return firstName + " " + lastName;
    }
}
