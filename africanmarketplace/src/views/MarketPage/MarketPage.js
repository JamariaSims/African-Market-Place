import React, { useState } from "react";
import NavigationBar from "../../components/Modals/NavigationBar";
import Listings from "./Listings";

function MarketPage(props) {
  const { userData, setUserData } = props;
  const Tabs = ["Home", "My Store"];
  return (
    <>
      <NavigationBar userData={userData} PageName={"Market Page"} Tabs={Tabs} />
      <Listings userData={userData} setUserData={setUserData} />
    </>
  );
}

export default MarketPage;
