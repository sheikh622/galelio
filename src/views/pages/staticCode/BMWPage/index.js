import { Grid, Button, Tooltip } from "@mui/material";
import { useTheme } from "@mui/styles";
import rolex from "assets/images/bmwlogo.png";
import logodark from "assets/images/logodark.png";
import logolight from "assets/images/logolight.png";
import "@fontsource/public-sans";
import discord from "assets/images/companypageIcons/discord.png";
import etherscan from "assets/images/companypageIcons/etherscan.png";
import globe from "assets/images/companypageIcons/globe.png";
import insta from "assets/images/companypageIcons/insta.png";
import phone from "assets/images/companypageIcons/phone.png";
import share from "assets/images/companypageIcons/share.png";
import star from "assets/images/companypageIcons/star.png";
import twitter from "assets/images/companypageIcons/twitter.png";
import warn from "assets/images/companypageIcons/warn.png";
import styles from "./companypage.module.css";

import NFTS from "views/pages/user/marketplace/component/nfts";
import BmwCard from "views/pages/user/commonComponent/BmwCard";
const CompanyPage = () => {
  const theme = useTheme();
  const cardData = [
    {
      title: "BMW-07",
      image:
        "https://images.unsplash.com/photo-1568844293986-8d0400bd4745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ym13JTIwY2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80",
      price: "$200",
    },
    {
      title: "BMW-09",
      image:
        "https://www.shutterstock.com/image-illustration/kazakhstan-almaty-january-20-2020-260nw-1626510850.jpg",
      price: "$500",
    },
    {
      title: "BMW-02",
      image:
        "https://images.unsplash.com/photo-1568844293986-8d0400bd4745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ym13JTIwY2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80",
      price: "$200",
    },
    {
        title: "BMW-06",
        image:
          "https://www.shutterstock.com/image-illustration/kazakhstan-almaty-january-20-2020-260nw-1626510850.jpg",
        price: "$800",
      },
      {
        title: "BMW-09",
        image:
          "https://images.unsplash.com/photo-1568844293986-8d0400bd4745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ym13JTIwY2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80",
        price: "$200",
      },
  ];
  return (
    <Grid
      mt={1.5}
      md={12}
      sx={{
        ml: { lg: -2 },
        background: theme.palette.mode === "dark" ? "black" : "#f3f3f3",
        color: theme.palette.mode === "dark" ? "white" : "#404040",
        p: 1,
        borderRadius: "4px",
      }}
    >
      <Grid
        container-fluid
        sx={{
          margin: "0",
          padding: "0",
          display: { xs: "block", sm: "block", md: "flex" },
          marginBottom: "40px",
        }}
      >
        <Grid item md={12} xs={12} sx={{ mt: 2 }}>
          <Grid container>
            <Grid item xs={12} md={3} sx={{ paddingRight: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div style={{ paddingTop: "-25px" }}>
                  {theme.palette.mode === "dark" ? (
                    <img
                      src={logodark}
                      style={{
                        borderRadius: "100px",
                        marginTop: "-5px",
                        objectFit: "cover",
                        height: "92px",
                        width: "92px",
                        border: "3px solid #2196f3",
                      }}
                    />
                  ) : (
                    <img
                      src={logolight}
                      style={{
                        borderRadius: "100px",
                        marginTop: "-5px",
                        objectFit: "cover",
                        height: "92px",
                        width: "92px",
                        border: "3px solid #2196f3",
                      }}
                    />
                  )}
                </div>

                <div className="font-company-page">
                  <h1 className="bmw">BMW</h1>
                  <h3 className="bmw-title">BMW Group</h3>
                </div>
              </div>
            </Grid>
            <Grid
              item
              xs={10}
              md={4}
              sx={{ background: " ", ml: 1, pl: 4, mt: 2 }}
            >
              <Grid
                container
                sx={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <Grid item xs={2} className={styles.statsCover}>
                  <div className={styles.stats}>120</div>
                  <div>Items</div>
                </Grid>
                <Grid item xs={3} className={styles.statsCover}>
                  <div>
                    <div className={styles.stats}>876k</div>
                    <div>Followers</div>
                  </div>
                </Grid>
                <Grid item xs={2} className={styles.statsCover}>
                  <div className={styles.stats}>32k</div>
                  <div>Likes</div>
                </Grid>
                <Grid item xs={2}>
                  <div className={styles.stats}>420</div>
                  <div>Bidding</div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={3} sx={{ marginLeft: "15%", mt: 2 }}>
              <Grid
                container
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginRight: "7%",
                  float: "right",
                }}
              >
                <Tooltip placement="top" title="Coming Soon">
                  <Grid item>
                    <img src={etherscan} height="18rem" alt="" />
                  </Grid>
                </Tooltip>
                <Tooltip placement="top" title="Coming Soon">
                  <Grid item>
                    <img src={insta} height="18rem" alt="" />
                  </Grid>
                </Tooltip>
                <Tooltip placement="top" title="Coming Soon">
                  <Grid item>
                    <img src={globe} height="18rem" alt="" />
                  </Grid>
                </Tooltip>
                <Tooltip placement="top" title="Coming Soon">
                  <Grid item>
                    <img src={discord} height="18rem" alt="" />
                  </Grid>
                </Tooltip>
                <Tooltip placement="top" title="Coming Soon">
                  <Grid item>
                    <img src={twitter} height="18rem" alt="" />
                  </Grid>
                </Tooltip>
                <Tooltip placement="top" title="Coming Soon">
                  <Grid item>
                    <img src={phone} height="18rem" alt="" />
                  </Grid>
                </Tooltip>
                <Tooltip placement="top" title="Coming Soon">
                  <Grid item>
                    <img src={star} height="18rem" alt="" />
                  </Grid>
                </Tooltip>
                <div style={{ borderLeft: "1px solid #7E7D7D" }}></div>
                <Tooltip placement="top" title="Coming Soon">
                  <Grid item>
                    <img src={warn} height="18rem" alt="" />
                  </Grid>
                </Tooltip>
                <Tooltip placement="top" title="Coming Soon">
                  <Grid item>
                    <img src={share} height="18rem" alt="" />
                  </Grid>
                </Tooltip>
              </Grid>
              <Grid item xs={8} md={12} style={{ justifyContent: "" }}>
                <Tooltip placement="top" title="Coming Soon">
                  <Button
                    variant="contained"
                    sx={{ mt: 2, width: "50%", float: "right", mr: 2 }}
                  >
                    Follow
                  </Button>
                </Tooltip>
              </Grid>
            </Grid>

            <Grid
              container-fluid
              sx={{ paddingRight: "7%", paddingLeft: "2%" }}
            >
              <Tooltip placement="top" title="Coming Soon">
                <p className="des-font">
                  The BMW Group is a world-renowned automotive manufacturer with
                  a long history of innovation and excellence in design,
                  performance, and sustainability. Its diverse portfolio of
                  brands and commitment to cutting-edge technologies has
                  positioned the company as a leader in the global automotive
                  industry.{" "}
                </p>
              </Tooltip>
            </Grid>
          </Grid>
          <Grid container sx={{ paddingLeft: "2%", width: "100%" }}>
            <h1>Items</h1>

            <Grid
              container
              sx={{
                justifyContent: {
                  xs: "center",
                  sm: "center",
                  md: "left",
                  lg: "left",
                  xl: "left",
                },
              }}
              spacing={2}
            >
              {cardData?.map((item) => (
                <BmwCard item={item} />
              ))}
            </Grid>

            <Grid item md={12} xs={12}></Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container-fluid
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "flex",
          },
          background: theme.palette.mode === "dark" ? "black" : "#f3f3f3",
        }}
      >
        <Grid item md={1} xs={12}></Grid>
      </Grid>
    </Grid>
  );
};

export default CompanyPage;
