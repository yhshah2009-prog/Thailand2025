import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export interface CostItem {
  item: string;
  cost: string;
  status: "paid" | "pending" | "estimated";
  notes?: string;
}

interface CostTableProps {
  items: CostItem[];
  total: string;
  totalLabel: string;
}

export default function CostTable({ items, total, totalLabel }: CostTableProps) {
  const statusConfig = {
    paid: { label: "✅ Paid", className: "bg-green-600 text-white" },
    pending: { label: "⚠️ Pending", className: "bg-amber-600 text-white" },
    estimated: { label: "Estimate", className: "bg-blue-600 text-white" },
  };

  return (
    <div className="rounded-md border border-border overflow-hidden" data-testid="table-costs">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="font-semibold">Item</TableHead>
            <TableHead className="font-semibold">Cost (₹)</TableHead>
            <TableHead className="font-semibold">Status</TableHead>
            <TableHead className="font-semibold">Notes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item, index) => (
            <TableRow key={index} data-testid={`row-cost-${index}`}>
              <TableCell className="font-medium" data-testid="text-cost-item">{item.item}</TableCell>
              <TableCell className="font-semibold" data-testid="text-cost-amount">{item.cost}</TableCell>
              <TableCell>
                <Badge 
                  className={statusConfig[item.status].className}
                  data-testid="badge-cost-status"
                >
                  {statusConfig[item.status].label}
                </Badge>
              </TableCell>
              <TableCell className="text-sm text-muted-foreground" data-testid="text-cost-notes">
                {item.notes}
              </TableCell>
            </TableRow>
          ))}
          <TableRow className="bg-primary/10 font-bold">
            <TableCell className="text-lg" data-testid="text-total-label">{totalLabel}</TableCell>
            <TableCell className="text-lg" data-testid="text-total-amount">{total}</TableCell>
            <TableCell colSpan={2}></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
