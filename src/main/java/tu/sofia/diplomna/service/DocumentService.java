package tu.sofia.diplomna.service;

import java.util.Collection;
import java.util.Set;
import org.springframework.lang.NonNull;
import tu.sofia.diplomna.domain.entity.Document;
import tu.sofia.diplomna.dto.DocumentDto;

public interface DocumentService {

  public Document findById(@NonNull Long documentId);

  public DocumentDto toDto(Document document);

  public Set<DocumentDto> toDtos(Collection<Document> documents);
}
