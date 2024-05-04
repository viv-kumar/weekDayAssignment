import React, { useState } from "react";
import "./filter.css";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];
const role = [
  "Frontend",
  "Backend",
  "IOS",
  "Flutter",
  "Android",
  "React Native",
  "Tech Lead",
  "Flutter",
];
const remote = ["In-Office", "Hybrid", "Remote"];
const techStack = ["Python", "GoLang", "Java", "c++", "Django", "Flask"];
const minBasePay = ["0L", "10L", "20L", "30L", "40L", "50L"];
const Employees = [
  //   { min: 1, max: 10 },
  //   { min: 11, max: 20 },
  //   { min: 21, max: 50 },
  //   { min: 51, max: 100 },
  //   { min: 101, max: 200 },
  //   { min: 201, max: 500 },
  //   { 500+1 },
  "1-10",
  "11-20",
  "21-30",
  "31-40",
  "51-100",
  "101-200",
  "201-500",
  "500+",
  //   { min: 11, max: 20 },
  //   { min: 21, max: 50 },
  //   { min: 51, max: 100 },
  //   { min: 101, max: 200 },
  //   { min: 201, max: 500 },
  //   { 500+1 },
];

const Experience = [1, 2, 3, 4, , 5, 6, 7, 8, 9, 10];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Filter = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [Roules, setRoles] = useState([]);
  const [Remote, setRemote] = useState([]);
  const [employNum, setemployNum] = React.useState([]);
  const [TechStack, setTechStack] = React.useState([]);
  const [ExperienceYear, seteExperienceYear] = React.useState([]);
  const [MinBasePay, seteMinBasePay] = React.useState([]);

  const handleChange = (event, type) => {
    event.stopPropagation();
    const {
      target: { value },
    } = event;
    if (type === "role") {
      setRoles(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    } else if (type === "NumEmp") {
      setemployNum(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    } else if (type === "exp") {
      seteExperienceYear(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    } else if (type === "remote") {
      setRemote(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    } else if (type === "techStack") {
      setTechStack(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    } else if (type === "minPay") {
      seteMinBasePay(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    }
  };
  const handleDelete = (event, type, value) => {
    event.stopPropagation();
    // const {
    //   target: { value },
    // } = event;
    console.log(value, "value");
    if (type === "role") {
      setRoles(
        // On autofill we get a stringified value.
        (Roules) => Roules.filter((chip) => chip !== value)
      );
    } else if (type === "NumEmp") {
      setemployNum((employNum) => employNum.filter((chip) => chip !== value));
      //   setemployNum(
      //     // On autofill we get a stringified value.
      //     typeof value === "string" ? value.split(",") : value
      //   );
    } else if (type === "exp") {
      seteExperienceYear(
        // On autofill we get a stringified value.
        (ExperienceYear) => ExperienceYear.filter((chip) => chip !== value)
      );
    } else if (type === "remote") {
      setRemote(
        // On autofill we get a stringified value.
        (Remote) => Remote.filter((chip) => chip !== value)
      );
    } else if (type === "techStack") {
      setTechStack(
        // On autofill we get a stringified value.
        (TechStack) => TechStack.filter((chip) => chip !== value)
      );
    } else if (type === "minPay") {
      seteMinBasePay(
        // On autofill we get a stringified value.
        (MinBasePay) => MinBasePay.filter((chip) => chip !== value)
      );
    }
  };
  return (
    <div className="FilterminDiv">
      <div className="FilterminDivDiv">
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-chip-label">Role</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={Roules}
            onChange={(e) => handleChange(e, "role")}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip
                    key={value}
                    label={value}
                    onMouseDown={(event) => {
                      event.stopPropagation();
                    }}
                    onDelete={(e) => handleDelete(e, "role", value)}
                  />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {role.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="FilterminDivDiv">
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-chip-label">No Of Employees</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={employNum}
            onChange={(e) => handleChange(e, "NumEmp")}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => {
                  return (
                    <div>
                      <Chip
                        key={value}
                        label={value}
                        onMouseDown={(event) => {
                          event.stopPropagation();
                        }}
                        onDelete={(e) => handleDelete(e, "NumEmp", value)}
                      />
                    </div>
                  );
                })}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {Employees.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="FilterminDivDiv">
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-chip-label">Experience</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={ExperienceYear}
            onChange={(e) => handleChange(e, "exp")}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip
                    key={value}
                    label={value}
                    onMouseDown={(event) => {
                      event.stopPropagation();
                    }}
                    onDelete={(e) => handleDelete(e, "exp", value)}
                  />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {Experience.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, ExperienceYear, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="FilterminDivDiv">
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-chip-label">Remote</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={Remote}
            onChange={(e) => handleChange(e, "remote")}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip
                    key={value}
                    label={value}
                    onMouseDown={(event) => {
                      event.stopPropagation();
                    }}
                    onDelete={(e) => handleDelete(e, "remote", value)}
                  />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {remote.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, ExperienceYear, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="FilterminDivDiv">
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-chip-label">techStack</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={TechStack}
            onChange={(e) => handleChange(e, "techStack")}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip
                    key={value}
                    label={value}
                    onMouseDown={(event) => {
                      event.stopPropagation();
                    }}
                    onDelete={(e) => handleDelete(e, "techStack", value)}
                  />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {techStack.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="FilterminDivDiv">
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-chip-label">Min Base Pay</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={MinBasePay}
            onChange={(e) => handleChange(e, "minPay")}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip
                    key={value}
                    label={value}
                    onMouseDown={(event) => {
                      event.stopPropagation();
                    }}
                    onDelete={(e) => handleDelete(e, "minPay", value)}
                  />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {minBasePay.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="FilterminDivDiv">
        <input type="text" placeholder="search Company Name" />
      </div>
    </div>
  );
};

export default Filter;
