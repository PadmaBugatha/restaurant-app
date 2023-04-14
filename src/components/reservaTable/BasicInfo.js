import React from "react";
import images1 from "./reservation/img1.jpg";
import images2 from "./reservation/img2.jpg";
import images3 from "./reservation/gallery3.jpg";

const BasicInfo = ({ formData, setFormData }) => {
  return (
    <>
      <div className="bg-teal-900 py-2">
        <div className="w-7/12  ml-auto mr-auto">
          <h1 className="text-3xl font-bold text-yellow-600 tracking-tight mb-6">
            Reservations
          </h1>
          <form>
            <div className="grid gap-6 my-3 md:grid-cols-2">
              <div>
                <label
                  htmlFor="radio-1"
                  className="mr-4  text-base font-medium text-gray-300"
                >
                  Indoor seating
                </label>
                <input
                  id="default-radio-1"
                  type="radio"
                  value="Indoor seating"
                  onChange={() => {
                    setFormData({ ...formData, seating: "Indoor seating" });
                  }}
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="default-radio-2"
                  className="mr-4 text-base font-medium text-gray-300"
                >
                  Outdoor seating
                </label>
                <input
                  checked
                  id="default-radio-2"
                  type="radio"
                  value="Outdoor seating"
                  onChange={() => {
                    setFormData({ ...formData, seating: "Outdoor seating" });
                  }}
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="select_date"
                  className=" mb-2 text-sm font-medium text-white"
                >
                  Date
                </label>
                <input
                  type="date"
                  id="select_date"
                  value={formData.date}
                  onChange={(event) =>
                    setFormData({ ...formData, date: event.target.value })
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5"
                  placeholder="Select Date"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="select_time"
                  className=" mb-2 text-sm font-medium text-white"
                >
                  Time
                </label>
                <input
                  type="time"
                  id="select_time"
                  value={formData.timeslot}
                  onChange={(event) =>
                    setFormData({ ...formData, timeslot: event.target.value })
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5"
                  placeholder="Select time"
                  required
                />
              </div>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="occasions"
                  className=" mb-2 text-sm font-medium text-white"
                >
                  Occasion
                </label>
                <select
                  id="occasions"
                  value={formData.occation}
                  onChange={(event) =>
                    setFormData({ ...formData, occation: event.target.value })
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option defaultValue>Occasion</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Engagement">Engagement</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="first_name"
                  className=" mb-2 text-sm font-medium text-white "
                >
                  Number of Diners
                </label>
                <input
                  type="text"
                  id="first_name"
                  value={formData.numofDiners}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      numofDiners: event.target.value,
                    })
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5"
                  placeholder="No. of diners"
                  required
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="w-7/12 h-22 ml-auto mr-auto">
        <div className="grid  gap-6  md:mt-6 md:mb-6 md:grid-cols-3">
          <img
            src={images1}
            alt=""
            className="object-cover aspect-video object-center   md:rounded-xl"
          />
          <img
            src={images2}
            alt=""
            className="object-cover aspect-video object-center   md:rounded-xl"
          />
          <img
            src={images3}
            alt=""
            className="object-cover aspect-video object-center   md:rounded-xl"
          />
        </div>
      </div>
    </>
  );
};

export default BasicInfo;
