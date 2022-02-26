import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

export default function Footer() {

  return (
    <Grid container id='foot'>

      <Grid item xs>
        <h3>STACK OVERFLOW</h3>
        <h4>Questions</h4>
        <h4>Jobs</h4>
        <h4>Developer Jobs Directory</h4>
        <h4>Help</h4>
        <h4>Mobile</h4>
      </Grid>
      
      <Grid item xs>
      <h3>PRODUCTS</h3>
        <h4>Teams</h4>
        <h4>Talent</h4>
        <h4>Advertising</h4>
        <h4>Enterprise</h4>
      </Grid>

      <Grid item xs>
      <h3>COMPANY</h3>
        <h4>About</h4>
        <h4>Press</h4>
        <h4>Work Here</h4>
        <h4>Legal</h4>
        <h4>Privacy Policy</h4>
        <h4>Contact Us</h4>
      </Grid>

      <Grid item xs>
      <h3>STACK EXCHANGE NETWORK</h3>
        <h4>Technology</h4>
        <h4>Culture & recreation</h4>
        <h4>Life & arts</h4>
        <h4>Science</h4>
        <h4>Business</h4>
        <h4>API</h4>
      </Grid> 

      <Grid item xs>
        <h5><img src="https://img.icons8.com/fluency/48/000000/facebook-new.png" alt=''/></h5>
        <h5><img src="https://img.icons8.com/fluency/48/000000/twitter.png" alt=''/></h5>
        <h5><img src="https://img.icons8.com/fluency/48/000000/blog.png" alt=''/></h5>
        <h5><img src="https://img.icons8.com/fluency/48/000000/linkedin.png" alt=''/></h5>
        <h5><img src="https://img.icons8.com/fluency/48/000000/instagram-new.png" alt=''/></h5>
      </Grid>
    </Grid>
  );
}
