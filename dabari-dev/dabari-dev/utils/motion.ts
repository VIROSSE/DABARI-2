export function slideInFromLeft(delay: number) {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export function slideInFromRight(delay: number) {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.2,
      },
    },
  };
}

export const slideInFromTop = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

export function fadeIn(delay: number) {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export function scaleFromOneToTen(delay: number) {
  return {
    hidden: { scale: 1 },
    visible: {
      scale: 10,
      transition: {
        delay: delay,
        duration: 5,
      },
    },
  };
}

export function transformFromCenterToTopLeft(delay: number) {
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth <= 768 : false;

  return {
    visible: {
      x: isMobile ? 0 : -280,
      y: isMobile ? 0 : -250,

      opacity: 1,
      scale: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export function institutionalBubbleVariant(delay: number) {
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth <= 768 : false;

  return {
    visible: {
      x: isMobile ? -200 : -1200,
      y: isMobile ? -50 : -450,

      opacity: 1,
      scale: 1,
      transition: {
        delay: delay,
        duration: 0.4,
      },
    },
  };
}

export function capitalBubbleVariant(delay: number) {
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth <= 768 : false;

  return {
    visible: {
      x: isMobile ? -200 : -1200,
      y: isMobile ? -0 : 0,

      opacity: 1,
      scale: 1,
      transition: {
        delay: delay,
        duration: 0.4,
      },
    },
  };
}

export function yearlyReturnBubbleVariant(delay: number) {
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth <= 768 : false;

  return {
    visible: {
      x: isMobile ? -300 : -380,
      y: isMobile ? 100 : 450,

      opacity: 1,
      scale: 1,
      transition: {
        delay: delay,
        duration: 0.4,
      },
    },
  };
}

export function commercialBubbleVariant(delay: number) {
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth <= 768 : false;

  return {
    visible: {
      x: isMobile ? 400 : 0,
      y: isMobile ? 0 : 1200,

      opacity: 0,
      scale: 0,
      transition: {
        delay: delay,
        duration: 0.4,
      },
    },
  };
}

export function feeBubbleVariant(delay: number) {
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth <= 768 : false;

  return {
    visible: {
      x: isMobile ? 400 : 1200,
      y: isMobile ? 200 : 0,

      opacity: 0,
      scale: 0,
      transition: {
        delay: delay,
        duration: 0.4,
      },
    },
  };
}

export function wealthBubbleVariant(delay: number) {
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth <= 768 : false;

  return {
    visible: {
      x: isMobile ? 400 : 1200,
      y: isMobile ? -200 : 0,

      opacity: 0,
      scale: 0,
      transition: {
        delay: delay,
        duration: 0.4,
      },
    },
  };
}
