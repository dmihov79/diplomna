package tu.sofia.diplomna.domain.dao.specs;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.Specification;
import tu.sofia.diplomna.domain.entity.Applicant;
import tu.sofia.diplomna.domain.entity.Document;
import tu.sofia.diplomna.domain.entity.Document_;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class DocumentSpecs {

  public static Specification<Document> hasApplicant(Applicant applicant) {
    return (root, query, cb) ->
        applicant != null ? cb.equal(root.get(Document_.applicant), applicant) : null;
  }
}
