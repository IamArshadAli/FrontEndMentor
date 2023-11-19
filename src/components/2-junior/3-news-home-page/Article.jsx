/* eslint-disable react/prop-types */
const Article = ({
  index,
  title,
  titleStyle,
  image,
  description,
  descriptionStyle,
}) => {
  return (
    <div className="flex space-x-4">
      {image && <img src={image} alt={title} className="max-w-[6.25rem] object-cover" />}
      <div className="flex flex-col gap-2">
        {index && (
          <h2 className="text-2xl text-GrayishBlue23 font-extrabold">{index}</h2>
        )}
        <h4 className={`cursor-pointer font-extrabold ${titleStyle}`}>{title}</h4>
        <p className={`text-sm ${descriptionStyle}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Article;
