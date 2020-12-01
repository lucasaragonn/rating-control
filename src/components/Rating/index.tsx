import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';

const Rating = ({ handler }: { handler: Function }) => {

  const [state, setstate] = useState(0);

  useEffect(()=> {
    handler(state);
  }, [handler, state])

  return (
    <div className={styles.ratingContainer}>
      {[5,4,3,2,1].map((r, i) => {
        return <>
          <input
            key={i}
            onClick={() => {
              console.log(r)
              setstate(r)
            }}
            type="radio"
            id={`${r}`}
            name="rating"
            value={r}
            disabled={state === r}
          />
          <label htmlFor={`${r}`} title="text">{r}</label>
        </>
      })}
    </div>
  );
}

export default Rating;