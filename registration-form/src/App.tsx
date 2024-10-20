import { Card, CardContent, Grid2, TextField, Button } from "@mui/material";
import { Link, Route, Routes } from "react-router-dom";
import { inputFormElements } from "./forms/formElements";
import { useState } from "react";






const App: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show); 
  const handleClickConfirmShowPassword = () => setShowConfirmPassword((show) => !show);

  return (
    <>
      <nav>
        <Link to={"/"}>Admin</Link>
        <Link to={"/user"}>User</Link>
        <Link to={"/courier"}>Courier</Link>
      </nav>

      <Routes>
        <Route path="/" element={<div>Admin</div>} />
        <Route path="user" element={<div>User</div>} />
        <Route path="courier" element={<div>Courier</div>} />
        <Route path="*" element={<div>Error: Page not found</div>} />
      </Routes>

      <Card style={{padding:"80px 5px 0px 5px"}}>
        <CardContent style={{maxWidth: 600, margin:"0 auto"}}>

          <Grid2 container spacing={1}>
            {inputFormElements.map((input, index) => (
              <Grid2 key={index} xs={input.xs} sm={input.sm}>
                <TextField
                  label={input.label}
                  placeholder={input.placeholder}
                  variant="outlined"
                  fullWidth
                  required={input.required}
                />
              </Grid2>
            ))}
            {/* //PASSWORD INPUT */}

            <Grid2 xs={12} sm={12}>
              <TextField
                type={showPassword ? "text" : "password"}
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                placeholder="Enter password"
                variant="outlined"
                fullWidth
                required
              />
            </Grid2>

            <Grid2 xs={12} sm={12}>
              <TextField
                type={showConfirmPassword ? "text" : "password"}
                aria-label="toggle password visibility"
                onClick={ handleClickConfirmShowPassword}
                placeholder="Confirm password"
                variant="outlined"
                fullWidth
                required
              />
            </Grid2>

            <Grid2  item xs={12} >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth >
                Enter
              </Button>
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>
    </>
  );
};

export default App;

