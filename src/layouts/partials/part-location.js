import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { PageContext } from "../../pages";
import { actionTypes } from "../../config/store";

const location_pemberkatan =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1155.569158795769!2d98.63180383597232!3d3.516991042371599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312513e8b35fcd%3A0x4a61b425cabd6201!2sGBKP%20Rg.%20Bambu%20Raya%20P.%20Simalingkar!5e0!3m2!1sen!2sid!4v1618594754809!5m2!1sen!2sid";
const location_resepsi =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951.1397964249561!2d98.65568942856986!3d3.5433247934303536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312542d2aff341%3A0x3b57f9377202258c!2sJambur%20Namaken!5e0!3m2!1sen!2sid!4v1618594824038!5m2!1sen!2sid";

export const PartLocation = () => {
  const { state, dispatch } = React.useContext(PageContext);
  const { indexLocation } = state;

  const onIndexLocationChange = (index) => {
    dispatch({
      type: actionTypes.SET_INDEX_LOCATION,
      payload: index,
    });
  };

  React.useEffect(() => {
    console.log(indexLocation, "indexLocation");
  }, [indexLocation]);

  return (
    <section id="locations" className="locations">
      <div className="locations-content">
        <h3 className="font-great-vibes">Location</h3>
        <Tabs onSelect={onIndexLocationChange} selectedIndex={indexLocation}>
          <TabList>
            <Tab>Pemberkatan</Tab>
            <Tab>Adat dan Resepsi</Tab>
          </TabList>

          <TabPanel>
            <iframe src={location_pemberkatan} />
          </TabPanel>
          <TabPanel>
            <iframe src={location_resepsi} />
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};
