import React from "react";
import { BsThreeDots } from "react-icons/bs";

// Redux
import { useSelector } from "react-redux";

export const DataDriver = (props) => {
  const offset = props.offset;
  const perPage = props.perPage;

  //Initial for redux
  const dataDriver = useSelector((state) => state.dataDriver);
  const windowSize = useSelector((state) => state.windowSize);

  const showDrive =
    windowSize.width > 500 ? dataDriver.slice(offset, perPage) : dataDriver;

  return (
    <section className="driver">
      {showDrive.map((item, key) => {
        // Convert Date Time
        const getDOB = new Date(item.dob.date);
        const dob = `${getDOB.getDate()}-${getDOB.getMonth()}-${getDOB.getFullYear()}`;

        return (
          <div className="driver-container" key={key}>
            <div className="driver-header">
              <p>
                Driver ID <span>{item.cell}</span>
              </p>
              <BsThreeDots />
            </div>
            <hr />
            <div className="driver-body">
              <div className="driver-logo">
                <img
                  src={item.picture.large}
                  className="driver-icon"
                  alt={item.name}
                />
              </div>
              <div className="driver-data">
                <p>Nama Driver</p>
                <h4>
                  {item.name.first} {item.name.last}
                </h4>

                <p>Telepon</p>
                <h4>{item.phone}</h4>

                <p className="data-mobile">Email</p>
                <h4 className="data-mobile">{item.email}</h4>

                <p className="data-mobile">Tanggal Lahir</p>
                <h4 className="data-mobile">{dob}</h4>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};
