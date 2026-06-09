import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Footer = () => (
  <Box
    className="footer"
    component="footer"
  >
    <Box sx={{ padding: "24px 0" }}>
      <Container>
        <Typography
          sx={{
            textAlign: "center",
            color: "grey.600",
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: 12,
            letterSpacing: "0.04em",
          }}
        >
          &copy; {new Date().getFullYear()} Genivere. All rights reserved.
        </Typography>
      </Container>
    </Box>
  </Box>
);

export default Footer;
