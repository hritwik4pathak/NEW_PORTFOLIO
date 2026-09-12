"use client";

import { useEffect, useRef, useState } from "react";

interface PupilPosition {
  x: number;
  y: number;
}

export default function CursorMascot() {
  const mascotRef = useRef<HTMLDivElement>(null);

  const [leftPupil, setLeftPupil] = useState<PupilPosition>({
    x: 0,
    y: 0,
  });

  const [rightPupil, setRightPupil] = useState<PupilPosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!mascotRef.current) return;

      const mascot = mascotRef.current.getBoundingClientRect();

      /*
       * Center of the white eyes.
       */
      const leftEyeX = mascot.left + mascot.width * 0.455;
      const leftEyeY = mascot.top + mascot.height * 0.68;

      const rightEyeX = mascot.left + mascot.width * 0.625;
      const rightEyeY = mascot.top + mascot.height * 0.68;

      const calculatePupil = (
        eyeX: number,
        eyeY: number
      ): PupilPosition => {
        const dx = event.clientX - eyeX;
        const dy = event.clientY - eyeY;

        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance === 0) {
          return {
            x: 0,
            y: 0,
          };
        }

        /*
         * Keep the pupil movement small enough
         * that it always stays inside the eye.
         */
        const maxMovement = 10;

        const strength = Math.min(distance / 180, 1);

        return {
          x: (dx / distance) * maxMovement * strength,
          y: (dy / distance) * maxMovement * strength,
        };
      };

      setLeftPupil(
        calculatePupil(leftEyeX, leftEyeY)
      );

      setRightPupil(
        calculatePupil(rightEyeX, rightEyeY)
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
    <div
      ref={mascotRef}
      className="cursor-mascot"
    >
      <img
        src="/mascot/mascot.png"
        alt="Mascot"
        className="mascot-image"
      />

      {/* LEFT EYE */}
      <div className="mascot-eye-position left-eye-position">
        <div
          className="mascot-pupil"
          style={{
            transform: `translate(
              calc(-50% + ${leftPupil.x}px),
              calc(-50% + ${leftPupil.y}px)
            )`,
          }}
        >
          <span className="pupil-shine" />
        </div>
      </div>

      {/* RIGHT EYE */}
      <div className="mascot-eye-position right-eye-position">
        <div
          className="mascot-pupil"
          style={{
            transform: `translate(
              calc(-50% + ${rightPupil.x}px),
              calc(-50% + ${rightPupil.y}px)
            )`,
          }}
        >
          <span className="pupil-shine" />
        </div>
      </div>
    </div>
  );
}