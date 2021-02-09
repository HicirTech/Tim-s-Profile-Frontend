import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const ActiveView = (params) => {
  return (
    <Grid container style={{ width: "80vw", margin: "auto" }} spacing={1}>
      <Heading />
    </Grid>
  );
};

const SkillSets = () => {
  return (
    <>
      <Grid item xs={10}>
        <Typography variant="h5" color="initial">
          Enough story? Time for my technical skillsets
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Grid container spacing={1}>
          <Grid item xs={4}>

            
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

const Heading = () => {
  return (
    <>
      <Grid item xs={10}>
        <Typography variant="h5" color="initial">
          Well, who am I?
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography variant="body2" color="initial">
          Of course, as you can see in the title, I am Tim Luo, a software
          developer having more than 1 year of working experience in .Net and
          frontend development with Amazon Web Service. In addtionally, a
          committing, multi-skilling motivative person who is always happy to
          learn and contribute more.
        </Typography>
        <br />
        <Typography variant="body2" color="initial">
          I believe that I could bring more value to your company.
        </Typography>
      </Grid>

      <Grid item xs={10}>
        <Typography variant="h5" color="initial">
          Then, here is working experience
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography variant="body2" color="initial">
          At late 2019, I graduated from AUT, then began to seek for a job.
          During the next few months, my daily basically just sending CVs to
          companies, and hoping there will be a chance ready for me.
        </Typography>
        <br />
        <Typography variant="body2" color="initial">
          Fortunately, in January 2020, a company called Success Global gave me
          an opportunity: they are looking for a customize build customer
          relationship management system to replace their file-based system. I
          was been hired as a full-time contractor for this system: Kornea
        </Typography>
        <br />
        <Typography variant="body2" color="initial">
          For that, I start to use Asp.net Core and jQuery for the development,
          as it's original plain just a simple system and project only just a
          proof of concept.
        </Typography>
        <br />
        <Typography variant="body2" color="initial">
          After 3 months of development, the project came out and my boss and
          some newer idea want to add in. At that time I realized that only
          Razor page and jQuery will be too difficult to make the project reach
          the requirements.
        </Typography>
        <br />
        <Typography variant="body2" color="initial">
          So, I added to React and material-UI for the frontend of my project
          and SignalR was implemented for real-time communication.
        </Typography>
        <br />
        <Typography variant="body2" color="initial">
          In the next 6 months, Kornea keeps growing, finally at the end of 2020
          the year of Covid, Kornea was able to handle most of the internal
          process, manage over 200 client's data, and store over 7000 files. And
          it is fully cloudbased, containerized. Since that, my boss designed to
          make it out soucing as a paid service to the public use.
        </Typography>
      </Grid>

      <Grid item xs={10}>
        <Typography variant="h5" color="initial">
          If so, why I am leaving?
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography variant="body2" color="initial">
          Well, there are many reasons, but most importantly is I am feeling I
          have reached the end of the project: I getting less and less
          requirement for me to develop and I am not able to keep upskilling my
          self during development. Keep stay in here is a no go.
        </Typography>
        <br />
        <Typography variant="body2" color="initial">
          Also, I am very tired of playing a one-man band in development. It is
          lonely and helpless. Just like you in a deep pit, and you yelling for
          help that no one will answer, you want to talk and no one in your
          side.
        </Typography>
        <br />
        <Typography variant="body2" color="initial">
          There many many more story able why I leaving my place, but I'd like
          to share them with you in person
        </Typography>
      </Grid>
    </>
  );
};

export default ActiveView;
