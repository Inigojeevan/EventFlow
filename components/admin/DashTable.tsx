// DashTable.tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DashTableProps {
  columns: string[];
  data: any[];
  onEditClick: (rowData: any) => void;
  onDeleteClick: (rowData: any) => void;
}

const DashTable = (props: DashTableProps) => {
  const { columns, data, onEditClick, onDeleteClick } = props;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column, index) => (
            <TableHead className="text-violet-400 text-xl" key={index}>
              {column}
            </TableHead>
          ))}
          <TableHead className="text-violet-400 text-xl text-center">Functions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow className="text-white text-xl" key={rowIndex}>
            {columns.map((column, colIndex) => (
              <TableCell key={colIndex}>{row[column]}</TableCell>
            ))}
            <TableCell>
              <div className="flex flex-row gap-3 justify-center">
                <button
                  className="bg-green-500 hover:bg-green-700 hover:shadow-green-500 shadow-md duration-200 ease-in-out w-16 text-white text-base p-3 rounded-xl"
                  onClick={() => onEditClick(row)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 hover:shadow-red-500 shadow-md duration-200 ease-in-out w-16 text-white text-base rounded-xl"
                  onClick={() => onDeleteClick(row)}
                >
                  Delete
                </button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DashTable;
