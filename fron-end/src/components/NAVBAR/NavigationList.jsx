import { styled } from "@mui/material/styles";
import Tab, { tabClasses } from "@mui/material/Tab";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TabItem = styled(Tab)(({ theme }) => ({
  textTransform: "initial",
  margin: theme.spacing(0, 2),
  minWidth: 0,
  fontWeight: "normal",
  letterSpacing: 0.5,
  color: "#fff",
  borderRadius: "8px",
  [`&.${tabClasses.selected}`]: {
    color: "#fff",
  },
  [theme.breakpoints.up("md")]: {
    minWidth: 0,
  },
}));

export const NavigationList= ()=> {
  const [tabIndex, setTabIndex] = useState(0);
  const navigate = useNavigate()

  const handleNav = (sectionId)=>{
    navigate(sectionId)

    // const targetSection = document.getElementById(sectionId);
    // if (targetSection) {
    //   targetSection.scrollIntoView({ behavior: 'smooth' });
    // }
  }
  return (
    <Tabs
      value={tabIndex}
      onChange={(e, index) => setTabIndex(index)}
      sx={{
        // width: "100%",
        borderRadius: "8px",
        // background: "linear-gradient(60deg, #00b894, #1dd1a1)",
        background: "transparent",
        padding: 2,
        // boxShadow: "0px 3px 15px rgba(34, 35, 58, 0.3)",
        [`& .${tabsClasses.indicator}`]: {
          height: "100%",
          borderRadius: "8px",
          backgroundColor: "rgba(255, 255, 255, .2)",
        },
      }}
    >
      <TabItem label={"Home"} 
      
      onClick={()=> handleNav('/')}
      />
      <TabItem label={"Dashboard"}
    //   onClick={()=> navigate('/login')}
      />
      <TabItem label={"Login"} 
      onClick={()=> handleNav('login')}
      />
      <TabItem label={"Signup"} 
      onClick={()=> handleNav('signup')}
      />
      
    </Tabs>
  );
}
