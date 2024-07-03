'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Dial from './Dial';
import ColorPicker from "./ColorPicker";
import styles from './page.module.css';

let baseColors = [
  {
    lightness: 97.33,
    chroma: 0.011,
    hue: 89.72,
    name: 'bone white',
    key: crypto.randomUUID(),
  },
  {
    lightness: 82.79,
    chroma: 0.028,
    hue: 179.53,
    name: 'duck egg blue',
    key: crypto.randomUUID(),
  },
  {
    lightness: 50.7,
    chroma: 0.084,
    hue: 115.77,
    name: 'olive green',
    key: crypto.randomUUID(),
  },
  {
    lightness: 56.093559234739246,
    chroma: 0.16272056088093806,
    hue: 134.61684392672262,
    name: 'grass green',
    key: crypto.randomUUID(),
  },
  {
    lightness: 46.12,
    chroma: 0.133,
    hue: 31.84,
    name: 'brick red',
    key: crypto.randomUUID(),
  },
];

export function ColorDial() {
  const [lightness, setLightness] = useState(baseColors[0].lightness);
  const [color, setColor] = useState<{ chroma: number; hue: number }>({
    chroma: baseColors[0].chroma,
    hue: baseColors[0].hue,
  });
  const [colorPickerHidden, setColorPickerHidden] = useState(true);
  const [angle, setAngle] = useState(0);
  const [increasing, setIncreasing] = useState(true);

  function changeAngle() {
    let nextAngle = angle;
    if (increasing === true) {
      let newTransparency = lightness + 5;
      setLightness(newTransparency);
      nextAngle += 5;
    } else {
      let newTransparency = lightness - 5;
      setLightness(newTransparency);
      nextAngle -= 5;
    }

    setAngle(nextAngle);

    if (nextAngle === -20) {
      setIncreasing(true);
    } else if (nextAngle === 20) {
      setIncreasing(false);
    }
  }

  function changeColor(inputName: string) {
    let { lightness, chroma, hue } = baseColors.filter(
      (color) => color.name === inputName
    )[0];

    setLightness(lightness);
    setColor({ chroma, hue });
    setAngle(0);

    if (inputName === 'duck egg blue') {
      document.documentElement.style.cssText = '--cards-background: #F9F6EE';
    }
    if (inputName !== 'duck egg blue') {
      document.documentElement.style.cssText = '--cards-background: #b4cdc7';
    }
  }

  return (
    <div className={styles.colorDial}>
      <motion.div
        style={{
          height: '5em',
          width: '5em',
          borderRadius: '50%',
        }}
        animate={{
          background: `oklch(${lightness}% ${color.chroma} ${color.hue})`,
          transition: { duration: 0.4 },
        }}
      ></motion.div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: "15px",
          width: "100%"
        }}
      >
        <Dial angle={angle} changeAngle={changeAngle} />
        <button onClick={() => setColorPickerHidden((val) => !val)}>{colorPickerHidden === true ? 'More' : 'Fewer'} Colors </button>
        {colorPickerHidden !== true ? (
          <ColorPicker baseColors={baseColors} changeColor={changeColor} />
        ) : null}
      </div>
    </div>
  );
}
