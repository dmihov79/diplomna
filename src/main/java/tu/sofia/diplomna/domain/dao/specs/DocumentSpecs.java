package tu.sofia.diplomna.domain.dao.specs;

import org.springframework.data.jpa.domain.Specification;
import tu.sofia.diplomna.domain.entity.Applicant;
import tu.sofia.diplomna.domain.entity.Document;

public class DocumentSpecs {

  public static Specification<Document> hasApplicant(Applicant applicant) {
    return (root, query, cb) ->
        applicant != null ? cb.equal(root.get(Document.Fields.applicant), applicant) : null;
  }
}
