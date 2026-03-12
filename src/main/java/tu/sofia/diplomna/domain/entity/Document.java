package tu.sofia.diplomna.domain.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.experimental.FieldNameConstants;

@Data
@Entity
@Table(name = "docs")
public class Document {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "applicant_id", nullable = false)
  private Applicant applicant;

  private String documentName;

  @Lob
  @Column(name = "document", columnDefinition = "BYTEA")
  private byte[] document;
}
