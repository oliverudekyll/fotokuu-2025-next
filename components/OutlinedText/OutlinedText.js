import styles from "./outlinedText.module.css";

export default function OutlinedText({
  value,
  textColor = "white",
  strokeColor = "black",
  strokeWidth = "0.83125rem",
}) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.text} style={{ color: textColor }}>
        {value}
      </span>
      <span
        className={styles.outline}
        style={{
          color: strokeColor,
          WebkitTextStroke: `${strokeWidth} ${strokeColor}`,
          WebkitTextFillColor: strokeColor,
        }}
      >
        {value}
      </span>
    </div>
  );
}
