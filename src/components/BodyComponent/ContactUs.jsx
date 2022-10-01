import React, { useState, useRef } from "react";
import { Box, Container, Grid, Hidden } from "@material-ui/core";
import emailjs from "@emailjs/browser";
import ScrollAnimation from "react-animate-on-scroll";

import { useStyles } from "./bodyStyles";
import {
  RenderSectionHeading,
  RenderSubmitButton,
} from "../aCommon/commonComponent";
import CustomizedInputs from "../aCommon/FormTextField";
import aboutImage from "../../images/contactus.jpg";

export default function ContactUs() {
  const classes = useStyles();
  const form = useRef();

  const [state, setState] = useState({
    data: {
      firstName: "",
      email: "",
      messages: "",
    },
    errors: {},
  });

  const handleOnChange = ({ target }) => {
    const { data, errors } = state;

    target.value.length < 3
      ? (errors[target.name] = `${target.name} should have at least 3 letter`)
      : (errors[target.name] = "");

    data[target.name] = target.value;
    setState({ data, errors });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { data } = state;

    console.log("Submitted data ", data);
    //post data via api call
    emailjs
      .sendForm(
        "service_trb53er",
        "template_xlduhod",
        form.current,
        "-f7PwRlWGBTTypRdq"
      )
      .then(
        (result) => {
          alert("Mail has been sent, Thank You!");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box className={classes.section} id="Contact">
      <ScrollAnimation animateIn="fadeIn">
        <Container maxWidth="lg">
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
                SmallText: "Contact Me",
                Title: "Seems To be Interesting",
                Description:
                  "Portfolio seen? Feel free to contact for your future projects or feedback.",
              })}

              <Box className={classes.cardLists}>
                <form ref={form} onSubmit={handleSubmit}>
                  <Grid container justify="center">
                    <Grid item xs={12} className={classes.gridItem}>
                      <CustomizedInputs
                        label="First Name"
                        name="firstName"
                        state={state}
                        onChange={handleOnChange}
                      />
                    </Grid>

                    <Grid item xs={12} className={classes.gridItem}>
                      <CustomizedInputs
                        label="Email@Domain.com"
                        name="email"
                        state={state}
                        onChange={handleOnChange}
                      />
                    </Grid>

                    <Grid item xs={12} className={classes.gridItem}>
                      <CustomizedInputs
                        label="Your Messages Here"
                        name="messages"
                        state={state}
                        onChange={handleOnChange}
                        multiline
                        rows={6}
                      />
                    </Grid>

                    <Grid item xs={8} sm={6}>
                      {RenderSubmitButton({ label: "submit" })}
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </ScrollAnimation>
    </Box>
  );
}
