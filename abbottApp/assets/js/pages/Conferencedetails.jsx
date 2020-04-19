import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import CardMedia from '@material-ui/core/CardMedia';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));



const conferencedetails = props => {

    const classes = useStyles();
    
    return (
    <div>
        <h1>Conférences détails</h1>

        <div className={classes.root}>
            <Grid container spacing={3}>
                {/* Mettre l'image */}
                <Grid item xs={12}>
                <CardMedia
                component="img"
                alt="Conférence"
                height="140"
                image="../../img/audience.jpg"
                title="Conférence"
                />
                </Grid>
                        <Grid item xs={6} >
                                <Card >
                                    {/* Nom de la conférence */}
                                    {/* Date de la conférence */}
                                    <CardHeader
                                        title="Nom conférence"
                                        subheader="Octobre 14, 2020"
                                    />
                                    <CardContent>
                                        {/* Petite description */}
                                        <Typography variant="body2" color="textSecondary" component="p">
                                        Petite description
                                        </Typography>
                                    </CardContent>
                                    {/* Carte déroulente */}
                                    <CardActions disableSpacing>
                                    <ExpansionPanel>
                                        <ExpansionPanelSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        >
                                            {/* Nom de l'orateur */}
                                        <Typography>Orateur: Jean-Thierry Degolf</Typography>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            {/* Description de l'orateur */}
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                            sit amet blandit leo lobortis eget.
                                        </Typography>
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>
                                    </CardActions>
                                </Card>
                        </Grid>
                    <Grid item xs={6}>
                    <Card >
                                {/* Nom de la conférence */}
                                {/* Date de la conférence */}
                                <CardHeader
                                    title="Description:"
                                />
                                <CardContent>
                                    {/* Petite description */}
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    Grande description
                                    </Typography>
                                </CardContent>
                                
                            </Card>
                    </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>xs=3</Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>xs=3</Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>xs=3</Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>xs=3</Paper>
                        </Grid>
            </Grid>
        </div>
    </div>

    )
}

export default conferencedetails;