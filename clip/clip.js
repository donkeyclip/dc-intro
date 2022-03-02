import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "!!raw-loader!./clip.css";
import { comboBr,comboBl,opacity ,left,width,color} from "./incidents";
import { initParamsValidationRules, initParams } from "./initParams";

export const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParamsValidationRules,
  initParams: initParams[1].value,
  containerParams: {
    width: "800px",
    height: "450px",
  },
});




clip.addIncident(left("45%",".bl", 500), 0);
clip.addIncident(left("55%",".br", 500), 0);
clip.addIncident(comboBr(".br"), 500);
clip.addIncident(comboBl(".bl"), 500);
clip.addIncident(comboBl(".br"), 900);
clip.addIncident(comboBr(".bl"), 900);
clip.addIncident(left("50%",".br,.bl", 200), 1300);
clip.addIncident(opacity(1,".logo", 1000,"easeOutQuart"), 1500);
clip.addIncident(width("430px",".logo-text", 1000,"easeOutQuart"), 2500);
clip.addIncident(left("60%",".logo-text", 850,"easeOutQuart"), 2500);
clip.addIncident(left("25%",".br,.bl", 850,"easeOutQuart"), 2500);
clip.addIncident(left("25.5%",".logo", 850,"easeOutQuart"), 2500);
clip.addIncident(color("linear-gradient(90deg, rgba(52,200,255,1) 0%,  rgba(147,92,255,1) 100%)",".br", 200,"easeOutQuart"), 1500);


