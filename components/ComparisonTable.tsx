import { Table, Td, Th, Tr } from "@/components/ui/table";

export function ComparisonTable({
  left,
  right,
}: {
  left: string;
  right: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <Table>
        <thead>
          <Tr>
            <Th>Criteria</Th>
            <Th>{left}</Th>
            <Th>{right}</Th>
          </Tr>
        </thead>
        <tbody>
          <Tr><Td>Best for</Td><Td>High-volume recurring purchases</Td><Td>Low-volume ad-hoc buying</Td></Tr>
          <Tr><Td>Pricing</Td><Td>Contracted wholesale tiers</Td><Td>Retail unit pricing</Td></Tr>
          <Tr><Td>Customization</Td><Td>Full print and structural options</Td><Td>Limited catalog choices</Td></Tr>
          <Tr><Td>Supply reliability</Td><Td>Forecasted production planning</Td><Td>In-stock variability</Td></Tr>
        </tbody>
      </Table>
    </div>
  );
}
