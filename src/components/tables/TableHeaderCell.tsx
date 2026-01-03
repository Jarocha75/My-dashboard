import { TableCell, Typography, useTheme } from "@mui/material";

interface TableHeaderCellProps {
  label: string;
  align?: "left" | "right" | "center";
}

const TableHeaderCell = ({ label, align = "left" }: TableHeaderCellProps) => {
  const theme = useTheme();

  return (
    <TableCell align={align} sx={{ px: 2, py: 1.5 }}>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: 12,
          textTransform: "uppercase",
          color: theme.palette.text.secondary,
        }}
      >
        {label}
      </Typography>
    </TableCell>
  );
};

export default TableHeaderCell;
