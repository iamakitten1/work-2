import { Card, CardContent, Grid, TextField, Button } from '@mui/material'
import React from 'react'

const AdminDashboard:React.FC = () => {
  return (
    <div>
      <Card style={{maxWidth:450, margin:"0 auto", padding:"20px 5px"}}>
        <CardContent>
            
          <Grid container spacing={1}>

            <Grid xs={12} sm={6} item>
              <TextField label='First Name' placeholder="Eneter first name" variant="outlined" fullWidth required/>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField label='Last Name' placeholder="Eneter last name" variant="outlined" fullWidth required/>
            </Grid>
            <Grid xs={12}  item>
              <TextField type="number" label='Phone Number' placeholder="Eneter phone number" variant="outlined" fullWidth required/>
            </Grid>
            <Grid xs={12}  item>
              <TextField type="email" label='Email' placeholder="Eneter email" variant="outlined" fullWidth required/>
            </Grid>
            <Grid xs={12}  item>
              <TextField label='Password' placeholder="Eneter password" variant="outlined" fullWidth required/>
            </Grid>
            <Grid xs={12}  item>
              <Button type="submit" variant="contained" color="primary" fullWidth> Enter</Button>
            </Grid>


          </Grid>
          
        </CardContent>
      </Card>
    </div>
  )
}

export default AdminDashboard
