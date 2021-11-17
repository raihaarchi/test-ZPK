import tableFiles from './tableFiles';
import tableDocuments from './tableDocuments';
import { dataType } from '../../shipmentPage/attachments/tableFiles';
import { ParsedUrlQuery } from 'querystring';

export default function attachmentsTable<T extends dataType>(
  data: T[],
  query: ParsedUrlQuery,
) {
  return [
    {
      heading: 'Файлы',
      table: tableFiles(data, query),
    },
    {
      heading: 'Документы',
      table: tableDocuments(query),
    },
  ];
}
