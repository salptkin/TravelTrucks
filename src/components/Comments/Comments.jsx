import Svg from "../Svg/Svg";
import styles from "./Comments.module.css";

function Comments({ review }) {
  const maxReview = [1, 2, 3, 4, 5];

  return (
    <li className={styles.commentCard}>
      <div className={styles.commentHeader}>
        <p className={styles.avatar}>
          {review.reviewer_name[0]}
        </p>

        <div>
          <p className={styles.reviewerName}>{review.reviewer_name}</p>
          <ul className={styles.stars}>
            {maxReview.map((_, i) =>
              i + 1 <= review.reviewer_rating ? (
                <li key={`filled-${i}`}>
                  <Svg iconName="filled-star" cssClass="w-[16px] h-[16px]" />
                </li>
              ) : (
                <li key={`empty-${i}`}>
                  <Svg iconName="empty-star" cssClass="w-[16px] h-[16px]" />
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      <p className={styles.commentText}>{review.comment}</p>
    </li>
  );
}

export default Comments;
