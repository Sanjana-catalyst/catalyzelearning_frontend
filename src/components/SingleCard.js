const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
}) => {
  return (
    <div className="border rounded-lg">
      <div className="overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
        {/* If you want to include the image */}
        {image && (
          <img
            src={image}
            alt=""
            className="w-full h-auto rounded-t-lg object-cover"
          />
        )}
        <div className="text-center p-4 sm:px-6 md:p-7 xl:px-9">
          <h3>
            <a
              href={titleHref ? titleHref : "/#"}
              className="mb-2 block text-lg sm:text-xl font-semibold text-left md:text-[22px] lg:text-xl xl:text-[22px] 2xl:text-xl"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base text-left leading-relaxed text-body-color dark:text-dark-6">
            {CardDescription}
          </p>

          {Button && (
            <a
              href={btnHref ? btnHref : "#"}
              className="inline-block rounded-full border border-gray-300 px-4 py-2 text-sm sm:text-base font-medium text-body-color transition hover:bg-black hover:text-white"
            >
              {Button}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
