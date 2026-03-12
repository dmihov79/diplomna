package tu.sofia.diplomna.service;

import tu.sofia.diplomna.domain.entity.Document;
import tu.sofia.diplomna.dto.DocumentDto;

import java.util.Collection;
import java.util.Set;

public interface DocumentService {

    public DocumentDto toDto(Document document);

    public Set<DocumentDto> toDtos(Collection<Document> documents);
}
