package tu.sofia.diplomna.domain.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import tu.sofia.diplomna.domain.entity.Document;

public interface DocumentRepository
    extends JpaRepository<Document, Long>, JpaSpecificationExecutor<Document> {}
