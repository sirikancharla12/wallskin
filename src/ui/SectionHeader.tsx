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
    <div className="flex items-center justify-between flex-wrap gap-4">
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
          className="px-4 py-1.5 border border-fancy text-dark-gray hover:bg-fancy-color hover:text-white transition-all text-sm rounded"
        >
          {buttonLabel}
        </button>
      )}
    </div>
  );
};

export default SectionHeaderWithButton;
