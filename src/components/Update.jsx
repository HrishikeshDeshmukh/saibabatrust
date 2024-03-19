import React, { useEffect, useState } from "react";
import { IoIosAlarm } from "react-icons/io";

const DailyUpdate = () => {
  const [latestUpdate, setLatestUpdate] = useState();
  const [upcomingFest, setUpcomingFest] = useState();
  useEffect(() => {
    setLatestUpdate([
      {
        data: "“रंगपंचमी” या स्थानिक उत्सव कार्यक्रमाबाबत...",
        hyperlink: "#",
      },
      {
        data: "“गुढीपाडवा” या स्थानिक उत्सव कार्यक्रमाबाबत",
        hyperlink: "#",
      },
      {
        data: "“होळी” या स्थानिक उत्सव कार्यक्रमाबाबत",
        hyperlink: "#",
      },
      {
        data: "श्री साईबाबा व श्री साईनाथ रुग्‍णालयाकडील वैद्यकीय अधिकारी यांची आवश्‍यक रिक्‍त पदे कंत्राटी पध्‍दतीने ११ महिनचे कालावधीसाठी भरणेसाठी जाहिरात",
        hyperlink: "#",
      },
      {
        data: "Devotees List for Shri Sai Baba Aarti-Clothes. For the    Month of March-2024",
        hyperlink: "#",
      },
    ]);

    setUpcomingFest([
      {
        data: "SHRI RAM NAVAMI FESTIVAL 2024",
      },
    ]);
  }, []);
  return (
    <div>
      <style>{""}</style>
      <div className="update-main-div">
        {/* First main cart */}
        <div
          className="update-daily-prog update-innerdivs"
          data-aos="fade-right"
          data-aos-duration="2500"
        >
          <h3>
            <span className="update-alram-ico">
              <IoIosAlarm />{" "}
            </span>
            &nbsp; Daily Programme
          </h3>

          <div class="update-card">
            <div class="update-bg">asdf</div>
            <div class="update-blob"></div>
          </div>
        </div>

        {/* Second main cart */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="2500"
          className="update-upcoming-fest update-innerdivs"
        >
          <h3>
            <span className="update-alram-ico">
              <IoIosAlarm />
            </span>
            &nbsp; Upcoming Festivals
          </h3>
          <div class="update-card">
            <div class="update-bg">
              <div class="update-scrolling-container">
                <div class="update-content">
                  {upcomingFest &&
                    upcomingFest.map((item, index) => (
                      <div key={index}>
                        <p className="update-upcoming-fest">{item.data}</p>

                        <hr />
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div class="update-blob"></div>
          </div>
        </div>

        {/* Third main cart */}
        <div
          data-aos="fade-left"
          data-aos-duration="2500"
          className="update-latest-update update-innerdivs"
        >
          <h3>
            <span className="update-alram-ico">
              <IoIosAlarm />
            </span>{" "}
            &nbsp; Latest Updates
          </h3>
          <div class="update-card">
            <div class="update-bg">
              <div class="update-scrolling-container">
                <div class="update-content">
                  {latestUpdate &&
                    latestUpdate.map((item, index) => (
                      <div key={index}>
                        <p>
                          <a href={item.hyperlink}>{item.data}</a>
                        </p>
                        <hr />
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div class="update-blob"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyUpdate;
