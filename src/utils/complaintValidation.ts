import type { ComplaintDraft } from '../types/complaint';

export interface ValidationErrors {
  [key: string]: string;
}

export const ALLOWED_FILE_TYPES = [
  'application/pdf',
  'image/jpeg',
  'image/png',
  'image/jpg',
  'audio/mpeg',
  'audio/wav',
  'audio/mp3',
  'video/mp4',
  'video/quicktime',
];

export const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10 MB limit

export const validateEvidenceFile = (file: File, lang: 'en' | 'hi'): string | null => {
  if (file.size > MAX_FILE_SIZE_BYTES) {
    return lang === 'hi'
      ? 'फाइल आकार 10 MB से अधिक नहीं होना चाहिए।'
      : 'File size must not exceed 10 MB.';
  }

  // Check file type or extension
  const extension = file.name.split('.').pop()?.toLowerCase();
  const validExtensions = ['pdf', 'jpg', 'jpeg', 'png', 'mp3', 'wav', 'mp4', 'mov'];

  if (!validExtensions.includes(extension || '')) {
    return lang === 'hi'
      ? 'अमान्य फाइल प्रकार। केवल PDF, JPG, PNG, MP3, WAV, MP4, MOV की अनुमति है।'
      : 'Unsupported file format. Only PDF, JPG, PNG, MP3, WAV, MP4, MOV are allowed.';
  }

  return null;
};

export const validateComplaintStep1 = (
  draft: ComplaintDraft,
  lang: 'en' | 'hi'
): ValidationErrors => {
  const errors: ValidationErrors = {};

  if (!draft.incidentType) {
    errors.incidentType = lang === 'hi' ? 'घटना का प्रकार चुनें' : 'Please select an incident type.';
  }

  if (!draft.department.trim()) {
    errors.department = lang === 'hi' ? 'संबंधित विभाग/कार्यालय दर्ज करें' : 'Department/Office is required.';
  }

  if (!draft.district.trim()) {
    errors.district = lang === 'hi' ? 'जिला का नाम दर्ज करें' : 'District is required.';
  }

  if (!draft.description.trim()) {
    errors.description = lang === 'hi' ? 'घटना का विवरण दर्ज करें' : 'Description is required.';
  } else if (draft.description.trim().length < 50) {
    errors.description =
      lang === 'hi'
        ? `कम से कम 50 अक्षर लिखें (वर्तमान: ${draft.description.trim().length})`
        : `Minimum 50 characters required (Current: ${draft.description.trim().length})`;
  } else if (draft.description.trim().length > 5000) {
    errors.description =
      lang === 'hi'
        ? `अधिकतम 5000 अक्षर ही मान्य हैं (वर्तमान: ${draft.description.trim().length})`
        : `Maximum 5000 characters allowed (Current: ${draft.description.trim().length})`;
  }

  // If identified mode, validate contact info
  if (draft.reportingMode === 'identified') {
    if (!draft.fullName.trim()) {
      errors.fullName = lang === 'hi' ? 'पूरा नाम दर्ज करें' : 'Full name is required.';
    }

    const phoneClean = draft.mobile.replace(/\D/g, '');
    if (!phoneClean || phoneClean.length < 10) {
      errors.mobile =
        lang === 'hi'
          ? '10 अंकों का वैध मोबाइल नंबर दर्ज करें'
          : 'Valid 10-digit mobile number is required.';
    }

    if (draft.email.trim() && !draft.email.includes('@')) {
      errors.email = lang === 'hi' ? 'वैध ईमेल आईडी दर्ज करें' : 'Valid email address required.';
    }
  }

  return errors;
};

export const validateComplaintDeclaration = (
  draft: ComplaintDraft,
  lang: 'en' | 'hi'
): ValidationErrors => {
  const errors: ValidationErrors = {};

  if (!draft.declarationAccurate) {
    errors.declarationAccurate =
      lang === 'hi'
        ? 'आपको जानकारी की सत्यता की पुष्टि करनी होगी।'
        : 'You must confirm the accuracy of the information provided.';
  }

  if (!draft.declarationLegalWarning) {
    errors.declarationLegalWarning =
      lang === 'hi'
        ? 'आपको झूठी शिकायत के वैधानिक परिणामों की स्वीकारोक्ति करनी होगी।'
        : 'You must acknowledge the legal warning regarding false claims.';
  }

  if (!draft.declarationStaticDemo) {
    errors.declarationStaticDemo =
      lang === 'hi'
        ? 'आपको यह स्वीकारना होगा कि यह एक स्टेटिक डेमो पोर्टल है।'
        : 'You must acknowledge that this is a static demonstration portal.';
  }

  return errors;
};
