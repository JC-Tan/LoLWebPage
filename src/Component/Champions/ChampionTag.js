import styles from "./ChampionTag.module.css";

/**
 * ChampionTag
 * Displays the champion's role and difficulty.
 * Roles are:
 *            - Fighter
 *            - Mage
 *            - Marksman
 *            - Tank
 *            - Support
 */
const ChampionTag = (props) => {
  const difficulty =
    props.diff < 4
      ? ["LOW", 1]
      : props.diff >= 4 && props.diff < 8
      ? ["MODERATE", 2]
      : ["HIGH", 3];

  const tagImage = `https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/npe-ft-role-icon-${props.tag.toLowerCase()}.png`;
  return (
    <div className={`${styles["tag-wrapper"]}`}>
      <ul className={styles.ul}>
        <li>
          <img className={`${styles["tag-image"]}`} src={tagImage} />
          <p className={`${styles["upper-text"]}`}>ROLE</p>
          <p className={`${styles["lower-text"]}`}>{props.tag.toUpperCase()}</p>
        </li>
        <li>
          <div className={`${styles["bar-container"]}`}>
            <span className={`${styles["span-container"]}`}>
              <span className={`${styles["span-bar"]}`}>
                <span className={styles.bar} />
                <span
                  className={styles.bar}
                  style={{ opacity: difficulty[1] >= 2 ? 1 : 0.2 }}
                />
                <span
                  className={styles.bar}
                  style={{ opacity: difficulty[1] >= 3 ? 1 : 0.2 }}
                />
              </span>
            </span>
          </div>
          <p className={`${styles["upper-text"]}`}>DIFFICULTY</p>
          <p className={`${styles["lower-text"]}`}>{difficulty[0]}</p>
        </li>
      </ul>
    </div>
  );
};

export default ChampionTag;
