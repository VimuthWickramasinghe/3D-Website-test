import style from "./loading.module.scss";
import React, { useEffect, useState } from "react";

export default function Loading() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    showLoading && (
      <div className={`${style.loader}`}>
        <div className={`${style.cell} ${style["d-1"]}`}></div>
        <div className={`${style.cell} ${style["d-2"]}`}></div>
        <div className={`${style.cell} ${style["d-3"]}`}></div>

        <div className={`${style.cell} ${style["d-4"]}`}></div>
        <div className={`${style.cell} ${style["d-5"]}`}></div>

        <div className={`${style.cell} ${style["d-6"]}`}></div>
        <div className={`${style.cell} ${style["d-7"]}`}></div>

        <div className={`${style.cell} ${style["d-8"]}`}></div>
        <div className={`${style.cell} ${style["d-9"]}`}></div>
      </div>
    )
  );
}
