package tu.sofia.diplomna.service;

import tu.sofia.diplomna.domain.entity.Applicant;
import tu.sofia.diplomna.dto.ApplicantDto;

import java.util.List;

public interface ApplicantService {

    public List<ApplicantDto> getAllApplicants();

    public List<ApplicantDto> toDtos(List<Applicant> applicants);

    public ApplicantDto toDto(Applicant applicant);
}
