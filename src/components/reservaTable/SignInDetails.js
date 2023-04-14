import React from "react";
import images4 from "./reservation/img4.jpg";
import images6 from "./reservation/img6.jpg";
import images5 from "./reservation/gallery2.jpg";

const SignInDetails = ({ formData, setFormData }) => {
  return (
    <div>
      <form className="bg-teal-900 py-2">
        <div className="w-7/12  mx-auto">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="first_name"
                className=" mb-2 text-sm font-medium text-white"
              >
                First name
              </label>
              <input
                value={formData.firstName}
                onChange={(event) =>
                  setFormData({ ...formData, firstName: event.target.value })
                }
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 "
                placeholder="enter your first name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className=" mb-2 text-sm font-medium text-white"
              >
                Last name
              </label>
              <input
                type="text"
                id="last_name"
                value={formData.lastName}
                onChange={(event) =>
                  setFormData({ ...formData, lastName: event.target.value })
                }
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 "
                placeholder="enter your last name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className=" mb-2 text-sm font-medium text-white"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(event) =>
                  setFormData({ ...formData, email: event.target.value })
                }
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 "
                placeholder="hello@gmail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className=" mb-2 text-sm font-medium text-white"
              >
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phnumber}
                onChange={(event) =>
                  setFormData({ ...formData, phnumber: event.target.value })
                }
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 "
                placeholder="91-xxxxxxxxx"
                pattern="[1,9]{2}-[0-9]{9}"
                required
              />
            </div>
            <div>
              <p>data,terms&conditions</p>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-white"
              >
                Special Requests
              </label>
              <textarea
                id="message"
                rows="4"
                value={formData.textarea}
                onChange={(event) =>
                  setFormData({ ...formData, textarea: event.target.value })
                }
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
          </div>
        </div>
      </form>
      <div className="w-7/12 h-22 ml-auto mr-auto">
        <div className="grid  gap-6  md:mt-6 md:mb-6 md:grid-cols-3">
          <img
            src={images4}
            alt=""
            className="object-cover aspect-video object-center   md:rounded-xl"
          />
          <img
            src={images5}
            alt=""
            className="object-cover aspect-video object-center   md:rounded-xl"
          />
          <img
            src={images6}
            alt=""
            className="object-cover aspect-video object-center   md:rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default SignInDetails;
