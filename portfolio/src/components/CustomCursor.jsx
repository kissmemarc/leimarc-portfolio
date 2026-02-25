import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    const root = document.body;
    const cursor = document.querySelector('.curzr-arrow-pointer');

    if (!cursor) return;

    const cursorSize = 20;

    // Apply styles
    Object.assign(cursor.style, {
      boxSizing: 'border-box',
      position: 'fixed',
      top: '0px',
      left: '0px',
      zIndex: '2147483647',
      width: `${cursorSize}px`,
      height: `${cursorSize}px`,
      transition: '250ms, transform 100ms',
      userSelect: 'none',
      pointerEvents: 'none',
      opacity: '0',
    });

    setTimeout(() => {
      cursor.removeAttribute('hidden');
      cursor.style.opacity = '1';
    }, 300);

    let previousPointerX = 0;
    let previousPointerY = 0;
    let pointerX = 0;
    let pointerY = 0;
    let angle = 0;
    let previousAngle = 0;
    let angleDisplace = 0;
    const degrees = 57.296;

    function rotate(distanceX, distanceY) {
      const unsortedAngle =
        Math.atan(Math.abs(distanceY) / Math.abs(distanceX)) * degrees;
      previousAngle = angle;

      if (distanceX <= 0 && distanceY >= 0) {
        angle = 90 - unsortedAngle + 0;
      } else if (distanceX < 0 && distanceY < 0) {
        angle = unsortedAngle + 90;
      } else if (distanceX >= 0 && distanceY <= 0) {
        angle = 90 - unsortedAngle + 180;
      } else if (distanceX > 0 && distanceY > 0) {
        angle = unsortedAngle + 270;
      }

      if (isNaN(angle)) {
        angle = previousAngle;
      } else {
        if (angle - previousAngle <= -270) {
          angleDisplace += 360 + angle - previousAngle;
        } else if (angle - previousAngle >= 270) {
          angleDisplace += angle - previousAngle - 360;
        } else {
          angleDisplace += angle - previousAngle;
        }
      }

      cursor.style.left = `${-cursorSize / 2}px`;
      cursor.style.top = `0px`;
      cursor.style.transform += ` rotate(${angleDisplace}deg)`;
    }

    function onMouseMove(event) {
      previousPointerX = pointerX;
      previousPointerY = pointerY;
      pointerX = event.pageX + root.getBoundingClientRect().x;
      pointerY = event.pageY + root.getBoundingClientRect().y;

      const distanceX = previousPointerX - pointerX;
      const distanceY = previousPointerY - pointerY;
      const distance = Math.sqrt(distanceY ** 2 + distanceX ** 2);

      cursor.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;

      if (distance > 1) {
        rotate(distanceX, distanceY);
      } else {
        cursor.style.transform += ` rotate(${angleDisplace}deg)`;
      }
    }

    function onTouchMove(event) {
      onMouseMove(event.touches[0]);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('touchmove', onTouchMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('touchmove', onTouchMove);
      cursor.style.opacity = '0';
      setTimeout(() => cursor.setAttribute('hidden', 'hidden'), 300);
    };
  }, []);

  return (
    <div className="curzr-arrow-pointer" hidden>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        style={{ width: '100%', height: '100%' }}
      >
        <path
          d="M25,30a5.82,5.82,0,0,1-1.09-.17l-.2-.07-7.36-3.48a.72.72,0,0,0-.35-.08.78.78,0,0,0-.33.07L8.24,29.54a.66.66,0,0,1-.2.06,5.17,5.17,0,0,1-1,.15,3.6,3.6,0,0,1-3.29-5L12.68,4.2a3.59,3.59,0,0,1,6.58,0l9,20.74A3.6,3.6,0,0,1,25,30Z"
          fill="#fef9f0"
        />
        <path
          d="M16,3A2.59,2.59,0,0,1,18.34,4.6l9,20.74A2.59,2.59,0,0,1,25,29a5.42,5.42,0,0,1-.86-.15l-7.37-3.48a1.84,1.84,0,0,0-.77-.17,1.69,1.69,0,0,0-.73.16l-7.4,3.31a5.89,5.89,0,0,1-.79.12,2.59,2.59,0,0,1-2.37-3.62L13.6,4.6A2.58,2.58,0,0,1,16,3m0-2h0A4.58,4.58,0,0,0,11.76,3.8L2.84,24.33A4.58,4.58,0,0,0,7,30.75a6.08,6.08,0,0,0,1.21-.17,1.87,1.87,0,0,0,.4-.13L16,27.18l7.29,3.44a1.64,1.64,0,0,0,.39.14A6.37,6.37,0,0,0,25,31a4.59,4.59,0,0,0,4.21-6.41l-9-20.75A4.62,4.62,0,0,0,16,1Z"
          fill="#2d1b00"
        />
      </svg>
    </div>
  );
}
