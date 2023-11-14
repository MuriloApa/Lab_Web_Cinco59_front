export interface ResponseDataList<T> {
  item: T[];
  meta: {
    totalItens: number,
    itemCount: number,
    itemsPerPages: number,
    totalPages: number,
    currentPage: number
  };
}
