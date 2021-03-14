
/**
 * Used for filtering and paging results for getAll requests
 */
export default interface URLParams {
  q?: string;
  limit?: number;
  offset?: number;
  from?: string;
  to?: string;
  sort?: string;
  [key: string]: any;
}

