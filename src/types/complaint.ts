export type ReportingMode = 'identified' | 'anonymous';

export type IncidentType =
  | 'bribery'
  | 'misuseOfResources'
  | 'procurementIrregularity'
  | 'fraud'
  | 'abuseOfAuthority'
  | 'conflictOfInterest'
  | 'other';

export interface EvidenceFile {
  id: string;
  name: string;
  size: number;
  type: string;
  url?: string;
  file?: File;
}

export interface ComplaintDraft {
  reportingMode: ReportingMode | null;

  // Incident Info
  incidentType: IncidentType | '';
  incidentDate: string;
  incidentTime: string;

  // Location & Office
  state: string;
  district: string;
  cityVillage: string;
  department: string;

  // Official Involved (Optional)
  officialName: string;
  officialDesignation: string;
  officialDepartment: string;

  // Description
  description: string;

  // Evidence Files
  evidence: EvidenceFile[];

  // Contact Info (Identified mode)
  fullName: string;
  mobile: string;
  email: string;
  preferredContact: 'phone' | 'email' | 'none';

  // Declarations
  declarationAccurate: boolean;
  declarationLegalWarning: boolean;
  declarationStaticDemo: boolean;
}

export const initialComplaintDraft: ComplaintDraft = {
  reportingMode: null,
  incidentType: '',
  incidentDate: '',
  incidentTime: '',
  state: 'Jharkhand',
  district: '',
  cityVillage: '',
  department: '',
  officialName: '',
  officialDesignation: '',
  officialDepartment: '',
  description: '',
  evidence: [],
  fullName: '',
  mobile: '',
  email: '',
  preferredContact: 'phone',
  declarationAccurate: false,
  declarationLegalWarning: false,
  declarationStaticDemo: false,
};
