import tableFiles, { dataType } from './tableFiles';
import tableDocuments from './tableDocuments';
import tableAllDocuments from './tableAllDocuments';
import { ParsedUrlQuery } from 'querystring';

export default function attachmentsTable<T extends dataType>(
  data: T[],
  query: ParsedUrlQuery,
) {
  return [
    {
      heading: 'Файлы',
      table: tableFiles<T[]>(data, query),
    },
    {
      heading: 'Документы',
      table: tableDocuments(query),
    },
    {
      heading: '',
      table: tableAllDocuments(query),
    },
  ];
}
