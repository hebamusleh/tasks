export interface Page<T> {
  docs?: T[];
  rows?: T[];
  currentPage?: number;
  totalPages?: number;
  limit?: number;
  count?: number;
}