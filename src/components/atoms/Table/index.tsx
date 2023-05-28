import './Table.scss';

interface TableProps {
  dataHeader: Record<string, any>;
  dataBody: Record<string, any>;
  onClickRows?: (index: number) => void;
}

const Table = ({ dataBody, dataHeader, onClickRows }: TableProps) => {
  return (
    <table className='table_contain'>
      <tr className='table_header'>
        {dataHeader?.map((element: any) => {
          return <th className='table_item_header'>{element}</th>;
        })}
      </tr>
      {dataBody?.map((_: any, index: number) => {
        return (
          <tr className='table_rows'>
            {dataBody[index]?.map((element: any) => {
              return (
                <td
                  className='table_item'
                  onClick={() => onClickRows && onClickRows(index)}
                >
                  {element}
                </td>
              );
            })}
          </tr>
        );
      })}
    </table>
  );
};

export default Table;
