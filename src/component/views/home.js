import React from "react";
import AppAbout from "../home/about";
import AppContact from "../home/contact";
import AppFaq from "../home/fag";
import AppFeature from "../home/feature";
import AppHero from "../home/hero";
import AppPricing from "../home/pricing";
import AppWorks from "../home/works";
function AppHome(){
    return(
        <div className="main">
            <AppHero/>
            <AppAbout/>
            <AppFeature/>
            <AppWorks/>
            <AppFaq/>
            <AppPricing/>
            <AppContact/>
        </div>
    );
}
export default AppHome;