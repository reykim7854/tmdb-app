import React, { useContext } from "react";
import type { Prop } from "../../types.ts";
import { IconContext } from "../../IconContext.ts";

const FavoriteIcon: React.FC = () => {
  const { size, fill, standalone } = useContext<Prop>(IconContext);

  return (
    <>
      <svg
        width={`${size}`}
        height={`${size}`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden={!standalone}
      >
        {standalone && (
          <>
            <title id="title-favorite-icon">Add to Favorite</title>
            <desc id="desc-favorite-icon">
              Add to favorite icon in the shape of a heart
            </desc>
          </>
        )}
        <path
          d="M12 21L10.55 19.7C8.86667 18.1834 7.475 16.875 6.375 15.775C5.275 14.675 4.4 13.6874 3.75 12.812C3.1 11.9374 2.646 11.1334 2.388 10.4C2.13 9.66669 2.00067 8.91669 2 8.15002C2 6.58336 2.525 5.27502 3.575 4.22502C4.625 3.17502 5.93333 2.65002 7.5 2.65002C8.36667 2.65002 9.19167 2.83336 9.975 3.20002C10.7583 3.56669 11.4333 4.08336 12 4.75002C12.5667 4.08336 13.2417 3.56669 14.025 3.20002C14.8083 2.83336 15.6333 2.65002 16.5 2.65002C18.0667 2.65002 19.375 3.17502 20.425 4.22502C21.475 5.27502 22 6.58336 22 8.15002C22 8.91669 21.8707 9.66669 21.612 10.4C21.3533 11.1334 20.8993 11.9374 20.25 12.812C19.6 13.6874 18.725 14.675 17.625 15.775C16.525 16.875 15.1333 18.1834 13.45 19.7L12 21Z"
          fill={fill}
        />
      </svg>
    </>
  );
};

export default FavoriteIcon;
