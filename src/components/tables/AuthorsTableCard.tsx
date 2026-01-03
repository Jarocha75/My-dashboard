import { authorsData, type Author } from "@/data/authorsData";
import {
  Card,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import AuthorRow from "./AuthorRow";
import TableHeaderCell from "./TableHeaderCell";
import { AUTHORS_TABLE_CONFIG } from "./authorsTableConfig";

const AuthorsTableCard = () => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "20px",
        height: { xs: "auto", sm: 320, lg: 520 },
        background: theme.palette.card.overlay,
        backdropFilter: "blur(120px)",
      }}
    >
      <Stack sx={{ px: 2.5, pt: 2.5, pb: 1.5 }}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: 18,
            color: theme.palette.text.primary,
          }}
        >
          {AUTHORS_TABLE_CONFIG.title}
        </Typography>
      </Stack>

      <TableContainer>
        <Table sx={{ width: "100%" }}>
          <TableHead>
            <TableRow>
              {AUTHORS_TABLE_CONFIG.columns.map((column) => (
                <TableHeaderCell
                  key={column.id}
                  label={column.label}
                  align={column.align}
                />
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {authorsData.map((author: Author) => (
              <AuthorRow key={author.email} author={author} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default AuthorsTableCard;
