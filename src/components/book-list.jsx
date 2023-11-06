import React from "react";
import Logo from "../assets/logo.png";
export default function BookList(props) {
  const { volumeInfo } = props.book;
  // Handling invalid image URL
  let imageUrl = volumeInfo.imageLinks?.smallThumbnail;
  if (!imageUrl || imageUrl.startsWith("/")) {
    imageUrl = Logo;
  }
  return (
    <div className="card card-compact w-64 bg-base-100 shadow-xl">
      <figure className="px-2 pt-10">
        <img
          src={imageUrl}
          onError={() => {
            this.src = "default.png";
          }}
          alt="Books"
          className="rounded-xl h-52 "
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{volumeInfo.title.slice(0, 20)}</h2>
        <h4 className="font-bold text-sm">
          Author:{" "}
          <span className=" font-medium">
            {volumeInfo.authors?.map((e) => `${e}, `)}
          </span>
        </h4>
        <div className="card-actions flex flex-col items-center">
          <button
            className="btn btn-neutral btn-sm btn-outline px-10"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Book Info
          </button>
          <button
            className="btn  btn-secondary btn-sm btn-outline px-10"
            onClick={() => window.open(volumeInfo.previewLink)}
          >
            Read Book
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Description</h3>
              <p className="py-4">{volumeInfo.description}</p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
}
