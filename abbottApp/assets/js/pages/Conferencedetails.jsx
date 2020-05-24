import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
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
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
      },
      details: {
        alignItems: 'center',
      },
      column: {
        flexBasis: '33.33%',
      },
      helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: theme.spacing(1, 2),
      },
      link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
        },
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
                height="250"
                image="img/audience.jpg"
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
                                        Les médias parlent fréquemment du risque d’être atteint du Coronavirus 2019-nCov en Belgique. Ci-dessous, nous vous donnons une mise à jour sur les mesures à prendre chez les patients suspectés d'être infectés par 2019-nCov.
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
                                        <ExpansionPanelDetails >
                                            {/* Description de l'orateur */}


                                            <List component="nav" aria-label="main mailbox folders">
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
                    <Card >
                                {/* Nom de la conférence */}
                                {/* Date de la conférence */}
                                <CardHeader
                                    title="Description:"
                                />
                                <CardContent>
                                    {/* Petite description */}
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    Coronavirus (2019-nCoV) UPDATE

                                        Chers collègues,

                                        Les médias parlent fréquemment du risque d’être atteint du Coronavirus 2019-nCov en Belgique. Ci-dessous, nous vous donnons une mise à jour sur les mesures à prendre chez les patients suspectés d'être infectés par 2019-nCov.

                                        Vous pouvez lire la procédure la plus récente pour les médecins généralistes via le lien suivant:
                                        https://epidemio.wiv-isp.be/ID/Pages/2019-nCoV.aspx

                                        Actuellement il n’est plus nécessaire d’obtenir l’accord du le service Soins & Santé.

                                        Afin de décongestionner le Centre National de Référence et de pouvoir offrir une réponse plus rapide, le laboratoire LBS envoie les échantillons à partir du 12/03/2020 au laboratoire AML.

                                        En pratique :

                                        2 écouvillons nasopharyngés (ou si possible 1 écouvillon nasopharyngé et 1 écouvillon oropharyngé) et, si nécessaire avec des symptômes sévères, des échantillons de voies respiratoires basses (par ex. Aspiration bronchique).
                                        Utilisez, si possible, le formulaire de demande de laboratoire en fournissant un maximum d’informations cliniques (malheureusement pas de version française pour le moment):
                                        https://www.aml-lab.be/website.nsf/Text/AF-AML-COVID-19-FR/$file/AF-AML-COVID-19-FR.pdf

                                        Le prix s’élève à 29 euro
                                        Pour emballer les échantillons suspects de nCov-19, l'échantillon doit être placé :

                                        1.    dans un tube UTM (à défaut un Eswab)
                                        2.    dans un sac en plastique hermétiquement réfermable avec un papier absorbant
                                        3.    dans une enveloppe rembourrée ou un deuxième sac en plastique hermétiquement refermable. Le formulaire de candidature doit être présent en dehors du colis. Il doit être clairement indiqué sur l'emballage qu'il s'agit d'un échantillon d'analyse du virus corona. Vous pouvez demander le matériel d'emballage via le laboratoire.
                                        Seuls les prélèvements respiratoires doivent être présents dans ce triple emballage. L’emballage ne sera pas ouvert par le laboratoire. Les autres types d’échantillons éventuellement présents ne seront pas traités. 

                                        Si le laboratoire LBS doit prendre en charge le transport de l'échantillon, nous vous demandons de nous en informer au préalable par téléphone.

                                        

                                        En vous remerciant pour votre compréhension et collaboration, nous restons à votre disposition pour tout renseignement complémentaire et vous prions d’agréer, chers collègues, l’expression de nos sentiments les meilleurs.

                                        Les biologistes LBS


                                    </Typography>
                                </CardContent>
                            </Card>
                    </Grid>
                        {/* <Grid item xs={3}>
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
                        </Grid> */}
            </Grid>
        </div>
    </div>

    )
}

export default conferencedetails;