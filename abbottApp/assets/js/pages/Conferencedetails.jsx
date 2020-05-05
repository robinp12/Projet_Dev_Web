import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ShareIcon from "@material-ui/icons/Share";
import CardMedia from "@material-ui/core/CardMedia";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import ConferencesAPI from "../services/ConferencesAPI";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20,
  },
  details: {
    alignItems: "center",
  },
  column: {
    flexBasis: "33.33%",
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const conferencedetails = (props) => {
  const classes = useStyles();
  const [conferences, setConferences] = useState([]);
  const id = window.location.hash.split("/")[2];

  const fetchConferences = async () => {
    const data = await ConferencesAPI.findAllConferences()
      .then((response) => response.data["hydra:member"])
      .catch((error) => console.log(error.response));
    setConferences(data);
  };
  useEffect(() => {
    fetchConferences();
  }, []);

  return (
    <div>
      <h1>Conférences détails</h1>
      {conferences.map((e) => (
        <div key={e.id}>
          {e.id == id && (
            <div className={classes.root}>
              <Grid container spacing={3}>
                {/* Mettre l'image */}
                <Grid item xs={12}>
                  <CardMedia
                    component="img"
                    alt="Conférence"
                    height="250"
                    image="img/audience.jpg"
                    title="Conférence"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Card>
                    {/* Nom de la conférence */}
                    {/* Date de la conférence */}
                    <CardHeader
                      title={e?.name}
                      subheader={new Date(
                        e?.start
                      ).toLocaleString()}
                    />
                    <CardContent>
                      {/* Petite description */}
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        ---
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

                          <List
                            component="nav"
                            aria-label="main mailbox folders"
                          >
                            <ListItem button>
                              <ListItemIcon>
                                <InboxIcon />
                              </ListItemIcon>
                              <ListItemText primary="+32 472/30.64.94" />
                            </ListItem>
                            <ListItem button>
                              <ListItemIcon>
                                <DraftsIcon />
                              </ListItemIcon>
                              <ListItemText primary="jeanThierry@degolf.be" />
                            </ListItem>
                          </List>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card>
                    {/* Nom de la conférence */}
                    {/* Date de la conférence */}
                    <CardHeader title="Description:" />
                    <CardContent>
                      {/* Petite description */}
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {e?.description}
                        {e?.description}
                        {e?.description}
                        {e?.description}
                        {e?.description}
                        {e?.description}
                        {e?.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default conferencedetails;
