import { CSSEffect, Combo } from "@donkeyclip/motorcortex";

export const left = (
  value,
  selector,
  duration,
  easing = "linear",
  initialValues
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        left: value,
      },
      initialValues,
    },
    {
      selector,
      duration,
      easing,
    }
  );

export const opacity = (value, selector, duration, easing = "linear") =>
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

export const width = (value, selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        width: value,
      },
      initialValues: {
        width: "0px",
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );

export const color = (value, selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        backgroundImage: value,
      },
      initialValues: {
        backgroundImage:
          "linear-gradient(90deg, rgba(52,200,255,1) 0%,  rgba(52,200,255,1) 100%)",
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
              left: "50%",
            },
            initialValues: {
              top: "50%",
            },
          },
          props: {
            duration: 200,
          },
          position: 0,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              top: "50%",
              left: "55%",
            },
          },
          props: {
            duration: 200,
          },
          position: 200,
        },
      ],
    },
    {
      selector,
      easing: "easeOutQuart",
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
              left: "50%",
            },
            initialValues: {
              top: "50%",
            },
          },
          props: {
            duration: 200,
          },
          position: 0,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              top: "50%",
              left: "45%",
            },
          },
          props: {
            duration: 200,
          },
          position: 200,
        },
      ],
    },
    {
      selector,
      easing: "easeOutQuart",
    }
  );
