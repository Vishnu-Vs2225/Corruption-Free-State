export type TrackingStatus =
  | 'received'
  | 'under_review'
  | 'information_required'
  | 'action_in_progress'
  | 'resolved'
  | 'closed';

export interface TrackingEvent {
  id: string;
  status: TrackingStatus;
  title: string;
  titleHi: string;
  description: string;
  descriptionHi: string;
  date?: string | null;
  completed: boolean;
  active?: boolean;
}

export interface DemoComplaint {
  reference: string;
  category: string;
  categoryHi: string;
  location: string;
  locationHi: string;
  status: TrackingStatus;
  isDemo: true;
  lastUpdatedSample?: string;
  lastUpdatedSampleHi?: string;
  timeline: TrackingEvent[];
}

export interface TrackingState {
  reference: string;
  status: 'idle' | 'loading' | 'success' | 'error' | 'demo';
  result: DemoComplaint | null;
  error: string | null;
  isDemo: boolean;
}
