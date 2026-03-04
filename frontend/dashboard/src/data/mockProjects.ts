export type ProjectStatus = 'COMPLETED' | 'IN PROGRESS' | 'REVIEW' | 'DRAFT';

export type ProjectCategory =
  | 'Residential'
  | 'Commercial'
  | 'Urban Design'
  | 'Interior';

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  updatedAt: string;
  fileSize: string;
  status: ProjectStatus;
}

export const projects: Project[] = [
  {
    id: 'P-1001',
    name: 'Torre Alameda',
    category: 'Commercial',
    updatedAt: '2026-03-03 14:21',
    fileSize: '2.4 GB',
    status: 'IN PROGRESS',
  },
  {
    id: 'P-1002',
    name: 'Villa Cedros',
    category: 'Residential',
    updatedAt: '2026-03-02 09:12',
    fileSize: '980 MB',
    status: 'REVIEW',
  },
  {
    id: 'P-1003',
    name: 'Centro Cívico Norte',
    category: 'Urban Design',
    updatedAt: '2026-02-28 18:45',
    fileSize: '3.1 GB',
    status: 'COMPLETED',
  },
  {
    id: 'P-1004',
    name: 'Hotel Brisa Marina',
    category: 'Commercial',
    updatedAt: '2026-02-27 11:09',
    fileSize: '1.7 GB',
    status: 'DRAFT',
  },
  {
    id: 'P-1005',
    name: 'Loft Industrial 73',
    category: 'Interior',
    updatedAt: '2026-03-01 16:33',
    fileSize: '740 MB',
    status: 'IN PROGRESS',
  },
];

export const categories: Array<ProjectCategory | 'All'> = [
  'All',
  'Residential',
  'Commercial',
  'Urban Design',
  'Interior',
];

export const statuses: Array<ProjectStatus | 'All'> = [
  'All',
  'COMPLETED',
  'IN PROGRESS',
  'REVIEW',
  'DRAFT',
];
