import React from "react";
import { Box, Container, Grid, Hidden } from "@material-ui/core";
import { useStyles } from "./bodyStyles";
import { CardMedia, RenderSectionHeading } from "../aCommon/commonComponent";
import aboutImage from "../../images/About.jpg";
import WebIcon from "@material-ui/icons/Web";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import ScrollAnimation from "react-animate-on-scroll";

export default function AboutUs() {
  const classes = useStyles();

  const skills = [
    {
      icon: <WebIcon />,
      title: "Web Development",
      desc: "I can build, design your web application using multiple technologies.",
    },
    {
      icon: <BubbleChartIcon />,
      title: "SharePoint Development",
      desc: "I have major experience in SharePoint 2013, 2016, SPFX.",
    },
    {
      icon: <PhoneIphoneIcon />,
      title: "Android Apps",
      desc: "I have build some of the Android apps using Java and ready to explore even more.",
    },
    {
      icon: <AcUnitIcon />,
      title: "Power Platforms",
      desc: "I have extensive experience of using Power Automate, Power Apps & Power BI.",
    },
    {
      icon: <AcUnitIcon />,
      title: "Microsoft Azure",
      desc: "Implement Cognitive Search, deploying solutions",
    },
    {
      icon: <AcUnitIcon />,
      title: "Mongo DB",
      desc: "Performed Post/Get methods in live projects",
    },
    {
      icon: <AcUnitIcon />,
      title: "React JS",
      desc: "I have build few Web Apps purely on React JS",
    },
    {
      icon: <AcUnitIcon />,
      title: "Node JS",
      desc: "Currently I am building one Web App using Node JS.",
    },
  ];

  return (
    <Box className={classes.section} id="About">
      <ScrollAnimation animateIn="fadeIn">
        <Container maxWidth="xl">
          <Grid container direction="row" spacing={2}>
            <Grid item sm={12} md={5}>
              <Box component={Hidden} smDown>
                <img
                  src={aboutImage}
                  alt={"about"}
                  className={classes.responsiveImg}
                />
              </Box>
            </Grid>
            <Grid item sm={12} md={7}>
              {RenderSectionHeading({
                SmallText: "ABOUT ME",
                Title: "Hello I'm Shahbaz Alam",
                Description:
                  " A self taught developer who loves to codes something that wiil impact  majority of the people in good way !",
              })}
              <br />
              <Box className={classes.cardLists}>
                <Grid container spacing={1}>
                  {skills.map((item, i) => (
                    <Grid
                      key={i}
                      item
                      xs={12}
                      sm={6}
                      style={{ margin: "10px 0px" }}
                    >
                      {CardMedia({
                        Icon: item.icon,
                        Title: item.title,
                        Desc: item.desc,
                      })}
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </ScrollAnimation>
    </Box>
  );
}
