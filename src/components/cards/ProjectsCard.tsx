import Avatar01 from "@/assets/avatars/Avatar01.jpg";
import Avatar02 from "@/assets/avatars/Avatar02.jpg";
import Avatar03 from "@/assets/avatars/Avatar03.jpg";
import Avatar04 from "@/assets/avatars/Avatar04.jpg";
import Avatar05 from "@/assets/avatars/Avatar05.jpg";
import atlassianLogo from "@/assets/logos/atlassian.svg";
import chakraLogo from "@/assets/logos/chakra.svg";
import jiraLogo from "@/assets/logos/jira.svg";
import netlixLogo from "@/assets/logos/netflix.svg";
import slackLogo from "@/assets/logos/slack.svg";
import spotifyLogo from "@/assets/logos/spotify.svg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Card,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import ProjectRow from "../projects/ProjectRow";
import {
  cardStyles,
  typographyStyles,
  mergeSx,
} from "@/styles/commonStyles";

const CARD_CONTENT = {
  title: "Projects",
  subtitle: "30 done this month",
  tableHeaders: {
    companies: "Companies",
    members: "Members",
    budget: "Budget",
    completion: "Completion",
  },
};

const projects = [
  {
    company: "Chakra Soft UI Version",
    logo: chakraLogo,
    members: [Avatar01, Avatar02, Avatar03, Avatar04, Avatar05],
    budget: 14000,
    completion: 60,
  },
  {
    company: "Add Progress Track",
    logo: atlassianLogo,
    members: [Avatar01, Avatar02, Avatar03],
    budget: 3000,
    completion: 10,
  },
  {
    company: "Fix Platform Errors",
    logo: slackLogo,
    members: [Avatar01, Avatar02, Avatar03, Avatar04],
    budget: null,
    completion: 100,
  },
  {
    company: "Launch our Mobile App",
    logo: spotifyLogo,
    members: [Avatar01, Avatar02, Avatar03, Avatar04, Avatar05],
    budget: 32000,
    completion: 100,
  },
  {
    company: "Add the New Pricing Page",
    logo: jiraLogo,
    members: [Avatar01, Avatar02],
    budget: 400,
    completion: 25,
  },
  {
    company: "Redesign New Online Shop",
    logo: netlixLogo,
    members: [Avatar01, Avatar02, Avatar03],
    budget: 7600,
    completion: 40,
  },
];

const ProjectsCard = () => {
  const theme = useTheme();

  return (
    <Card
      sx={mergeSx(cardStyles.basicCard(theme), {
        p: { xs: 2, md: 3 },
      })}
    >
      <IconButton
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          color: theme.palette.text.secondary,
          zIndex: 10,
        }}
      >
        <MoreVertIcon />
      </IconButton>

      {/* Header */}
      <Stack mb={3}>
        <Typography sx={typographyStyles.cardTitle(theme)}>
          {CARD_CONTENT.title}
        </Typography>
        <Typography
          sx={mergeSx(typographyStyles.bodySecondary(theme), {
            color: "#38E68F",
          })}
        >
          ● {CARD_CONTENT.subtitle}
        </Typography>
      </Stack>

      <TableContainer>
        <Table
          sx={{
            "& th": {
              fontSize: 12,
              color: theme.palette.text.secondary,
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            },
            "& td": {
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              color: theme.palette.text.primary,
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>{CARD_CONTENT.tableHeaders.companies}</TableCell>
              <TableCell>{CARD_CONTENT.tableHeaders.members}</TableCell>
              <TableCell>{CARD_CONTENT.tableHeaders.budget}</TableCell>
              <TableCell>{CARD_CONTENT.tableHeaders.completion}</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {projects.map((project) => (
              <ProjectRow
                key={project.company}
                company={project.company}
                logo={project.logo}
                members={project.members}
                budget={project.budget}
                completion={project.completion}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default ProjectsCard;
