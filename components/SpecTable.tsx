import { Table, Td, Th, Tr } from "@/components/ui/table";

export function SpecTable({ slug }: { slug: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <Table>
        <thead>
          <Tr><Th>Specification</Th><Th>Details</Th></Tr>
        </thead>
        <tbody>
          <Tr><Td>Product</Td><Td>{slug.replaceAll("-", " ")}</Td></Tr>
          <Tr><Td>Board options</Td><Td>White SBS, kraft, corrugated, grease-resistant liners</Td></Tr>
          <Tr><Td>Sizes</Td><Td>8-inch to 20-inch options and custom die-cuts</Td></Tr>
          <Tr><Td>Printing</Td><Td>1-color to full-color print with proof approval</Td></Tr>
          <Tr><Td>MOQ</Td><Td>Program-dependent, optimized for wholesale volume</Td></Tr>
          <Tr><Td>Lead time</Td><Td>Stock and custom production windows available</Td></Tr>
        </tbody>
      </Table>
    </div>
  );
}
