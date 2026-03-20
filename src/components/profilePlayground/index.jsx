import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Slider from "@mui/material/Slider";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Checkbox from "@mui/material/Checkbox";
import Alert from "@mui/material/Alert";
import Container from "@mui/material/Container";
import { useState } from "react";

function ProfilePlayground() {
  const roles = [
    { value: "developer", label: " Developer" },
    { value: "designer", label: " Designer" },
    { value: "manager", label: " Manager" },
    { value: "analyst", label: " Analyst" },
  ];
  const [settings, setSettings] = useState({
    name: "Alice",
    surname: "Smith",
    avatarSize: 40,
    role: "developer",
    buttonColor: "primary",
    buttonSize: "medium",
    isOnline: false,
    cardVariant: "elevation",
    showAlert: false,
  });
  const handleChange = (field, value) => {
    setSettings({ ...settings, [field]: value });
  };
  return (
    <Container sx={{ display: "flex", gap: 4, p: 4 }}>
      <Container
        sx={{
          p: 3,
          borderRadius: 3,
          boxShadow: 3,
          bgcolor: "background.paper",
        }}
      >
        <Typography variant="h6" mb={2}>
          Profile Card
        </Typography>
        <Card
          variant={settings.cardVariant === "outlined" ? "outlined" : undefined}
          sx={{
            p: 2,
            transition: "0.3s",
            boxShadow: settings.cardVariant === "elevation" ? 3 : 0,
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: 6,
            },
          }}
        >
          <CardContent>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="start"
              gap={2}
            >
              <Box display="flex" gap={3}>
                <Avatar
                  sx={{
                    width: settings.avatarSize,
                    height: settings.avatarSize,
                    transition: "0.3s",
                    bgcolor: `${settings.buttonColor}.main`,
                  }}
                >
                  {settings.name[0]}
                  {settings.surname[0]}
                </Avatar>
                <Box display="flex" flexDirection="column">
                  <Typography variant="h6">
                    {settings.name} {settings.surname}
                  </Typography>

                  <Typography
                    sx={{
                      color: settings.isOnline ? "green" : "gray",
                    }}
                  >
                    {settings.isOnline ? "● Online" : "○ Offline"}
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  mb: 2,
                  px: 2,
                  py: 0.5,
                  border: 1,
                  borderRadius: 2,
                  fontSize: 14,
                  fontWeight: 500,

                  bgcolor: settings.isOnline
                    ? `${settings.buttonColor}.main`
                    : "transparent",

                  color: settings.isOnline
                    ? "white"
                    : `${settings.buttonColor}.main`,
                  borderColor: `${settings.buttonColor}.main`,
                  transition: "0.3s",
                }}
              >
                {roles.find((r) => r.value === settings.role)?.label}
              </Box>
            </Box>
          </CardContent>
          <CardActions
            sx={{
              justifyContent: "space-around",
              gap: 1,
              borderTop: 1,
              borderColor: "divider",
              padding: 2,
            }}
          >
            <Button
              size={settings.buttonSize}
              variant="contained"
              color={settings.buttonColor}
            >
              Message
            </Button>
            <Button
              size={settings.buttonSize}
              variant="outlined"
              color={settings.buttonColor}
            >
              Offer Job
            </Button>
          </CardActions>
        </Card>
      </Container>
      <Container
        sx={{
          p: 3,
          borderRadius: 3,
          boxShadow: 3,
          bgcolor: "background.paper",
        }}
      >
        <Typography variant="h6" mb={2}>
          Settings
        </Typography>

        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Name"
            value={settings.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />

          <TextField
            label="Surname"
            value={settings.surname}
            onChange={(e) => handleChange("surname", e.target.value)}
          />

          <Select
            fullWidth
            value={settings.role}
            onChange={(e) => handleChange("role", e.target.value)}
          >
            {roles.map((role) => (
              <MenuItem key={role.value} value={role.value}>
                {role.label}
              </MenuItem>
            ))}
          </Select>

          <Box>
            <Typography>Avatar size: {settings.avatarSize}px</Typography>
            <Slider
              value={settings.avatarSize}
              min={30}
              max={120}
              onChange={(e, value) => handleChange("avatarSize", value)}
            />
          </Box>

          <RadioGroup
            row
            value={settings.buttonColor}
            onChange={(e) => handleChange("buttonColor", e.target.value)}
          >
            <FormControlLabel
              value="primary"
              control={<Radio />}
              label="Primary"
            />
            <FormControlLabel
              value="secondary"
              control={<Radio />}
              label="Secondary"
            />

            <FormControlLabel
              value="success"
              control={<Radio />}
              label="Success"
            />
            <FormControlLabel value="error" control={<Radio />} label="Error" />
          </RadioGroup>
          <RadioGroup
            row
            value={settings.buttonSize}
            onChange={(e) => handleChange("buttonSize", e.target.value)}
          >
            <FormControlLabel value="small" control={<Radio />} label="Small" />
            <FormControlLabel
              value="medium"
              control={<Radio />}
              label="Medium"
            />
            <FormControlLabel value="large" control={<Radio />} label="Large" />
          </RadioGroup>
          <Box display="flex" alignItems="center">
            <Switch
              checked={settings.isOnline}
              onChange={(e) => handleChange("isOnline", e.target.checked)}
            />
            <Typography>Online</Typography>
          </Box>

          <RadioGroup
            value={settings.cardVariant}
            onChange={(e) => handleChange("cardVariant", e.target.value)}
          >
            <FormControlLabel
              value="elevation"
              control={<Radio />}
              label="Shadow"
            />
            <FormControlLabel
              value="outlined"
              control={<Radio />}
              label="Outline"
            />
          </RadioGroup>

          <Box display="flex" alignItems="center">
            <Checkbox
              checked={settings.showAlert}
              onChange={(e) => handleChange("showAlert", e.target.checked)}
            />
            <Typography>Show Alert</Typography>
          </Box>
        </Box>
      </Container>
    </Container>
  );
}
export default ProfilePlayground;
