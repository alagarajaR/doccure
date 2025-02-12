import { todayapptData, upcapptData } from "./apptdata";
//import axios from "axios";

const filter = {
  today: 1,
  upc: 2, // upcoming appointments
  app: 3,
  mypat: 4,
};

export default {
  // Search Filter Enum

  getApptDetails: (fitler) => {
    if (fitler == filter.today) {
      return todayapptData;
    } else if (fitler == filter.upc) {
      return upcapptData;
    } else if (fitler == filter.app) {
      return todayapptData.concat(upcapptData);
    } else if (fitler == filter.mypat) {
      return todayapptData.concat(upcapptData);
    }
  },
};
