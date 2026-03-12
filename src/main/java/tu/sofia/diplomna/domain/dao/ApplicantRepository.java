package tu.sofia.diplomna.domain.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import tu.sofia.diplomna.domain.entity.Applicant;

public interface ApplicantRepository
    extends JpaRepository<Applicant, Long>, JpaSpecificationExecutor<Applicant> {}
