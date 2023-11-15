export interface ResponseDataList<T> {
  items: T[];
  meta: {
    totalItems: number,
    itemCount: number,
    itemsPerPages: number,
    totalPages: number,
    currentPage: number
  };
}
