import { todayapptData, allapptData } from "./apptdata";
//import axios from "axios";

const filter = {
  today: 1,
  all: 2,
};

export default {
  // Search Filter Enum

  getApptDetails: (fitler) => {
    if (fitler == filter.today) {
      return todayapptData;
    } else {
      return allapptData;
    }
  },
};
