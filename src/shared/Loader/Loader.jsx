import React from 'react';
import { Vortex } from 'react-loader-spinner';


import styles from "./loader.module.scss";


const Loader = ({text}) => {
  return (
<div className={styles.loader}>
<Vortex
  visible={true}
  height="80"
  width="80"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
/>
</div>
  )
}

export default Loader;