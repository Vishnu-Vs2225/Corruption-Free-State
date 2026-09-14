export interface OfficialSource {
  id: string;
  title: string;
  titleHi: string;
  description: string;
  descriptionHi: string;
  url: string;
  authority: string;
  authorityHi: string;
  verified: true;
}

export interface TransparencyPrinciple {
  id: string;
  title: string;
  titleHi: string;
  description: string;
  descriptionHi: string;
  iconName: string;
}

export interface InformationArea {
  id: string;
  title: string;
  titleHi: string;
  description: string;
  descriptionHi: string;
  route: string;
  iconName: string;
}

export interface BudgetItem {
  id: string;
  sector: string;
  sectorHi: string;
  allocated: string;
  spent: string;
  transparencyScore: string;
  status: string;
  statusHi: string;
  officialSourceUrl?: string;
}

export interface TenderDemo {
  id: string;
  reference: string;
  title: string;
  titleHi: string;
  department: string;
  departmentHi: string;
  value: string;
  publishDate: string;
  closingDate: string;
  status: string;
  statusHi: string;
  category: string;
  categoryHi: string;
  isDemo: true;
}

export interface AssetItem {
  id: string;
  officialName: string;
  officialNameHi: string;
  designation: string;
  designationHi: string;
  declarationYear: string;
  movableAssets: string;
  immovableAssets: string;
  verifiedStatus: string;
  verifiedStatusHi: string;
  isDemo: true;
}

export interface RTIStep {
  step: number;
  title: string;
  titleHi: string;
  description: string;
  descriptionHi: string;
}

export interface CitizenCharterItem {
  id: string;
  service: string;
  serviceHi: string;
  timeline: string;
  timelineHi: string;
  office: string;
  officeHi: string;
  source: string;
  sourceHi: string;
}
