import React from "react";
import { createTheme, ThemeProvider} from "@mui/material/styles";
import {
  Box,
  Typography,
  Container,
  List,
  ListItem,
  Link,
  CssBaseline,
} from "@mui/material";

import { ArrowOutward } from "@mui/icons-material";
const caseStudies = [
  { title: "Case Study Name", subtitle: "Case study subtext here" },
  { title: "Case Study Name", subtitle: "Case study subtext here" },
  { title: "Case Study Name", subtitle: "Case study subtext here" },
  { title: "Case Study Name", subtitle: "Case study subtext here" },
  { title: "Case Study Name", subtitle: "Case study subtext here" },
];

// Define a custom theme to match the Figma design's colors and typography
const theme = createTheme({
  palette: {
    primary: {
      main: "#15203A", // Dark blue/black from the Figma
    },
    secondary: {
      main: "#F2F2F2FA", // Light gray background from the Figma
    },
    text: {
      primary: "#ffffff", // White text for dark backgrounds
      secondary: "#15203A", // Dark text for light backgrounds
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontSize: "64px",
      fontWeight: 600,
      color: "#1a202c",
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 700,
      color: "#15203A",
      "@media (max-width:600px)": {
        fontSize: "1.8rem",
      },
    },
    h3: {
      fontFamily: "Open Sans, sans-serif ",

      fontSize: "32px",
      fontWeight: 400,
      color: "#15203A",
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    body1: {
      fontSize: "1.125rem",
      lineHeight: 1.75,
      color: "#4a5568", // Slightly darker gray for body text
    },
    body2: {
      fontSize: "1rem",
      lineHeight: 1.5,
      color: "#4a5568",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "12px 24px",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        },
      },
    },
  },
});



const ProjectDetail: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          overflowX: "hidden",
        }}
      >
        {/* Page 10.jpg - Hero Section */}
        {/* Hero Section */}
        <Box
          sx={{
            width: "100%",
            minHeight: "1024px",
            backgroundColor: "#15203A",
            px: { xs: "20px", sm: "94px", md: "92px" },
            py: { xs: "100px", sm: "234px" },
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "1255px",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 6, sm: "105px", md: "105px" },
              alignItems: { xs: "start", sm: "start", md: "center" },
            }}
          >
            {/* Image */}
            <Box
              component="img"
              src="public/images/pyush-anand 1 (1).png" // Replace with your actual image path
              alt="Pyush Anand"
              sx={{
                width: "100%",
                maxWidth: { xs: "352px", sm: "352px", md: "512px" },
                height: { xs: "352px", sm: "352px", md: "512px" },
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />

            {/* Text Box */}
            <Box
              sx={{
                width: "100%",
                maxWidth: "638px",
                display: "flex",
                flexDirection: "column",
                gap: { xs: "0px", sm: "24px", md: "24px" },
                color: "#FFFFFFFA",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: { xs: "32px", sm: "64px", md: "64px" },
                  lineHeight: "69px",
                  color: "#FFFFFFFA",
                }}
              >
                Pyush Anand
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Open Sans, sans-serif",
                  fontWeight: 400,
                  fontSize: { xs: "16px", sm: "32px", md: "32px" },
                  lineHeight: "48px",
                  color: "#FFFFFFFA",
                  mb: 4,
                }}
              >
                Lead UI/UX Designer | Product Designer
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                  fontSize: { xs: "16px", sm: "24px", md: "24px" },
                  lineHeight: { xs: "25px", sm: "36px", md: "36px" },
                  whiteSpace: "pre-line",
                  color: "#FFFFFFFA",
                }}
              >
                {
                  "I'm Pyush Anand, a Lead Product Designer | UI/UX Designer with 15+ years of experience in crafting intuitive, user-centric designs. My passion lies in blending creativity with strategy to deliver solutions that align business goals with user needs.\n\nExplore my portfolio to discover how I transform ideas into impactful digital experiences.\n\nLet's create something amazing together!"
                }
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Page 13.png - About Me */}
        {/* About Me Section */}
        <Box
          sx={{
            width: "100%",
            minHeight: "1024px",
            backgroundColor: "#F2F2F2FA",
            px: { xs: 1.5, sm: "94px", md: "94px" },
            py: { xs: "66px", md: "66px" },
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "start",
            alignItems: "flex-start",
          }}
        >
          <Container maxWidth="xl" sx={{ maxWidth: "1282px" }}>
            {/* Heading */}
            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: { xs: "32px", sm: "64px", md: "64px" },
                lineHeight: { xs: "40px", sm: "36px", md: "69px" },
                color: "#15203A",
                textAlign: "start",
                mb: 10,
              }}
            >
              About Me
            </Typography>

            {/* Paragraph */}
            <Box
              sx={{
                maxWidth: "1245px",
                // mx: "auto", // Centers the content horizontally
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                  fontSize: { xs: "16px", sm: "20px", md: "24px" },
                  lineHeight: { xs: "25px", sm: "36px", md: "36px" },

                  color: "#15203A",
                  // textAlign: "justify",
                  textAlign: "start",

                  whiteSpace: "pre-line",
                }}
              >
                {
                  "I'm Pyush Anand, a Lead Product Designer | UI/UX Designer with 15+ years of experience designing user-centric solutions for web, mobile, and enterprise applications. I specialize in User-Centered Design (UCD) methodologies, focusing on user research, persona development, wire-framing, prototyping, and usability testing. With a strong foundation in designing intuitive and effective user interfaces, I strive to align business goals with user needs, ensuring solutions that drive both business success and exceptional user experiences.\n\nProficient in design tools such as Adobe CC, Sketch, Figma, Axure, and InVision, I bring creativity and precision to every project. My certifications in Generative AI for Business Leaders and AI in UX Design equip me to incorporate cutting-edge technologies into my design process, ensuring relevant and future-ready solutions.\n\nI am passionate about setting strong design standards and mentoring teams, empowering new designers and product owners to develop their skills. I also use data-driven insights to inform decisions and improve product outcomes. Through effective collaboration, I have delivered successful designs across various industries, always keeping the user at the center of my design process."
                }
              </Typography>
            </Box>

            <Box sx={{ mt: 4 }}>
              <Box
                component="a"
                href="/resume.pdf" // replace with actual path
                download
                sx={{
                  mt: 8,
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "301px",
                  height: "82px",
                  backgroundColor: theme.palette.primary.main, // or your preferred color
                  color: "white",
                  borderRadius: "12px",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "24px",
                  lineHeight: "36px",
                  letterSpacing: 0,
                  textDecoration: "none",
                  opacity: 1,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#333d4e",
                  },
                }}
              >
                Download Resume
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Page 12.png - User Centered Design Process */}
        <Box
          sx={{
            width: "100%",
            minHeight: "1024px",
            backgroundColor: "#15203A",
            px: { xs: 1.5, sm: "94px", md: "94px " },
            py: { xs: 6, md: 10 },
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "start",
            alignItems: "flex-start",
          }}
        >
          <Container maxWidth="xl" sx={{ maxWidth: "1282px" }}>
            {/* Heading */}
            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: { xs: "32px", sm: "64px", md: "64px" },
                lineHeight: { xs: "40px", sm: "69px", md: "69px" },
                color: "white",
                textAlign: "start",
                mb: 10,
              }}
            >
              User Centered Design Process
            </Typography>

            {/* Process Cards */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: { xs: 4, sm: 6, md: "72px" },
                justifyContent: "start",
              }}
            >
              {/* Design Strategy */}
              <Box sx={{ width: "233px", minHeight: "398px" }}>
                <Box
                  sx={{
                    border: "1px solid #fff",
                    borderRadius: "6px",
                    textAlign: "center",
                    padding: "12px 0",
                    mb: "43px",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 600,
                      fontSize: "20px",
                      color: "white",
                    }}
                  >
                    Design Strategy
                  </Typography>
                </Box>
                <ul
                  style={{
                    color: "white",
                    lineHeight: "36px",
                    paddingLeft: "16px",
                  }}
                >
                  <li>Executive/Business Intent</li>
                  <li>Market Segment</li>
                  <li>General Tasks</li>
                  <li>Technological constraints</li>
                  <li>Legal constraints</li>
                  <li>Marketing/Branding Goals</li>
                  <li>Critical Success Factor</li>
                </ul>
              </Box>

              {/* User Experience (UX) */}
              <Box sx={{ width: "280px", minHeight: "398px" }}>
                <Box
                  sx={{
                    border: "1px solid #fff",
                    borderRadius: "6px",
                    textAlign: "center",
                    padding: "12px 0",
                    mb: "43px",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 600,
                      fontSize: "20px",
                      color: "white",
                    }}
                  >
                    User Experience (UX)
                  </Typography>
                </Box>
                <ul
                  style={{
                    color: "white",
                    lineHeight: "36px",
                    paddingLeft: "16px",
                  }}
                >
                  <li>User Personas</li>
                  <li>Field Studies</li>
                  <li>Data Gathering methods</li>
                  <li>Scenarios</li>
                  <li>Task Flows</li>
                  <li>Task Analysis</li>
                  <li>Primary Noun Architecture</li>
                  <li>Information Architecture</li>
                  <li>Getting Ready for Design</li>
                  <li>Low Fidelity Wireframes</li>
                  <li>High Fidelity Wireframes</li>
                </ul>
              </Box>

              {/* User Interface (UI) */}
              <Box sx={{ width: "233px", minHeight: "398px" }}>
                <Box
                  sx={{
                    border: "1px solid #fff",
                    borderRadius: "6px",
                    textAlign: "center",
                    padding: "12px 0",
                    mb: "43px",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 600,
                      fontSize: "20px",
                      color: "white",
                    }}
                  >
                    User Interface (UI)
                  </Typography>
                </Box>
                <ul
                  style={{
                    color: "white",
                    lineHeight: "36px",
                    paddingLeft: "16px",
                  }}
                >
                  <li>Design is Science and Art</li>
                  <li>Navigation</li>
                  <li>Presentation</li>
                  <li>Content</li>
                  <li>Interaction</li>
                  <li>Screen Elements and Wireframes</li>
                  <li>Accessibility</li>
                  <li>Internationalization</li>
                </ul>
              </Box>

              {/* Usability Testing */}
              <Box sx={{ width: "233px", minHeight: "398px" }}>
                <Box
                  sx={{
                    border: "1px solid #fff",
                    borderRadius: "6px",
                    textAlign: "center",
                    padding: "12px 0",
                    mb: "43px",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 600,
                      fontSize: "20px",
                      color: "white",
                    }}
                  >
                    Usability Testing
                  </Typography>
                </Box>
                <ul
                  style={{
                    color: "white",
                    lineHeight: "36px",
                    paddingLeft: "16px",
                  }}
                >
                  <li>Define a Usability Test</li>
                  <li>Early Prototype Testing</li>
                  <li>Advance Prototype Testing</li>
                  <li>Analysis & Reporting</li>
                  <li>Remote Testing</li>
                  <li>Live Site Analysis</li>
                  <li>Refining Your Facilitating</li>
                  <li>Technique</li>
                  <li>10 Point checklist</li>
                </ul>
              </Box>
            </Box>
          </Container>
        </Box>
        {/*- Latest Case Studies */}
        {/* Problem statement */}
        <Box
          sx={{
            width: "100%",
            minHeight: "1175px",
            bgcolor: "#F2F2F2FA",
            px: { xs: 1.5, sm: "94px", md: "94px" },
            py: "66px",
          }}
        >
          <Container maxWidth="xl" sx={{ maxWidth: "1282px" }}>
            {/* Heading */}
            <Typography
              sx={{
                fontFamily: "Poppins,sans-serif",
                fontWeight: 600,
                fontSize: { xs: "32px",sm:'60px', md: "64px" },
                lineHeight: "69px",
                mb: { xs: 6, sm: 6, md: 6 },
                color: "#15203A",
              }}
            >
              Latest Case Studies
            </Typography>

            {/* Case Study Container */}
            <Box
              sx={{
                width: "100%",
                maxWidth: "1247px",
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              {/* Title */}
              <Typography
                sx={{
                  fontSize: { xs: "16px", sm: "24px", md: "24px" },
                  color: "#15203A",
                  lineHeight: { xs: "26px", sm: "36px", md: "36px" },
                }}
              >
                1. Bill and Payment Screen –{" "}
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    fontWeight: 700,
                    color: "blue",
                    ":hover": { textDecoration: "underline" },
                  }}
                >
                  Download Case Study
                </Link>
              </Typography>

              {/* Design Info */}
              <Typography
                sx={{
                  fontSize: { xs: "16px", sm: "24px", md: "24px" },
                  color: "#15203A",
                  lineHeight: { xs: "26px", sm: "36px", md: "36px" },
                }}
              >
                Design: UI/UX Design
                <br />
                Tools: Figma, Adobe XD,
                <br />
                Technology: B2B Product
              </Typography>

              {/* Problem Statement */}
              <Box>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: "16px", sm: "24px", md: "24px" },
                    lineHeight: { xs: "26px", sm: "36px", md: "36px" },
                    mt: 2,
                    mb: 3,
                    color: "#15203A",
                  }}
                >
                  Problem Statement:
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "16px", sm: "24px", md: "24px" },
                    color: "#15203A",
                    lineHeight: { xs: "26px", sm: "36px", md: "36px" },
                  }}
                >
                  The current overtime pay approval process for exempt employees
                  is manual, time-consuming, and prone to errors. This leads to
                  delays, administrative burden, and employee dissatisfaction.
                  HR and managers spend excessive time processing requests,
                  verifying information, and resolving disputes, causing
                  inefficiencies and compliance risks.
                </Typography>
              </Box>

              {/* Image */}
              <Box
                sx={{
                  mt: { xs: 4, sm: 8, md: 12 },
                  display: "flex",
                  justifyContent: {
                    xs: "flex-start",
                    sm: "flex-start",
                    md: "center",
                    lg: "center",
                  },
                }}
              >
                <img
                  src="public/images/Rectangle 3.png"
                  alt="Case Study UX"
                  style={{
                    width: "100%",
                    maxWidth: "1245px",
                    height: "473px",
                    borderRadius: "10px",
                  }}
                />
              </Box>
            </Box>
          </Container>
        </Box>
        {/* Solution */}
        <Box
          sx={{
            width: "100%",
            minHeight: "942px",
            bgcolor: "#F2F2F2FA",
            px: { xs: 1.5, sm: "94px", md: "94px" },
            py: { xs: "1px", sm: "1px", md: "100px" },
          }}
        >
          <Container maxWidth="xl" sx={{ maxWidth: "1245px" }}>
            <Box
              sx={{
                width: "100%",
                maxWidth: "1245px",
                display: "flex",
                flexDirection: "column",
                gap: 0,
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "16px", sm: "24px", md: "24px" },
                  lineHeight: { xs: "26px", sm: "36px", md: "36px" },
                  color: "#15203A",
                }}
              >
                Solutions:
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "16px", sm: "24px", md: "24px" },
                  color: "#15203A",
                  lineHeight: { xs: "26px", sm: "36px", md: "36px" },
                }}
              >
                The Exempt Overtime Pay Approval Portal automates and
                streamlines the approval process, reducing errors and enhancing
                efficiency. With a user-friendly interface, the portal enables
                faster approvals, reduces administrative workload, and ensures
                compliance with company policies.
              </Typography>
              <Box
                sx={{
                  mt: { xs: 4, sm: 8, md: 12 },
                }}
              >
                <Box
                  component="img"
                  src="public/images/Rectangle 3.png"
                  alt="Case Study UX"
                  style={{
                    width: "100%",
                    maxWidth: "1245px",
                    height: "473px",
                    borderRadius: "10px",
                  }}
                />
              </Box>
            </Box>
          </Container>
        </Box>

        {/* More Case Studies */}

        <Box
          sx={{
            width: "100%",
            minHeight: "1024px",
            bgcolor: "#F2F2F2FA",
            px: { xs: 1.5, sm: "94px", md: "94px" },
            py: "66px",
          }}
        >
          <Container maxWidth="xl">
            <Typography
              sx={{
                fontFamily: "Poppins,sans-serif",
                fontWeight: 600,
                fontSize: { xs: "32px", sm: "64px", md: "64px" },
                lineHeight: { xs: "45px", sm: "69px", md: "69px" },
                mb: { xs: 6, sm: 10, md: 10 },
                color: "#15203A",
              }}
            >
              Explore More Case Studies
            </Typography>
           <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    gap: "36px",
  }}
>
  {caseStudies.map((study, index) => (
    <Box key={index}>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: { xs: "10px", sm: "48px", md: "48px" },
        }}
      >
        {/* Number */}
        <Typography
          sx={{
            fontSize: { xs: "24px", sm: "48px", md: "48px" },
            lineHeight: "36px",
            fontWeight: 400,
            fontFamily: "Poppins,sans-serif",
            color: "#15203A",
            minWidth: "30px", // Optional: keeps numbers aligned
          }}
        >
          {index + 1}.
        </Typography>

        {/* Right Block: Title + Line + Subtitle + Arrow */}
        <Box sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            {/* Title */}
            <Typography
              sx={{
                fontSize: { xs: "24px", sm: "48px", md: "48px" },
                lineHeight: "36px",
                fontWeight: 500,
                fontFamily: "Poppins,sans-serif",
                color: "#15203A",
              }}
            >
              {study.title}
            </Typography>

            {/* Arrow */}
            <a
              href="https://your-casestudy-link.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowOutward
                sx={{
                  fontSize: { xs: "24px", sm: "56px", md: "48px" },
                  color: "#15203A",
                  "&:hover": {
                    color: "#0F172A",
                    transform: "scale(1.2)",
                  },
                }}
              />
            </a>
          </Box>

          {/* Line */}
          <Box
            sx={{
              borderBottom: "3px solid #D4D4D4",
              width: "100%",
              my: 1.5,
            }}
          />

          {/* Subtitle */}
          <Typography
            sx={{
              fontSize: { xs: "16px", sm: "24px", md: "24px" },
              fontWeight: 400,
              fontFamily: "Poppins,sans-serif",
              color: "#15203A",
            }}
          >
            {study.subtitle}
          </Typography>
        </Box>
      </Box>
    </Box>
  ))}
</Box>

          </Container>
        </Box>

        {/* Page 17.png - Certifications */}
        {/* Certifications Section */}
        <Box
          sx={{
            width: "100%",
            minHeight: "776px",
            backgroundColor: "#15203AFA",
            px: { xs: 1.5, sm: "94px", md: "94px" },
            py: "66px",
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Container maxWidth="xl" sx={{ maxWidth: "1226px" }}>
            {/* Heading */}
            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: { xs: "36px", sm: "64px", md: "64px" },
                lineHeight: "69px",
                color: "#ffffff",
                textAlign: { xs: "left", md: "left" },
                mb: 20,
              }}
            >
              Certifications
            </Typography>

            {/* Certificate Grid */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                gap: { xs: 4, md: 7 },
                flexWrap: "wrap",
                maxWidth: "1226px",
                // mx: "auto",
                // px: { xs: 0, md: 1 },
              }}
            >
              {[1, 2, 3].map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    width: "100%",
                    maxWidth: "350px",
                    height: "297px",
                    backgroundColor: "#F9FAFB",
                    overflow: "hidden",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "start",
                  }}
                >
                  <img
                    src="public/images/Certificateofcompletion-2-e1542503069490.jpg"
                    alt={`Certificate ${index}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* Worked With Industry Leaders Section */}
        <Box
          sx={{
            width: "100%",
            minHeight: "704px",
            backgroundColor: "#ffffff",
            px: { xs: 1.5, sm: "94px", md: "94px" },
            py: "66px",
            display: "flex",
            justifyContent: "start",
            alignItems: "flex-start",
          }}
        >
          <Container maxWidth="xl" sx={{ maxWidth: "1226px" }}>
            {/* Heading */}
            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: { xs: "36px", sm: "64px", md: "64px" },
                lineHeight: { xs: "45px", sm: "69px", md: "69px" },
                color: "#15203A",
                textAlign: { xs: "left", md: "left" },
                mb: 12,
              }}
            >
              Worked With Industry Leaders
            </Typography>

            {/* Logo Grid */}
            <Box
  sx={{
    display: "flex",
    justifyContent: { xs: "center", sm: "start", md: "start" },
    gap: { xs: 4, sm: 2.5, md: 10 },
    rowGap: { xs: 6, sm: 8, md: 10 },
    flexWrap: "wrap",
    maxWidth: "1226px",
  }}
>
  {[
    "public/images/logo1.png",
    "public/images/logo2.png",
    "public/images/logo3.jpeg",
    "public/images/logo4.png",
    "public/images/logo5.jpeg",
    "public/images/logo6.png",
  ].map((logo, index) => (
    <Box
      key={index}
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "flex-start",
        width: {
          xs: "179.77px",
          sm: "179.77px",
          md: "341.17px",
        },
        height: {
          xs: "87.69px",
          sm: "87.69px",
          md: "166.43px",
        },
      }}
    >
      <Box
        component="img"
        src={logo}
        alt={`Industry Logo ${index + 1}`}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          mixBlendMode: "multiply",
        }}
      />
    </Box>
  ))}
</Box>

          </Container>
        </Box>

        {/* Let's Collaborate! */}
        <Box
          sx={{
            width: "100%",
            minHeight: "1024px",
            backgroundColor: "#15203A",
            px: { xs: 1.5, sm: "94px", md: "94px" },
            py: "66px",
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Container maxWidth="xl" sx={{ maxWidth: "1226px" }}>
            {/* Heading */}
            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: { xs: "36px", sm: "48px", md: "64px" },
                lineHeight: "69px",
                color: "white",
                mb: 10,
                textAlign: { xs: "left", md: "left" },
              }}
            >
              Let’s Collaborate!
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: { xs: "18px", sm: "20px", md: "24px" },
                lineHeight: "36px",
                color: "white",
                whiteSpace: "pre-line",
                maxWidth: "1200px",
                textAlign: { xs: "left", md: "left" },
                mb: 8,
              }}
            >
              Have a project in mind or just want to say hello? I'd love to hear
              from you! Whether you need help with UI Design, UX Design, Product
              Design, Interaction Design, Graphic Design, Motion Graphic Design,
              User Research, Wire-framing, Prototyping, or creating impactful
              designs, I'm here to bring your ideas to life.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: { xs: "18px", sm: "20px", md: "24px" },
                lineHeight: "36px",
                color: "white",
                whiteSpace: "pre-line",
                maxWidth: "1200px",
                textAlign: { xs: "left", md: "left" },
              }}
            >
              Feel free to reach out to discuss:
            </Typography>
            <List
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: { xs: "18px", sm: "20px", md: "24px" },
                lineHeight: "36px",
                color: "white",
                whiteSpace: "pre-line",
                maxWidth: "1200px",
                textAlign: { xs: "left", md: "left" },
              }}
            >
              {[
                "Freelance or contract opportunities",
                "Collaborations",
                "Design consultations",
                "Anything UX/UI-related",
              ].map((item, index) => (
                <ListItem key={index} sx={{ py: 0 }}>
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 400,
                      fontSize: { xs: "18px", sm: "20px", md: "24px" },
                      lineHeight: "36px",
                      color: "white",
                      whiteSpace: "pre-line",
                      maxWidth: "1200px",
                      textAlign: { xs: "left", md: "left" },
                    }}
                  >
                    • {item}
                  </Typography>
                </ListItem>
              ))}
            </List>
            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: { xs: "18px", sm: "20px", md: "24px" },
                lineHeight: "36px",
                color: "white",
                whiteSpace: "pre-line",
                maxWidth: "1200px",
                textAlign: { xs: "left", md: "left" },
                mt: 6,
                mb: 2,
              }}
            >
              You can contact me via:
            </Typography>
            <List sx={{ color: "white", mb: 4 }}>
              <ListItem sx={{ py: 0 }}>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: { xs: "18px", sm: "20px", md: "24px" },
                    lineHeight: "36px",
                    color: "white",
                    whiteSpace: "pre-line",
                    maxWidth: "1200px",
                    textAlign: { xs: "left", md: "left" },
                  }}
                >
                  • Email: Piyush.anand7@gmail.com
                </Typography>
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: { xs: "18px", sm: "20px", md: "24px" },
                    lineHeight: "36px",
                    color: "white",
                    whiteSpace: "pre-line",
                    maxWidth: "1200px",
                    textAlign: { xs: "left", md: "left" },
                  }}
                >
                  • Phone: +91 9643006703
                </Typography>
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: { xs: "18px", sm: "20px", md: "24px" },
                    lineHeight: "36px",
                    color: "white",
                    whiteSpace: "pre-line",
                    maxWidth: "1200px",
                    textAlign: { xs: "left", md: "left" },
                  }}
                >
                  • LinkedIn:{" "}
                  <Link href="#" color="inherit" underline="hover">
                    Piyush Anand
                  </Link>
                </Typography>
              </ListItem>
            </List>
            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: { xs: "18px", sm: "20px", md: "24px" },
                lineHeight: "36px",
                color: "white",
                whiteSpace: "pre-line",
                maxWidth: "1200px",
                textAlign: { xs: "left", md: "left" },
              }}
            >
              Looking forward to connecting and creating something amazing
              together!
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ProjectDetail;
