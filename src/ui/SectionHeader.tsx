

import { useNavigate } from "react-router-dom";

const SectionHeaderWithButton = ({
  titleMain = "Main Title",
  titleAccent = "",
  buttonLabel = "All Products",
  buttonHref = "/", 
  showAccent = true,
  showButton = true,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (buttonHref) {
      navigate(buttonHref);
    }
  };

  return (
    <div className="mt-20">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-3xl font-sk text-dark-gray">
          {titleMain}
          {showAccent && titleAccent && (
            <span className="ml-2 font-nautigal text-fancy-color">
              {titleAccent}
            </span>
          )}
        </h2>

        {showButton && (
      <button
  onClick={handleClick}
  className="relative overflow-hidden group px-4 py-1.5 mb-5 sm:mb-0 border border-fancy text-fancy-color text-sm rounded w-max transition-all duration-300"
>
  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
    {buttonLabel}
  </span>
  <span className="absolute inset-0 bg-fancy-color scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 z-0 rounded"></span>
</button>

        )}
      </div>
    </div>
  );
};

export default SectionHeaderWithButton;
