CREATE TABLE applicant
(
   id BIGSERIAL PRIMARY KEY,
   first_name VARCHAR(100) NOT NULL,
   last_name VARCHAR(100) NOT NULL,
   email VARCHAR(255) NOT NULL UNIQUE,
   years_experience INTEGER,
   phone_number VARCHAR(10),
   resume TEXT,
   created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
   updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

COMMENT ON TABLE applicant IS 'Job applicants information';
COMMENT ON COLUMN applicant.id IS 'Unique identifier for applicant';
COMMENT ON COLUMN applicant.first_name IS 'Applicant first name';
COMMENT ON COLUMN applicant.last_name IS 'Applicant last name';
COMMENT ON COLUMN applicant.email IS 'Applicant email address (unique)';
COMMENT ON COLUMN applicant.years_experience IS 'Years of professional experience';
COMMENT ON COLUMN applicant.phone_number IS 'Contact phone number';
COMMENT ON COLUMN applicant.resume IS 'Resume/CV content in text format';
COMMENT ON COLUMN applicant.created_at IS 'Record creation timestamp';
COMMENT ON COLUMN applicant.updated_at IS 'Record last update timestamp';

CREATE TABLE docs
(
  id BIGSERIAL PRIMARY KEY,
  applicant_id BIGINT NOT NULL,
  document BYTEA NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_docs_applicant
      FOREIGN KEY (applicant_id)
      REFERENCES applicant(id)
      ON DELETE CASCADE
);

COMMENT ON TABLE docs IS 'Document storage for applicants';
COMMENT ON COLUMN docs.id IS 'Unique identifier for document';
COMMENT ON COLUMN docs.applicant_id IS 'Reference to applicant';
COMMENT ON COLUMN docs.document IS 'Binary document content (DOCX, PDF, etc.)';
COMMENT ON COLUMN docs.created_at IS 'Record creation timestamp';
COMMENT ON COLUMN docs.updated_at IS 'Record last update timestamp'