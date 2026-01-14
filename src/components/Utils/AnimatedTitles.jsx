import React, { useEffect, useState } from "react";

const AnimatedTitles = () => {
  const roles = [
    "Software Developer",
    "Technical Project Manager",
    "Technical Analyst",
  ];

  const TYPING_SPEED = 120;
  const DELETING_SPEED = 80;
  const PAUSE_BEFORE_DELETE = 1500;
  const PAUSE_BEFORE_TYPE = 400;

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    let timeout;

    if (!isDeleting) {
      if (currentText === currentRole) {
        timeout = setTimeout(() => setIsDeleting(true), PAUSE_BEFORE_DELETE);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(
            currentRole.substring(0, currentText.length + 1)
          );
        }, TYPING_SPEED);
      }
    } else {
      if (currentText === "") {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setCurrentRoleIndex(
            (prev) => (prev + 1) % roles.length
          );
        }, PAUSE_BEFORE_TYPE);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(
            currentRole.substring(0, currentText.length - 1)
          );
        }, DELETING_SPEED);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <div className="md:text-start">
      <h1 className="text-3xl md:text-4xl font-bold text-primaryColor mb-6">
        <span>{currentText}</span>
        <span className="inline-block h-7 md:h-9 w-0.5 bg-primaryColor ml-1 animate-pulse" />
      </h1>
    </div>
  );
};

export default AnimatedTitles;
