package tu.sofia.diplomna.service;

import java.util.List;
import tu.sofia.diplomna.domain.entity.Applicant;
import tu.sofia.diplomna.dto.ApplicantDto;

public interface ApplicantService {

  public List<ApplicantDto> getAllApplicants();

  public List<ApplicantDto> toDtos(List<Applicant> applicants);

  public ApplicantDto toDto(Applicant applicant);
}
