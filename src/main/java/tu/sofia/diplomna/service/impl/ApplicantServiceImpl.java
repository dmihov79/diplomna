package tu.sofia.diplomna.service.impl;

import lombok.AllArgsConstructor;
import java.util.List;
import org.springframework.stereotype.Service;
import tu.sofia.diplomna.domain.dao.ApplicantRepository;
import tu.sofia.diplomna.domain.entity.Applicant;
import tu.sofia.diplomna.dto.ApplicantDto;
import tu.sofia.diplomna.service.ApplicantService;
import tu.sofia.diplomna.service.DocumentService;

@Service
@AllArgsConstructor
public class ApplicantServiceImpl implements ApplicantService {

    private final ApplicantRepository applicantRepository;
    private final DocumentService documentService;

    @Override
    public List<ApplicantDto> getAllApplicants() {
        return toDtos(applicantRepository.findAll());
    }

    @Override
    public List<ApplicantDto> toDtos(List<Applicant> applicants) {
       return applicants.parallelStream().map(this::toDto).toList();
    }

    @Override
    public ApplicantDto toDto(Applicant applicant) {
        return new ApplicantDto(applicant.getId(), applicant.getFirstName(),applicant.getLastName(),applicant.getEmail(), applicant.getYearsOfExperience(), documentService.toDtos(applicant.getDocs()), applicant.getPhoneNumber(), applicant.getResume(), applicant.getCreatedAt(), applicant.getUpdatedAt());
    }
}
