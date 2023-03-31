import React, { useState, useEffect } from 'react';

const ReactWavePath = ({
  frequency = 3,
  speed = 0.04,
  id = 'ReactWavePath',
}) => {
  const wavePoints = 20;
  const initialWaveData = Array.from({ length: wavePoints }, (_, i) => ({
    t: (i / (wavePoints - 1)) * 2 * Math.PI,
    val: 0,
    amplitude: 0.081 + Math.random() * 0.22,
  }));

  const [offset, setOffset] = useState(0);
  const [waveData, setWaveData] = useState(initialWaveData);

  useEffect(() => {
    const animateWave = () => {
      setOffset((prevOffset) => {
        const newOffset = prevOffset + speed;
        return newOffset > frequency * 2 * Math.PI ? 0 : newOffset;
      });

      setWaveData((prevWaveData) =>
        prevWaveData.map((wave) => {
          const newT = wave.t + speed;
          const newVal = Math.sin(newT + offset) * wave.amplitude;
          return { t: newT, val: newVal, amplitude: wave.amplitude };
        })
      );
    };
    const interval = setInterval(animateWave, 1000 / 60); // 60 FPS
    return () => clearInterval(interval);
  }, [speed, frequency, offset]);

  const getPath = () => {
    const startPoint = { x: 0, y: 0.5 + waveData[0].val };
    const pathData = [`M 0 0 L 0 ${startPoint.y}`];

    for (let i = 1; i < waveData.length - 1; i++) {
      const currPoint = { x: i / (wavePoints - 1), y: 0.5 + waveData[i].val };
      const nextPoint = { x: (i + 1) / (wavePoints - 1), y: 0.5 + waveData[i + 1].val };
      const controlPoint = {
        x: (currPoint.x + nextPoint.x) / 2,
        y: (currPoint.y + nextPoint.y) / 2,
      };
      pathData.push(`Q ${currPoint.x} ${currPoint.y}, ${controlPoint.x} ${controlPoint.y}`);
    }

    const endPoint = {
      x: 1,
      y: 0.5 + waveData[waveData.length - 1].val,
    };
    pathData.push(`Q ${waveData.length - 1} ${endPoint.y}, ${endPoint.x} ${endPoint.y}`);
    pathData.push('L 1 1 L 0 1 Z');

    return pathData.join(' ');
  };

  return (
    <svg width="0" height="0" viewBox="0 0 1 1">
      <clipPath id={id} clipPathUnits="objectBoundingBox">
        <path d={getPath()} />
      </clipPath>
    </svg>
  );
};

export default ReactWavePath;
