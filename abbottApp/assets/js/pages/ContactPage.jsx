import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';

const Contact = props => {
    return (
        // <div>
        // {/* <h1>Page Contact</h1> */}
        //     {/* <div > */}
        //         {/* <form>
        //             <label>
        //             Suis-je déjà membre? 
        //             <input
        //                 name="isGoing"
        //                 type="checkbox"/>
        //             </label>
        //             <br />
        //             <label>
        //             Nom:
        //             <input
        //                 name="numberOfGuests"
        //                 type="text"/>
        //             </label>
        //             <label>
        //             Prénom:
        //             <input
        //                 name="numberOfGuests"
        //                 type="text"/>
        //             </label>
        //             <label>
        //             Message:
        //             <textarea></textarea>
        //             </label>
        //         </form> */}
<React.Fragment>
      <Typography variant="h6" gutterBottom>
        Contactez-nous!
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Nom"
            name="Nom"
            label="Nom"
            fullWidth
            autoComplete="fNom"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="prenom"
            name="prenom"
            label="Prénom"
            fullWidth
            autoComplete="lprenom"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="mail"
            name="mail"
            label="Addresse mail"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="billing address-level2"
          />
        </Grid> */}
        {/* <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid> */}
        {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="billing postal-code"
          />
        </Grid> */}
        <Grid item xs={12}>
          {/* <textarea
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="billing country"
          /> */}
          <TextField
            id="message"
            name="message"
            label="Votre message"
            fullWidth
            autoComplete="Message"
          />
        </Grid>
        <Grid item xs={12}>
        <Button variant="contained" color="primary">
        Envoyer
        </Button>
        </Grid>
      </Grid>
    </React.Fragment>
    
            // </div>
        // </div>
    )
}

export default Contact;