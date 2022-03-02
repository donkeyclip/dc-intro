import { CSSEffect,Combo } from "@donkeyclip/motorcortex";

export const left = ( value,selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
       left:value
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );

export const opacity = (value,selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        opacity: value,
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );

  export const width = (value,selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        width: value,
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );

  export const color = (value,selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        backgroundImage: value,
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );

  export const comboBl = (selector) =>
  new Combo(
    {
      incidents: [
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              top: "45%",
              left: "50%"
            }
          },
          props: {
            duration: 200,
          },
          position: 0
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              top: "50%",
              left: "55%"
            }
          },
          props: {
            duration: 200,
          },
          position: 200
        },
       
      ]
    },
    {
      selector,
      easing:"easeOutQuart",
    }
  );

  export const comboBr = (selector) =>
  new Combo(
    {
      incidents: [
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              top: "55%",
              left: "50%"
            }
          },
          props: {
            duration: 200,
          },
          position: 0
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              top: "50%",
              left: "45%"
            }
          },
          props: {
            duration: 200,
          },
          position: 200
        },
        
      ]
    },
    {
      selector,
      easing:"easeOutQuart",
    }
  );