package tu.sofia.diplomna.domain.entity;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.Set;
import lombok.Data;
import lombok.experimental.FieldNameConstants;

@Data
@Entity
@Table(name = "applicant")
public class Applicant {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "first_name")
  private String firstName;

  @Column(name = "last_name")
  private String lastName;

  @Nullable
  @Column(name = "email")
  private String email;

  @Column(name = "years_experience")
  private Integer yearsOfExperience;

  @OneToMany(mappedBy = "applicant", cascade = CascadeType.ALL, orphanRemoval = true)
  private Set<Document> docs;

  @Column(name = "phone_number", length = 10)
  private String phoneNumber;

  @Column(name = "resume")
  private String resume;

  @Column(name = "created_at")
  private LocalDateTime createdAt;

  @Column(name = "updated_at")
  private LocalDateTime updatedAt;
}
