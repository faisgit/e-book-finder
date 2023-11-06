import Bg from "../assets/bg.jpg";
export default function Hero(props) {
  return (
    <div className="hero h-96" style={{ backgroundImage: `url(${Bg})` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div
          className="max-w-md"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <form className="flex justify-center items-center ">
            <input
              type="text"
              placeholder="Search Books"
              className="input input-bordered w-52 md:w-96 max-w-xs text-black mr-3"
              value={props.inputValue}
              onChange={(e) => props.setInputValue(e.target.value)}
            />
            <button
              className="btn btn-secondary rounded-lg px-6"
              onClick={() => props.fetchData(props.inputValue)}
            >
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
