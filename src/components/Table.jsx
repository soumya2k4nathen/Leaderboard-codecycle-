"use client";

import * as React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button"; // Ensure correct import paths
import { Input } from "@/components/ui/input"; // Ensure correct import paths
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; // Ensure correct import paths

// Sample data
const initialData = [
  { col1: "Item 1", col2: "Data 1", col3: "Info 1" },
  { col1: "Item 2", col2: "Data 2", col3: "Info 2" },
  { col1: "Hi", col2: "Data 3", col3: "Info 3" },
  { col1: "Item 1", col2: "Data 1", col3: "Info 1" },
  { col1: "Item 2", col2: "Data 2", col3: "Info 2" },
  { col1: "Item 3", col2: "Data 3", col3: "Info 3" },
  { col1: "Item 1", col2: "Data 1", col3: "Info 1" },
  { col1: "Item 2", col2: "Data 2", col3: "Info 2" },
  { col1: "Item 3", col2: "Data 3", col3: "Info 3" },
  { col1: "Item 1", col2: "Data 1", col3: "Info 1" },
  { col1: "Item 2", col2: "Data 2", col3: "Info 2" },
  { col1: "Item 3", col2: "Data 3", col3: "Info 3" },
  { col1: "Item 1", col2: "Data 1", col3: "Info 1" },
  { col1: "Item 2", col2: "Data 2", col3: "Info 2" },
  { col1: "Item 3", col2: "Data 3", col3: "Info 3" }
  // Add more data as needed
];

// Column definitions without type annotations
const columns = [
  {
    accessorKey: "col1",
    header: "Column 1",
  },
  {
    accessorKey: "col2",
    header: "Column 2",
  },
  {
    accessorKey: "col3",
    header: "Column 3",
  },
];

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState([]);
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [filteredData, setFilteredData] = React.useState(initialData);

  // Function to filter the data based on the global filter
  const filterData = (data, filter) => {
    if (!filter) return data;
    return data.filter((item) =>
      Object.values(item).some((value) =>
        value.toLowerCase().includes(filter.toLowerCase())
      )
    );
  };

  // Update filtered data whenever globalFilter changes
  React.useEffect(() => {
    setFilteredData(filterData(initialData, globalFilter));
  }, [globalFilter]);

  const table = useReactTable({
    data: filteredData,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
      globalFilter,
    },
  });

  return (
    <div className="w-full bg-gray-400 rounded-md  bg-opacity-10 p-9 ">
        <h2 className="text-xl font-bold text-white mx-auto mb-4">LEADERBOARD👑</h2>
      <div className="flex items-center py-4">
        <Input
          placeholder="Search..."
          value={globalFilter}
          onChange={(event) => setGlobalFilter(event.target.value)}
          className="max-w-sm text-white placeholder-white" // Add white text and placeholder color
        />
      </div>
      <div className="rounded-md border border-gray-100 bg-opacity-0"> {/* Glassmorphism effect */}
        <Table className="text-white">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="p-2 text-white text-center bg-gray-800"
                  >
                    {header.isPlaceholder ? null : header.column.columnDef.header}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} className="hover:bg-gray-700"> {/* Optional: Highlight row on hover */}
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="text-white p-2 font-bold border-b border-gray-500 bg-gray-400 bg-opacity-10">
                      {cell.getValue()}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center text-white">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          className="bg-gray-600 text-white border-gray-500" // Customize button color
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="bg-gray-600 text-white border-gray-500" // Customize button color
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  
  );
}




