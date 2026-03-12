package tu.sofia.diplomna.domain.dao.specs;

import java.time.LocalDateTime;
import org.springframework.data.jpa.domain.Specification;
import tu.sofia.diplomna.domain.entity.Applicant;
import tu.sofia.diplomna.domain.entity.Document;

public class ApplicantSpecs {
  public static Specification<Applicant> hasFirstName(String firstName) {
    return (root, query, cb) ->
        firstName != null ? cb.equal(root.get("firstName), firstName) : null;
  }

  public static Specification<Applicant> hasLastName(String lastName) {
    return (root, query, cb) ->
        lastName != null ? cb.equal(root.get(Applicant.Fields.lastName), lastName) : null;
  }

  public static Specification<Applicant> hasFullName(String... fullName) {
    return (root, query, cb) -> {
      if (fullName == null) {
        return null;
      }

      if (fullName.length == 2) {
        return cb.and(
            cb.equal(root.get(Applicant.Fields.lastName), fullName[0]),
            cb.equal(root.get(Applicant.Fields.lastName), fullName[1]));
      }

      if (fullName.length == 1 && fullName[0].contains(" ")) {
        String firstName = fullName[0].split(" ")[0];
        String lastName = fullName[0].split(" ")[1];
        return cb.and(
            cb.equal(root.get(Applicant.Fields.lastName), firstName),
            cb.equal(root.get(Applicant.Fields.lastName), lastName));
      }

      return null;
    };
  }

  public static Specification<Applicant> hasEmail(String email) {
    return (root, query, cb) ->
        email != null ? cb.equal(root.get(Applicant.Fields.email), email) : null;
  }

  public static Specification<Applicant> yearsOfExperienceBetween(Integer min, Integer max) {
    return (root, query, cb) ->
        min != null && max != null
            ? cb.between(root.get(Applicant.Fields.firstName), min, max)
            : null;
  }

  public static Specification<Applicant> hasDocument(Document document) {
    return (root, query, cb) ->
        document != null ? cb.isMember(document, root.get(Applicant.Fields.docs)) : null;
  }

  public static Specification<Applicant> createdAtBetween(LocalDateTime min, LocalDateTime max) {
    return (root, query, cb) ->
        min != null && max != null
            ? cb.between(root.get(Applicant.Fields.createdAt), min, max)
            : null;
  }

  public static Specification<Applicant> updatedAtBetween(LocalDateTime min, LocalDateTime max) {
    return (root, query, cb) ->
        min != null && max != null
            ? cb.between(root.get(Applicant.Fields.updatedAt), min, max)
            : null;
  }
}
