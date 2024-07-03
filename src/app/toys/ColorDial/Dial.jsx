import { motion } from 'framer-motion';

export default function Dial({angle, changeAngle}) {
   return (
    <button onClick={changeAngle}>
    <motion.svg animate={{ rotate: angle }} style={{ transformOrigin: 'center' }} viewBox="0 0 500 500"
      xmlSpace="preserve"
      width="50"
      height="50"
      xmlns="http://www.w3.org/2000/svg">
        <defs>
        <linearGradient id="bronze" gradientTransform="rotate(90)">
          <stop offset="3%" stopColor="#8b6c34" />
          <stop offset="35%" stopColor="#674a21" />
          <stop offset="55%" stopColor="#8b6c34" />
          <stop offset="95%" stopColor="#674a21" />
        </linearGradient>
      </defs>
      <polygon
        points="500,250 473.216,279.409 491.536,314.718 458.049,336.172 466.532,375.03 428.619,387.055     426.778,426.778 387.044,428.619 375.02,466.543 336.161,458.049 314.707,491.547 279.409,473.226 250,500 220.581,473.226     185.282,491.547 163.818,458.049 124.959,466.543 112.945,428.619 73.222,426.778 71.371,387.044 33.458,375.021 41.941,336.172     8.453,314.718 26.774,279.409 0,250 26.774,220.591 8.453,185.282 41.941,163.829 33.458,124.97 71.371,112.956 73.222,73.222     112.956,71.381 124.97,33.468 163.829,41.952 185.282,8.463 220.581,26.784 250,0 279.409,26.784 314.718,8.463 336.172,41.962     375.03,33.468 387.044,71.381 426.778,73.232 428.619,112.966 466.532,124.98 458.049,163.839 491.536,185.282 473.216,220.591       "
        fill="url('#bronze')"
      />
      <line x1="250" y1="45" x2="250" y2="115" stroke="black" strokeWidth="7"></line>
      </motion.svg>
    </button>
   )
}