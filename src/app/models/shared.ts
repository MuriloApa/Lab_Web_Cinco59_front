export interface ResponseDataList<T> {
  items: T[];
  meta: {
    totalItens: number,
    itemCount: number,
    itemsPerPages: number,
    totalPages: number,
    currentPage: number
  };
}
