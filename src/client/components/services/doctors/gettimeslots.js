import { slotdata } from "./apptdata";
//import axios from "axios";

const filter = {
  thisweek: 1,
};

export default {
  // Search Filter Enum

  getApptDetails: (fitler) => {
    if (fitler == filter.thisweek) {
      return slotdata;
    } else if (fitler == filter.upc) {
      return upcapptData;
    } else if (fitler == filter.app) {
      return todayapptData.concat(upcapptData);
    } else if (fitler == filter.mypat) {
      return todayapptData.concat(upcapptData);
    }
  },
};
