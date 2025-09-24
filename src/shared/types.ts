export interface ParamsType {
  industry: number;
  professional_role: number;
  per_page: number;
  area: number;
  text: string;
  page: number;
}

export interface VacancyType {
  id: string;
  employerName: string;
  name: string;
  experience: string;
  salary: {
    from: number | null;
    to: number | null;
  };
  workFormat: string;
  area: string;
  requirement: string;
  responsibility: string;
}

export interface ResponseType {
  page: number;
  pages: number;
  items: {
    id: string;
    employer: {
      name: string;
    };
    name: string;
    experience: {
      id: string;
    };
    salary: {
      from: number | null;
      to: number | null;
    } | null;
    work_format: [{ id: string }];
    area: {
      name: string;
    };
    snippet: {
      requirement: string | null;
      responsibility: string | null;
    };
  }[];
}
