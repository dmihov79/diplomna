package tu.sofia.diplomna.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tu.sofia.diplomna.domain.dao.DocumentRepository;
import tu.sofia.diplomna.domain.entity.Document;
import tu.sofia.diplomna.dto.DocumentDto;
import tu.sofia.diplomna.service.DocumentService;

import java.util.Collection;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class DocumentServiceImpl implements DocumentService {

    private final DocumentRepository documentRepository;

    @Override
    public Set<DocumentDto> toDtos(Collection<Document> documents) {
        return documents.parallelStream().map(this::toDto).collect(Collectors.toSet());
    }

    @Override
    public DocumentDto toDto(Document document) {
        return new DocumentDto(document.getId(), Long.valueOf(document.getDocument().length), document.getDocumentName());
    }
}
